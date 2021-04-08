import React, { useCallback } from 'react'
import { graphql } from 'gatsby'
import { FaDownload } from 'react-icons/fa'
import Layout from '../components/layout'

const DocumentationTemplate: React.FC<Props> = props => {
  const { markdownRemark } = props.data
  const { frontmatter, html, fileAbsolutePath } = markdownRemark

  const filename = useCallback((path: string) => {
    const matches = path.match(/.*\/(.*?)$/)
    if (!matches) return path
    const basename = matches[1]
    const filename = `/dkv-docs/pdf/DKVDocs-${basename
      .replace('.md', '.pdf')
      .replace(/^\w/, match => match.toUpperCase())}`

    return filename
  }, [])

  return (
    <Layout>
      <div className="documentation-container">
        <div className="documentation">
          <div className="page-header">
            <h1>{frontmatter.title}</h1>
            <p className="heading-5">
              <a href={filename(fileAbsolutePath)} download>
                <FaDownload /> Download
              </a>
            </p>
            <small className="subtitle">Last updated: {frontmatter.date}</small>
          </div>
          <div
            className="documentation-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </Layout>
  )
}

interface Props {
  data: {
    markdownRemark: {
      html: string
      frontmatter: {
        date: string
        slug: string
        title: string
      }
      fileAbsolutePath: string
    }
  }
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
      fileAbsolutePath
    }
  }
`

export default DocumentationTemplate
