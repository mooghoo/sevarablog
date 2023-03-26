import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

// site title is a static query using graphql to get the title of the site and change it according to the page
const Seo = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <title>{title} | {data.site.siteMetadata.title}</title>
  )
}

export default Seo