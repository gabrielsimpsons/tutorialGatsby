import { Link } from "gatsby"
import React from "react"
import Header from "./header"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout({ children }) {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
      <header>
        <Link to="/" style={{textShadow:`none` , backgroundImage:`none`}}>
          <h3 style={{ display:`inline`}}>This is the title</h3>
        </Link>
        <ul style={{ listStyle: `none`, float: `right` }}><ListLink to="/">Home</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/contact/">Contact</ListLink></ul>
      </header>
      {children}
    </div>
  )
}
