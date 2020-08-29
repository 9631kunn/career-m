import React from "react"

// import Form from "../components/Form"
import Layout from "../components/Layout"
import PagesContainer from "../components/PagesContainer"

const RecruitmentPage = props => (
  <Layout location={props.location}>
    <PagesContainer title="求人情報">test</PagesContainer>
    <iframe
      src="https://career-m.co.jp/_form/recruitment/"
      title="求人フォーム"
      width="100%"
      height="1000"
      frameborder="0"
      marginheight="0"
      marginwidth="0"
    >
      読み込んでいます…
    </iframe>
  </Layout>
)

export default RecruitmentPage
