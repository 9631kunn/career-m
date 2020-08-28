import React from "react"

import Layout from "../components/Layout"
import PagesContainer from "../components/PagesContainer"

const RecruitmentPage = props => (
  <Layout location={props.location}>
    <PagesContainer>
      <h1>求人情報</h1>
      <p>ここにテキスト</p>
    </PagesContainer>
  </Layout>
)

export default RecruitmentPage
