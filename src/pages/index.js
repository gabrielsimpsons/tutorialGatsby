import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"

export default function Home({ data }) {
  return <Layout>
    <h1>Amazing Pandas Eating Things</h1>
    <div>
      <img
        src="https://2.bp.blogspot.com/-BMP2l6Hwvp4/TiAxeGx4CTI/AAAAAAAAD_M/XlC_mY3SoEw/s1600/panda-group-eating-bamboo.jpg"
        alt="Group of pandas eating bamboo"
      />
      <h4>{data.allMarkdownRemark.totalCount}</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (<div key={node.id}>
        <h3
          css={css`margin-boton: ${rhythm(1 / 4)}`}>{`${node.frontmatter.title} `}<span css={css`color: #bbb`}> - {node.frontmatter.date}</span></h3>
        <p>{node.excerpt}</p>

      </div>))}
    </div>
  </Layout>
}

export const query = graphql`
query {
  allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
    totalCount
    edges {
      node {
        id
        frontmatter {
          title
          date(formatString: "DD MMMM, YYYY")
        }
        excerpt
        html
      }
    }
  }
}
`
