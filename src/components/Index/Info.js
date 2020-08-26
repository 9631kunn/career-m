import React from "react"

import Section from "./Section"

import styled from "styled-components"

const Info = () => {
  const gapY = props => props.theme.gapY

  const Wrap = styled.div`
    background: #fff;
    padding: 60px ${gapY};
  `

  return (
    <Section>
      <Wrap>Info</Wrap>
    </Section>
  )
}

export default Info
