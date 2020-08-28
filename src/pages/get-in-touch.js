import React from "react"

import Layout from "../components/Layout"
import PagesContainer from "../components/PagesContainer"

const GetInTouchPage = props => (
  <Layout location={props.location}>
    <PagesContainer>
      <h1>お問い合わせ</h1>
      <p>ここにテキスト</p>
    </PagesContainer>
  </Layout>
)

export default GetInTouchPage
