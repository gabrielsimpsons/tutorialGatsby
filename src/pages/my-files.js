import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout'
import Header from "../components/header";

export default function MyFiles({ data }) {
  console.log(data);
  return (<Layout>
    <Header headerText="My Site's files"/>
    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>relativeDirectory</th>
          <th>prettySize</th>
          <th>extension</th>
          <th>birthTime</th>
        </tr>
      </thead>
      <tbody>
        {data.allFile.edges.map(({ node }, index) => (<tr key={index}>
          <td>{node.name}</td>
          <td>{node.relativeDirectory}</td>
          <td>{node.prettySize}</td>
          <td>{node.extension}</td>
          <td>{node.birthTime}</td>
        </tr>))}
      </tbody>
    </table>
  </Layout>)
}

export const query = graphql`
  query GetFiles {
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
}
`
