import React from "react"

import Layout from "../components/Layout"
import PagesContainer from "../components/PagesContainer"

const AboutUsPage = props => (
  <Layout location={props.location}>
    <PagesContainer title="会社情報">
      <p>ここにテキスト</p>
    </PagesContainer>
  </Layout>
)

export default AboutUsPage
