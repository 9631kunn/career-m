import React from "react"

import Layout from "../components/Layout"
import PagesContainer from "../components/PagesContainer"

const GetInTouchPage = props => (
  <Layout location={props.location}>
    <PagesContainer title="お問い合わせ">
      <p>ここにテキスト</p>
    </PagesContainer>
  </Layout>
)

export default GetInTouchPage
