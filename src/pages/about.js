// Step 1: Import React
import * as React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

// pre-built Link component
const AboutPage = () => {
  return (
    <Layout pageTitle="About">
      <h1>About Me</h1>
      <Link to="/">Back to Home</Link>
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
      </Layout>
  )
}

export const Head = () => <Seo title="About Page"/>

export default AboutPage