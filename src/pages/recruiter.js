import React from "react"

import Layout from "../components/Layout"
import Image from "../components/Image"
import Form from "../components/Form"
import PagesContainer from "../components/PagesContainer"

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
      margin-inline-start: 5%;
      width: 55%;
    }
  }
`

const RecruiterPage = props => (
  <Layout location={props.location} titleTag="人材をお探しの企業様">
    <PagesContainer title="人材をお探しの企業様">
      <Col>
        <p className="text">
          もし人材確保にお悩みなら、キャリア未来図にお任せ下さい。貴社のニーズに沿った、最適と思われる人材をご紹介させて頂きます。
          キャリア人材は勿論、新卒・第二新卒まで、幅広く人材をご紹介出来ます。
        </p>
        <Image filename="01_recruiter.jpg" className="fig" />
      </Col>
    </PagesContainer>
    <Form
      src="https://career-m.co.jp/_form/recruiter/"
      title="求人をお探しの企業様"
      height="600" // error message用にやや大きく
      spHeight="1100" // error message用にやや大きく
    />
  </Layout>
)

export default RecruiterPage
