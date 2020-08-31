import React from "react"

import Form from "../components/Form"
import Image from "../components/Image"
import Layout from "../components/Layout"
import PagesContainer from "../components/PagesContainer"
import RecruitmentJson from "../components/JsonLd/Recruitment"

import styled from "styled-components"

const media = props => props.theme.media.m

const Col = styled.div`
  & > * {
    margin-block-end: 20px;
  }
  @media (min-width: ${media}) {
    display: flex;
    margin-block-end: 20px;
    & > * {
      margin-block-end: 0;
    }
    .text {
      width: 40%;
    }
    .fig {
      margin-inline-end: 5%;
      width: 55%;
    }
  }
`

const RecruitmentPage = props => (
  <Layout location={props.location}>
    <RecruitmentJson />
    <PagesContainer title="求人情報" pathname={props.location.pathname}>
      <Col>
        <Image filename="01_recruitment.jpg" className="fig" />
        <p className="text">
          転職を希望する方がプロフィールを登録し、転職先をご紹介するサービスです。求人案件を紹介、また転職に関する様々なアドバイス等のサービスを無料でご提供しています。
        </p>
      </Col>
    </PagesContainer>
    <Form
      src="https://career-m.co.jp/_form/recruitment/"
      title="求人フォーム"
      height="700" // error message用にやや大きく
      spHeight="1000" // error message用にやや大きく
    />
  </Layout>
)

export default RecruitmentPage
