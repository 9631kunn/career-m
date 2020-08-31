import React from "react"

import Layout from "../components/Layout"
import Form from "../components/Form"
import PagesContainer from "../components/PagesContainer"

const GetInTouchPage = props => (
  <Layout location={props.location}>
    <PagesContainer title="お問い合わせ" pathname={props.location.pathname}>
      <p>
        お気軽にお問い合わせください。メッセージ確認後、担当者から返信いたします。
      </p>
    </PagesContainer>
    <Form
      src="https://career-m.co.jp/_form/contact/"
      title="お問い合わせ"
      height="800"
      spHeight="1300"
    />
  </Layout>
)

export default GetInTouchPage
