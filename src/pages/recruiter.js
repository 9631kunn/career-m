import React from "react"

import Layout from "../components/Layout"
import PagesContainer from "../components/PagesContainer"

const RecruiterPage = props => (
  <Layout location={props.location}>
    <PagesContainer title="人材をお探しの企業様">
      <p>ここにテキスト</p>
    </PagesContainer>
  </Layout>
)

export default RecruiterPage
