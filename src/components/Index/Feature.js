import React from "react"

import styled from "styled-components"

const mediaS = props => props.theme.media.s
const gapY = props => props.theme.gapY
const gapX = props => props.theme.gapX
const container = props => props.theme.container

const Wrap = styled.section`
  background: url("/assets/bg.jpg");
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  height: 300px;
  margin-block-end: ${gapY};
  position: relative;
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

const Feature = () => (
  <Wrap>
    <Catch>"転職"のその先へ</Catch>
    <Lead>
      転職はゴールではありません。スタートラインです。新たな環境でキャリアを積み重ね、あなたの未来図が作れるようサポートいたします。
    </Lead>
  </Wrap>
)

export default Feature
