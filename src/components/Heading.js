import React from "react"

import styled from "styled-components"

const mainColor = props => props.theme.color.main
const fontEn = props => props.theme.fontEn
const mainAlign = props => props.mainAlign
const subAlign = props => props.subAlign

const Main = styled.h2`
  color: ${mainColor};
  font-family: ${fontEn};
  font-weight: 300;
  text-align: ${mainAlign};
  text-transform: uppercase;
`

const Sub = styled.small`
  display: block;
  font-size: 12px;
  margin-block-end: 20px;
  text-align: ${subAlign};
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
