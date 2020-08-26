import React from "react"

import Section from "./Section"
import BracketsBg from "./BracketsBg"
import Heading from "../Heading"

import styled from "styled-components"

const Access = () => {
  const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
  `

  const HeadingWrap = styled.div`
    width: 100%;
    @media (min-width: ${props => props.theme.media.m}) {
      width: 50%;
    }
  `

  const Map = styled.div`
    background: #efefef;
    display: block;
    line-height: 200px;
    width: 100%;
    @media (min-width: ${props => props.theme.media.m}) {
      width: 50%;
    }
  `

  return (
    <Section>
      <BracketsBg>
        <Container>
          <HeadingWrap>
            <Heading
              main="Access"
              sub="アクセス"
              mainAlign="left"
              subAlign="left"
            />
          </HeadingWrap>
          <Map>map</Map>
        </Container>
      </BracketsBg>
    </Section>
  )
}

export default Access
