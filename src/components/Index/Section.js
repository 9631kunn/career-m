import React from "react"

import styled from "styled-components"

const Section = ({ children }) => {
  const Wrap = styled.section`
    margin: 0 auto;
    max-width: ${props => props.theme.container};
    padding: ${props => props.theme.gapY} ${props => props.theme.gapX};
    @media (min-width: ${props => props.theme.media.m}) {
      padding: ${props => props.theme.gapY} 0;
    }
  `

  return <Wrap>{children}</Wrap>
}

export default Section
