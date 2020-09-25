import React from "react"
import { Link } from 'gatsby'
import Header from '../components/header'
import Layout from "../components/layout"

export default function Home() {
  return <Layout> <div>
    <h1>Hi! I'm building a fake Gatsby site as part of a tutorial!</h1>
    <p>
      What do I like to do? Lots of course but definitely enjoy building
      websites.
      </p>
    <img src="https//source.unsplash.com/random/400x2000" alt="" />
  </div></Layout>
}
