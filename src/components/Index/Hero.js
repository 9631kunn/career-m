import React from "react"

import Image from "../Image"

import styled, { keyframes } from "styled-components"

const Hero = () => {
  const gapY = props => props.theme.gapY
  const mediaL = props => props.theme.media.l
  const mediaS = props => props.theme.media.s

  const Wrap = styled.section`
    padding-block-end: ${gapY};
    position: relative;
    .hero {
      img {
        filter: blur(3px);
      }
    }
  `

  const fadeIn = keyframes`
    100% { opacity: 1; }
  `

  const Catch = styled.h2`
    animation: ${fadeIn} 1.5s 1s forwards;
    font-size: 25px;
    @media (min-width: ${mediaS}) {
      font-size: 30px;
    }
    @media (min-width: ${mediaL}) {
      font-size: 45px;
    }
    left: 50%;
    position: absolute;
    text-shadow: 0 1px 10px hsl(0 100% 100% / 100%),
      0 -1px 10px hsl(0 100% 100% / 100%), 0 2px 10px hsl(0 100% 100% / 100%);
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    opacity: 0;
    white-space: nowrap;
  `

  return (
    <Wrap>
      <Image
        filename="hero.jpg"
        className="hero"
        alt={"キャリアの未来図を皆様と一緒に描きたい"}
      />
      <Catch>
        キャリアの未来図を
        <br className="pc__none" />
        皆様と一緒に描きたい
      </Catch>
    </Wrap>
  )
}

export default Hero
