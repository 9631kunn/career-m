import React from "react"

import Layout from "../components/Layout"
import Image from "../components/Image"
import PagesContainer from "../components/PagesContainer"

import styled from "styled-components"

import arrowIcon from "../icon/down-arrow.svg"

const works = [
  "現在の労働市場の概要説明",
  "転職に関するカウンセリング",
  "履歴書 / 職務経歴書の書き方のアドバイス、添削",
  "具体的な企業 / 求人情報の紹介",
  "面接に関するアドバイス",
  "考え方、想いを整理し、企業側候補者側と調整",
  "退職手続き、円満な退社の仕方に関するアドバイス",
  "入社に際してのアドバイス ・入社後のフォロー",
]

const media = props => props.theme.media.s

const List = styled.li`
  padding-block-end: 50px;
  position: relative;
  &:not(:last-of-type):after {
    background: url(${arrowIcon}) no-repeat;
    bottom: 10px;
    content: "";
    display: inline-block;
    height: 30px;
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
    width: 30px;
    @media (min-width: ${media}) {
      left: 30px;
      transform: none;
    }
  }
`

const OurWorksPage = props => (
  <Layout location={props.location} titleTag="事業紹介">
    <PagesContainer title="事業紹介">
      <h2>人材のご紹介</h2>
      <ul>
        {works.map(w => (
          <List key={w}>{w}</List>
        ))}
      </ul>
      <p>当社は、社員に適正だと思われる人材のご紹介をさせていただきます。</p>
      <p>
        規模にしても件数にしても大手には全くかないません。だからこそ、じっくり時間をかけ、スキルや性格、人生観も含めきちんと理解し、社会に貢献できる人材をご紹介差し上げます。入社のあとも、その方の気持ちのフォーローはもちろんのこと、事業活動のサポートや情報提供などをいろいろな角度から支援を致します。
      </p>
      <Image filename="01_our-works.jpg" />
    </PagesContainer>
  </Layout>
)

export default OurWorksPage
