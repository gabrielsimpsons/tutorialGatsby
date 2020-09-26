import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import Header from "./header"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout({ children }) {
  const data = useStaticQuery(graphql`
    query {
        allFile {
          edges {
            node {
              accessTime
              base
              id
              prettySize
              name
              extension
              relativeDirectory
              birthTime
            }
          }
        }
        allSite {
          nodes {
            siteMetadata {
              description
              siteUrl
              title
            }
          }
        }
      }
  `)
  return (
    <div
      css={css`
        margin: 0 auto;
        max-width: 700px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
      `}
    >
      <Link to={`/`}>
        <h3
          css={css`
            margin-bottom: ${rhythm(2)};
            display: inline-block;
            font-style: normal;
          `}
        >
          {data.allSite.nodes.find(node => node.siteMetadata).siteMetadata.title}
        </h3>
      </Link>
      {data.allFile.edges.filter(({ node }) => node.relativeDirectory === 'pages' && node.extension === 'js' && node.name !== 'index').map(({ node }, index) => (<Link key={index} to={`/${node.name}`} css={css`float: right;`}>{node.name}</Link>))}
      {/* <Link
        to={`/about/`}
        css={css`
          float: right;
          text-transform: capitalize;
          padding-left: 5px;
        `}
      >
        About
      </Link> */}
      {children}
    </div>
  )
}
