import React from "react"

import Section from "./Section"

import styled from "styled-components"

const TwoCol = () => {
  const Wrap = styled.div`
    align-items: flex-start;
    display: flex;
    flex-wrap: wrap;
  `

  const Box = styled.div`
    padding: 60px 30px;
    position: relative;
    width: 100%;
    @media (min-width: ${props => props.theme.media.m}) {
      width: 50%;
    }
    &.white {
      background: #fff;
      margin-block-end: ${props => props.theme.gapY};
      z-index: 2;
      @media (min-width: ${props => props.theme.media.m}) {
        margin-block-end: 0;
        transform: translateX(5px);
      }
      h2 {
        color: ${props => props.theme.color.sub};
      }
    }
    &.red {
      background: ${props => props.theme.color.sub};
      color: #fff;
      z-index: 1;
      @media (min-width: ${props => props.theme.media.m}) {
        margin-block-start: 60px;
        transform: translateX(-5px);
      }
    }
    h2,
    small {
      text-align: center;
    }
    h2 {
      font-family: ${props => props.theme.fontEn};
      font-weight: 300;
      text-transform: uppercase;
    }
    small {
      display: block;
      font-size: 12px;
      margin-block-end: 20px;
    }
    p {
      font-size: 14px;
    }
  `

  return (
    <Section>
      <Wrap>
        <Box className="white">
          <h2>Our Works</h2>
          <small>転職をお考えの皆様へ</small>
          <p>
            転職は戦略的に行動を起こしていかなければなりません。
            思い付きの転職、勢いだけの転職ではうまくいかないでしょう。
            弊社では今までのご自身のキャリアを見つめ直すお手伝いをさせたいた
            だき、より輝けるような転職先をご紹介させていただきます。
            まずは皆様の熱い思いを聞かせてください。
          </p>
        </Box>
        <Box className="red">
          <h2>Recruitment</h2>
          <small>人材をお探しの企業様へ</small>
          <p>
            「いい人材が見つからない」などのお悩みはございませんか?
            求人活動は、人が集まればいいというわけではありません。
            弊社では企業様の要望を詳しくヒアリングさせていただき、納得がいく
            まで打ち合わせを重ね、適材適所の人材をご紹介できるようお手伝いを
            させていただきます。
          </p>
        </Box>
      </Wrap>
    </Section>
  )
}

export default TwoCol
