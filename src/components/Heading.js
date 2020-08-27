import React from "react"

import styled from "styled-components"

const Main = styled.h2`
  color: ${props => props.theme.color.main};
  font-family: ${props => props.theme.fontEn};
  font-weight: 300;
  text-align: ${props => props.mainAlign};
  text-transform: uppercase;
`

const Sub = styled.small`
  display: block;
  font-size: 12px;
  margin-block-end: 20px;
  text-align: ${props => props.subAlign};
`

const Heading = ({ main, sub, mainAlign = "center", subAlign = "center" }) => {
  return (
    <>
      <Main mainAlign={mainAlign}>{main}</Main>
      <Sub subAlign={subAlign}>{sub}</Sub>
    </>
  )
}

export default Heading
