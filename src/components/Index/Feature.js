import React from "react"

import Image from "../Image"

import styled from "styled-components"

const mediaS = props => props.theme.media.s
const gapY = props => props.theme.gapY
const gapX = props => props.theme.gapX
const container = props => props.theme.container

const Wrap = styled.section`
  margin-block-end: ${gapY};
  position: relative;
  .feature {
    height: 250px;
    @media (min-width: ${mediaS}) {
      height: 300px;
      img {
        object-position: 100% 100% !important;
      }
    }
    &::before {
      backdrop-filter: blur(3px);
      content: "";
      display: inline-block;
      height: 100%;
      position: absolute;
      width: 100%;
      z-index: 1;
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
  z-index: 2;
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
  z-index: 3;
  @media (min-width: ${mediaS}) {
    text-align: center;
  }
`

const Feature = () => (
  <Wrap>
    <Image
      filename="men.jpg"
      className="feature"
      alt={"キャリアの未来図を皆様と一緒に描きたい"}
    />
    <Catch>"転職"のその先へ</Catch>
    <Lead>
      転職はゴールではありません。スタートラインです。新たな環境でキャリアを積み重ね、あなたの未来図が作れるようサポートいたします。
    </Lead>
  </Wrap>
)

export default Feature
