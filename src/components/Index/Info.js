import React from "react"

import Section from "./Section"

import styled from "styled-components"

const Info = () => {
  const Wrap = styled.div`
    background: #fff;
    padding: 60px 30px;
  `

  return (
    <Section>
      <Wrap>Info</Wrap>
    </Section>
  )
}

export default Info
