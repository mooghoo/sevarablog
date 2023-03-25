import * as React from 'react'
import { Link } from 'gatsby'
import { container, heading, navLinks, navLinkItem } from '../components/layout.module.css'

// destructuring of the props: returns the prop's title and children! 
// layout == parent component
// using class name from css modules 
const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
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