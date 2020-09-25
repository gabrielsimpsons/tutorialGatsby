import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"

export default function About() {
  return <Layout>
    <div style={{ color: `teal` }}>
      <Header headerText="About" />
      <h2>About this tutorial</h2>
      <p>Such wow. Very React</p>
    </div>
  </Layout>
}
