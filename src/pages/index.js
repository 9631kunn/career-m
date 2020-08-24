import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
// import Image from "../components/Image"
// import SEO from "../components/SEO"

const IndexPage = (props) => {


  return (
    <Layout location={props.location}>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Layout>
  )
}

export default IndexPage
