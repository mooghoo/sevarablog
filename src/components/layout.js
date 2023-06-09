import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { container, heading, navLinks, navLinkItem, siteTitle } from '../components/layout.module.css'

// destructuring of the props: returns the prop's title and children! 
// layout == parent component
// using class name from css modules 
// data is a static query to find the site title for SEO
const Layout = ({ pageTitle, children }) => {
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
    <div className={container}>
        <header className={siteTitle}>The Jasmina/Ina Project</header> 
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}><Link to="/">Home</Link></li>
          <li className={navLinkItem}><Link to="/about">About</Link></li>
          <li className={navLinkItem}><Link to="/blog">Blog</Link></li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout