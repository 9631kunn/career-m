import React, { useState } from "react"

import HeaderMenuLists from "./HeaderMenuLists"

import styled, { keyframes } from "styled-components"

const media = props => props.theme.media.m
const mainColor = props => props.theme.color.main
const subColor = props => props.theme.color.sub
const mainOp = props => props.theme.color.mainOp
const subOp = props => props.theme.color.subOp

const SpMenu = styled.div`
  display: block;
  @media (min-width: ${media}) {
    display: none;
  }
  height: 26px; /* = logo's height */
  position: relative;
  width: 26px;
`

const firstBar = keyframes`
    100%{ transform: rotate(45deg); }
  `

const secondBar = keyframes`
    100%{ transform: rotate(-45deg); }
  `

const Ham = styled.button`
  background-image: linear-gradient(
    -150deg,
    ${mainColor} 30%,
    ${subColor} 100%
  );
  border-radius: 50%;
  display: inline-block;
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: 60;
  span {
    background: #fff;
    bottom: 0;
    display: inline-block;
    height: 2px;
    left: 0;
    margin: auto;
    position: absolute;
    right: 0;
    top: 0;
    width: 50%;
    &:nth-of-type(1) {
      animation: ${props => props.open && firstBar} 0.3s forwards;
      transform: translateY(-3px);
    }
    &:nth-of-type(2) {
      animation: ${props => props.open && secondBar} 0.3s forwards;
      transform: translateY(3px);
    }
  }
`

const SpMenuListsWrap = styled.ul`
  display: ${props => (props.open ? "block" : "none")};
  height: 100vh;
  left: 0;
  list-style: none;
  padding-top: 55px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 50;
`

const spread = keyframes`
    100% { transform: scale(1) }
  `

const SpMenuListsBg = styled.div`
  animation: ${props => props.open && spread} 1s forwards;
  background-image: linear-gradient(-150deg, ${mainOp} 30%, ${subOp} 100%);
  border-radius: 50%;
  display: ${props => (props.open ? "block" : "none")};
  height: 2000px;
  margin-block-start: -1000px;
  margin-inline-end: -1300px;
  position: fixed;
  right: 0;
  top: 0;
  transform: scale(0.1);
  transition: 1s ease-in-out;
  width: 1900px;
  z-index: 40;
`

const HeaderMenuSp = () => {
  const [open, setOpen] = useState(false)

  return (
    <SpMenu>
      <Ham
        aria-label="ハンバーガーメニュー"
        onClick={() => setOpen(!open)}
        open={open}
      >
        <span />
        <span />
      </Ham>
      <SpMenuListsWrap open={open}>
        <HeaderMenuLists open={open} />
      </SpMenuListsWrap>
      <SpMenuListsBg open={open} />
    </SpMenu>
  )
}

export default HeaderMenuSp
