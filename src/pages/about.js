// Step 1: Import React
import * as React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

// pre-built Link component
const AboutPage = () => {
  return (
    <Layout pageTitle="About">
      <p>I built this site with <a href="https://www.gatsbyjs.com/">Gatsby</a>, following their tutorial. I might have more to say later.</p>
      </Layout>
  )
}

export const Head = () => <Seo title="About Page"/>

export default AboutPage