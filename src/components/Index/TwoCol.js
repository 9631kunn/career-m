import React from "react"

import Section from "./Section"
import Heading from "../Heading"

import styled from "styled-components"

const gapY = props => props.theme.gapY
const media = props => props.theme.media.m
const shadow = props => props.theme.shadow

const Wrap = styled.div`
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
`

const Box = styled.div`
  box-shadow: ${shadow};
  padding: 60px ${gapY};
  position: relative;
  width: 100%;
  @media (min-width: ${media}) {
    width: 50%;
  }
  &.white {
    background: #fff;
    margin-block-end: ${gapY};
    z-index: 2;
    @media (min-width: ${media}) {
      margin-block-end: 0;
      transform: translateX(5px);
    }
  }
  &.red {
    background: ${props => props.theme.color.main};
    color: #fff;
    z-index: 1;
    @media (min-width: ${media}) {
      margin-block-start: 60px;
      transform: translateX(-5px);
    }
    > h2 {
      color: #fff;
    }
  }
  p {
    font-size: 14px;
  }
`

const TwoCol = () => {
  return (
    <Section>
      <Wrap>
        <Box className="white">
          <Heading main="Our Works" sub="転職をお考えの皆様へ" />
          <p>
            転職は戦略的に行動を起こしていかなければなりません。
            思い付きの転職、勢いだけの転職ではうまくいかないでしょう。
            弊社では今までのご自身のキャリアを見つめ直すお手伝いをさせたいた
            だき、より輝けるような転職先をご紹介させていただきます。
            まずは皆様の熱い思いを聞かせてください。
          </p>
        </Box>
        <Box className="red">
          <Heading
            main="Recruitment"
            sub="人材をお探しの企業様へ"
            mainColor="#fff"
          />
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
