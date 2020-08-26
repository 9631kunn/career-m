import React, { useState } from "react"

import HeaderMenuLists from "./HeaderMenuLists"

import styled, { keyframes } from "styled-components"

const HeaderMenuSp = () => {
  const [open, setOpen] = useState(false)

  const SpMenu = styled.div`
    display: block;
    @media (min-width: ${props => props.theme.media.m}) {
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
      ${props => props.theme.color.main} 30%,
      ${props => props.theme.color.sub} 100%
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
        animation: ${open && firstBar} 0.3s forwards;
        transform: translateY(-3px);
      }
      &:nth-of-type(2) {
        animation: ${open && secondBar} 0.3s forwards;
        transform: translateY(3px);
      }
    }
  `

  const SpMenuListsWrap = styled.ul`
    display: ${open ? "block" : "none"};
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
    animation: ${open && spread} 1s forwards;
    background-image: linear-gradient(
      -150deg,
      ${props => props.theme.color.mainOp} 30%,
      ${props => props.theme.color.subOp} 100%
    );
    border-radius: 50%;
    display: ${open ? "block" : "none"};
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
  return (
    <SpMenu>
      <Ham onClick={() => setOpen(!open)}>
        <span />
        <span />
      </Ham>
      <SpMenuListsWrap>
        <HeaderMenuLists open={open} />
      </SpMenuListsWrap>
      <SpMenuListsBg />
    </SpMenu>
  )
}

export default HeaderMenuSp
