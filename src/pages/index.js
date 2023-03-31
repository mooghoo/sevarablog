import * as React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <p>Welcome to my website!</p>
      <p>Check out my blog for all of my progress cooking Ina Garten's recipes.</p>
      <StaticImage
        alt="Lavender tea with frothy oat milk"
        src="https://cloud-blh7xzyra-hack-club-bot.vercel.app/0img_6913.jpg"
      />
      <p>A lovely coffee {'('}that I did not make{')'}.</p>
    </Layout>
  )
}

// head component from Gatsby
export const Head = () => (
<Seo title="Home Page"/>
) 

export default IndexPage