import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout'

export default function MyFiles({ data }) {
  console.log(data);
  return (<Layout><div>hola mundo</div></Layout>)
}

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`
