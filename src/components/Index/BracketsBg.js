import React from "react"

import styled from "styled-components"

const red = props => props.theme.color.main
const gapY = props => props.theme.gapY
const media = props => props.theme.media.m
const shadow = props => props.theme.shadow

const Wrap = styled.div`
  background: #fff;
  box-shadow: ${shadow};
  padding: 60px ${gapY};
  position: relative;
  &::before,
  &::after {
    content: "";
    height: 60px;
    position: absolute;
    width: ${gapY};
  }
  &::before {
    border-left: 1px solid ${red};
    border-top: 1px solid ${red};
    left: 0;
    top: 0;
  }
  &::after {
    bottom: 0;
    right: 0;
    border-bottom: 1px solid ${red};
    border-right: 1px solid ${red};
  }
  @media (min-width: ${media}) {
  }
`

const BracketsBg = ({ children }) => <Wrap>{children}</Wrap>

export default BracketsBg
