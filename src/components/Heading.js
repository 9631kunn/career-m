import React from "react"

import styled from "styled-components"

const Heading = ({ main, sub, mainAlign = "center", subAlign = "center" }) => {
  const Main = styled.h2`
    color: ${props => props.theme.color.main};
    font-family: ${props => props.theme.fontEn};
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

  return (
    <>
      <Main>{main}</Main>
      <Sub>{sub}</Sub>
    </>
  )
}

export default Heading
