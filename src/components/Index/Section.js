import React from "react"

import styled from "styled-components"

const Section = ({ children }) => {
  const container = props => props.theme.container
  const gapX = props => props.theme.gapX
  const gapY = props => props.theme.gapY
  const media = props => props.theme.media.m

  const Wrap = styled.section`
    margin: 0 auto;
    max-width: ${container};
    padding: 0 ${gapX} ${gapY};
    @media (min-width: ${media}) {
      padding: 0 0 ${gapY};
    }
  `

  return <Wrap>{children}</Wrap>
}

export default Section
