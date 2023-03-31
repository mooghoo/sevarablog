import { Link, graphql } from 'gatsby'
import * as React from 'react'
import { postLinks } from '../../components/blog.module.css'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

// using GraphQL query allFile > nodes with filter to blog 
// links to post inside top-level blog directory with dynamic link
const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Blog Posts">
      {
        data.allMdx.nodes.map(node =>   (
            <article key={node.id}>
            <h2><Link className={postLinks} to={`${node.frontmatter.slug}`}>
              {node.frontmatter.title}
              </Link>
              </h2>
            <p>Posted: {node.frontmatter.date}</p>
            <p>{node.excerpt}</p>
          </article>
        )) }
      
    </Layout>
  )
}

export const query = graphql`
query {
    allMdx(sort: {frontmatter: {date: DESC}}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
        excerpt
      }
    }
  }`


export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage