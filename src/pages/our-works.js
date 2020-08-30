import React from "react"

import Layout from "../components/Layout"
import Image from "../components/Image"
import PagesContainer from "../components/PagesContainer"

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

const OurWorksPage = props => (
  <Layout location={props.location}>
    <PagesContainer title="事業紹介">
      <h2>人材のご紹介</h2>
      <ul>
        {works.map(w => (
          <li>{w}</li>
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
