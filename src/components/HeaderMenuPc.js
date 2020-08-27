import React from "react"

import HeaderMenuLists from "./HeaderMenuLists"

import styled from "styled-components"

const media = props => props.theme.media.m

const PcMenu = styled.ul`
  display: none;
  @media (min-width: ${media}) {
    display: block;
  }
  list-style: none;
`

const HeaderMenuPc = () => (
  <PcMenu>
    <HeaderMenuLists />
  </PcMenu>
)

export default HeaderMenuPc
