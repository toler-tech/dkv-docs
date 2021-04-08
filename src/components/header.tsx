import React from 'react'
import { Link } from 'gatsby'

const Header: React.FC<Props> = props => (
  <header className="layout-header">
    <div className="container">
      <span className="heading-1 logo">
        <Link to="/">{props.siteTitle}</Link>
      </span>
    </div>
  </header>
)

interface Props {
  siteTitle: string
}

export default Header
