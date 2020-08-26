import React from "react"

import styled from "styled-components"

const Section = ({ children }) => {
  const Wrap = styled.section`
    margin: 0 auto;
    max-width: ${props => props.theme.container};
    padding: 0 ${props => props.theme.gapX} ${props => props.theme.gapY};
    @media (min-width: ${props => props.theme.media.m}) {
      padding: 0 0 ${props => props.theme.gapY};
    }
  `

  return <Wrap>{children}</Wrap>
}

export default Section
