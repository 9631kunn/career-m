import React from "react"

import HeaderMenuLists from "./HeaderMenuLists";

import styled from "styled-components"

const HeaderMenuPc = () => {
  const PcMenu = styled.ul`
    display: none;
    @media (min-width: ${props => props.theme.media.m}){
      display: block;
    }
    list-style: none;
  `

  return (
    <PcMenu>
      <HeaderMenuLists />
    </PcMenu >
  )
}

export default HeaderMenuPc
