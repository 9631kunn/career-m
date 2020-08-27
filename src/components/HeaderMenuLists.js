import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import styled, { keyframes } from "styled-components"
import "typeface-josefin-sans"

const media = props => props.theme.media.m
const fontEn = props => props.theme.fontEn
const mainOp = props => props.theme.color.mainOp
const subOp = props => props.theme.color.subOp

const fadeIn = keyframes`
    0% { opacity: 0; transform: translateY(5px); }
    100% { opacity: 1; transform: none; }
  `

const borderAnimation = keyframes`
    80%{ opacity: 0.7; }
    100%{ opacity: 0.3; transform: rotate(360deg); }
  `

const MenuLists = styled.li`
  animation: ${props => props.open && fadeIn} 0.25s forwards;
  margin: 30px 0;
  opacity: 0;
  text-align: center;
  @media (min-width: ${media}) {
    animation: none;
    display: inline-block;
    opacity: 1;
    &:not(:last-child) {
      margin: 0 30px 0 0;
    }
  }
  &:nth-of-type(1) {
    animation-delay: 0.6s;
  }
  &:nth-of-type(2) {
    animation-delay: 0.7s;
  }
  &:nth-of-type(3) {
    animation-delay: 0.8s;
  }
  &:nth-of-type(4) {
    animation-delay: 0.9s;
  }
  &:nth-of-type(5) {
    animation-delay: 1.1s;
  }
  &:nth-of-type(6) {
    animation-delay: 1.3s;
  }
  a {
    color: #fff;
    @media (min-width: ${media}) {
      color: inherit;
      &[aria-current="page"] {
        color: ${mainOp};
      }
    }
    display: inline-block;
    position: relative;
    text-align: center;
    text-decoration: none;
    &:hover {
      &::before,
      &::after {
        animation: ${borderAnimation} 4s infinite;
        bottom: 0;
        content: "";
        display: inline-block;
        height: 50px;
        left: 0;
        margin: auto;
        mix-blend-mode: multiply;
        opacity: 0.3;
        position: absolute;
        right: 0;
        top: 0;
        width: 50px;
      }
      &::before {
        background: ${mainOp};
        border-radius: 40% 40% 50% 40%/30% 50% 50% 50%;
      }
      &::after {
        animation-delay: 1s;
        background: ${subOp};
        border-radius: 80% 30% 50% 50%/50%;
      }
    }
    p {
      font-size: 18px;
      font-weight: bold;
      @media (min-width: ${media}) {
        font-size: 14px;
      }
    }
    span {
      font: 13px ${fontEn};
      @media (min-width: ${media}) {
        font-size: 11px;
      }
      display: block;
    }
  }
`

const HeaderMenuLists = ({ open }) => {
  const { allMenus } = useStaticQuery(graphql`
    query HeaderMenuListsQuery {
      allMenus {
        nodes {
          title
          sub
          link
        }
      }
    }
  `)

  const menus = allMenus.nodes

  return (
    <>
      {menus.map(menu => (
        <MenuLists key={menu.link} open={open}>
          <Link to={menu.link}>
            <p>{menu.title}</p>
            <span>{menu.sub}</span>
          </Link>
        </MenuLists>
      ))}
    </>
  )
}

export default HeaderMenuLists
