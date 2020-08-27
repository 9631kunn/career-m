import React from "react"

import styled from "styled-components"
import pagesStyle from "../styles/pages"

const media = props => props.theme.media.m
const container = props => props.theme.container
const shadow = props => props.theme.shadow
const gapX = props => props.theme.gapX
const gapY = props => props.theme.gapY

const Wrap = styled.article`
  padding: ${gapY} 10px;
  @media (min-width: ${media}) {
    padding: ${gapY} 0;
  }
`

const Container = styled.div`
  background: #fff;
  box-shadow: ${shadow};
  margin: auto;
  max-width: ${container};
  padding: ${gapY} ${gapX};
  ${pagesStyle}
`

const PagesContainer = ({ children }) => {
  return (
    <Wrap>
      <Container>{children}</Container>
    </Wrap>
  )
}

export default PagesContainer
