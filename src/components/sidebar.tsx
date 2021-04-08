import React, { useState } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { FaBars } from 'react-icons/fa'

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___order] }) {
        edges {
          node {
            frontmatter {
              slug
              title
            }
          }
        }
      }
    }
  `)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="sidebar-wrapper">
      <div className="sidebar-toggle" onClick={toggle}>
        <FaBars />
      </div>
      <div
        className="sidebar"
        style={{
          maxHeight: isOpen
            ? data.allMarkdownRemark.edges.reduce(
                (acc: number, _: any, i: number) => {
                  acc += 16
                  if (i) acc += 19.2

                  return acc
                },
                48
              )
            : 0,
        }}
      >
        <div className="sidebar-container">
          {data.allMarkdownRemark.edges.map(({ node }: { node: Node }) => {
            return (
              <Link
                key={node.frontmatter.slug}
                className="sidebar-link"
                to={`/${node.frontmatter.slug}`}
              >
                {node.frontmatter.title}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

type Node = {
  frontmatter: {
    slug: string
    title: string
  }
}

export default Sidebar
