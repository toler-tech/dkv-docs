import React, { PropsWithChildren } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Header from './header'
import Sidebar from './sidebar'
import '../static/style.css'

const Layout: React.FC<Props> = props => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="layout-wrapper">
      <Header siteTitle={data.site.siteMetadata?.title || 'Title'} />
      <Sidebar />
      <div className="content">
        <div className="container">
          <main>{props.children}</main>
          <footer className="layout-footer">
            <p>
              Copyright &copy; {new Date().getFullYear()}{' '}
              <a href="mailto:eric@bluesangelmusic.com">Eric Toler</a>. All
              documentation on this site is free for public use.
            </p>
            <p>
              Find an error? Contribute on{' '}
              <a
                href="https://github.com/toler-tech/dkv-docs"
                target="_blank"
                rel="noopener noreferer"
              >
                GitHub
              </a>
              !
            </p>
          </footer>
        </div>
      </div>
    </div>
  )
}

interface Props extends PropsWithChildren<any> {}

export default Layout
