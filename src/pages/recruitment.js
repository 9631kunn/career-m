import React from "react"

import Layout from "../components/Layout"
import PagesContainer from "../components/PagesContainer"

const RecruitmentPage = props => (
  <Layout location={props.location}>
    <PagesContainer title="求人情報">
      <p>ここにテキスト</p>
    </PagesContainer>
  </Layout>
)

export default RecruitmentPage
