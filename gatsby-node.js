const fs = require('fs')
const path = require('path')
const markdownpdf = require('markdown-pdf')
const through = require('through2')

exports.onPreBootstrap = () => {
  const inputDir = path.join(__dirname, 'src', 'md')
  const outputDir = path.join(__dirname, 'static', 'pdf')
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true })
  }

  const mdFiles = fs.readdirSync(inputDir, { withFileTypes: true })
  mdFiles.forEach(file => {
    if (!file.isFile) return

    const pdfName = `DKVDocs-${file.name
      .replace('.md', '.pdf')
      .replace(/^\w/, match => match.toUpperCase())}`

    const inputPath = path.join(inputDir, file.name)
    const outputPath = path.join(outputDir, pdfName)

    const preProcessMd = () =>
      through({}, (chunk, _, callback) => {
        const stringified = chunk.toString()
        const matches = stringified.match(/---(.*?)---(.*)/s)
        let output = ''

        if (matches) {
          const frontmatter = matches[1].split('\n').reduce((acc, line) => {
            const [key, value] = line.split(':')
            if (key && value) {
              acc[key.trim()] = value
                .trim()
                .replace(/^['|"]/, '')
                .replace(/['|"]$/, '')
            }

            return acc
          }, {})
          const body = matches[2].replace(
            /\[(.*?)\]\(.*\)/g,
            (_, group1) => `**${group1}**`
          )
          output += `# ${frontmatter.title}\n`
          output += `<small class="subtitle">Revised: ${frontmatter.date}</subtitle>\n`
          output += body
        } else {
          output += stringified
        }

        callback(null, output)
      })

    const preProcessHtml = () =>
      through({}, (chunk, _, callback) => {
        const stringified = chunk.toString()
        let output = stringified
        output += `<div class="pdf-footer">
            <p class="logo">Blues Angel Music</p>
            <p>
              Maintained by Eric Toler<br />
              eric@bluesangelmusic.com
            </p>
          </div>`

        callback(null, output)
      })

    if (fs.existsSync(outputPath)) fs.unlinkSync(outputPath)
    fs.createReadStream(inputPath)
      .pipe(
        markdownpdf({
          paperFormat: 'Letter',
          paperBorder: '1in',
          cssPath: path.join(__dirname, 'src', 'static', 'pdf.css'),
          preProcessMd,
          preProcessHtml,
          remarkable: {
            html: true,
          },
        })
      )
      .pipe(fs.createWriteStream(outputPath))
  })
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const documentationTemplate = require.resolve(
    './src/templates/documentation.tsx'
  )

  const result = await graphql(`
    {
      allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___order] }) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('Error while running GraphQL query.')
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: documentationTemplate,
      context: {
        slug: node.frontmatter.slug,
      },
    })
  })
}
