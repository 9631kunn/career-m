import React from "react"

import Layout from "../components/Layout"
import PagesContainer from "../components/PagesContainer"

const AboutUsPage = props => (
  <Layout location={props.location}>
    <PagesContainer>
      <h1>会社情報</h1>
      <p>ここにテキスト</p>
    </PagesContainer>
  </Layout>
)

export default AboutUsPage
