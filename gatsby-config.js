module.exports = {
  siteMetadata: {
    title: 'DKV Docs',
    description:
      'Documentation for setting up a Yamaha Disklavier player piano system',
    author: 'Eric Toler <eric@toler.tech>',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'markdown',
        path: `${__dirname}/src/md`,
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-autolink-headers',
            options: {
              elements: ['h2'],
            },
          },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'noopener noreferrer',
            },
          },
        ],
      },
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'dkv-docs',
        short_name: 'dkv-docs',
        start_url: '/',
        background_color: 'white',
        theme_color: '001659',
        display: 'minimal-ui',
        icon: 'src/static/img/favicon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-gatsby-cloud',
    {
      resolve: 'gatsby-plugin-catch-links',
      options: {
        excludePattern: /^http/,
      },
    },
  ],
}
