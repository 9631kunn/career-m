import React from "react"

import Image from "../Image"

import styled from "styled-components"

const Feature = () => {
  const mediaM = props => props.theme.media.m
  const mediaS = props => props.theme.media.s
  const gapY = props => props.theme.gapY
  const gapX = props => props.theme.gapX
  const container = props => props.theme.container

  const Wrap = styled.section`
    padding-block-end: ${gapY};
    position: relative;
    .feature {
      filter: blur(2px);
      @media (min-width: ${mediaM}) {
        height: 300px;
        img {
          object-position: 100% 100% !important;
        }
      }
    }
  `

  const Catch = styled.h2`
    left: 50%;
    position: absolute;
    text-shadow: 0 1px 10px hsl(0 100% 100% / 100%),
      0 -1px 10px hsl(0 100% 100% / 100%), 0 2px 10px hsl(0 100% 100% / 100%);
    top: 30px;
    transform: translateX(-50%);
    white-space: nowrap;
  `

  const Lead = styled.p`
    font-size: 14px;
    left: 50%;
    max-width: ${container};
    padding: 0 ${gapX};
    position: absolute;
    text-shadow: 0 1px 10px hsl(0 100% 100% / 100%),
      0 -1px 10px hsl(0 100% 100% / 100%), 0 2px 10px hsl(0 100% 100% / 100%);
    top: calc(
      30px + 24px + 20px
    ); /* h2's start position + h2's line-height + gap */
    transform: translateX(-50%);
    width: 100%;
    @media (min-width: ${mediaS}) {
      text-align: center;
    }
  `

  return (
    <Wrap>
      <Image
        filename="bg.jpg"
        className="feature"
        alt={"キャリアの未来図を皆様と一緒に描きたい"}
      />
      <Catch>"転職"のその先へ</Catch>
      <Lead>
        ここにテキストここにテキストここにテキストここにテキストここにテキスト
      </Lead>
    </Wrap>
  )
}

export default Feature
