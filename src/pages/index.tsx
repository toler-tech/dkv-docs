import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Disklavier Made Easy</h1>
      <p>
        If you've ever tried to set up a Yamaha{' '}
        <strong>Disklavier ENSPIRE</strong> player piano system on a home
        network, you know it can be challenging. This site has been assembled to
        help make the process as simple and painless as possible, as well as to
        offer solutions to some of the more challenging issues you may
        encounter.
      </p>
      <p>
        These documents were originally prepared for use by{' '}
        <a href="https://bluesangelmusic.com/">Blues Angel Music</a>'s piano
        installers, but they are now being made available to the public.
      </p>
      <ul>
        <li>
          Learn what you need to get started with our{' '}
          <Link to="/docs/requirements">requirements guide</Link>.
        </li>
        <li>
          Set up your Disklavier using our thoroughly tested{' '}
          <Link to="/docs/installation">installation process</Link>.
        </li>
        <li>
          Networking troubles? Take a look at our{' '}
          <Link to="/docs/networking">
            solution to a common networking problem
          </Link>
          .
        </li>
        <li>
          Have questions about the Disklavier? Take a look at some of the{' '}
          <Link to="/docs/faq">questions we hear most often</Link>.
        </li>
      </ul>
    </Layout>
  )
}

export default IndexPage
