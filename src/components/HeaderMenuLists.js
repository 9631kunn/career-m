import React from "react"
import { Link } from "gatsby"

import styled, { keyframes } from "styled-components"
import "typeface-josefin-sans"

const HeaderMenuLists = ({ open }) => {
  const menus = [
    { ttl: "事業紹介", sub: "Our Works", link: "/test1" },
    { ttl: "人材をお探しの企業様へ", sub: "Recruiter", link: "/test2" },
    { ttl: "求人", sub: "Recruitment", link: "/test3" },
    { ttl: "会社情報", sub: "About us", link: "/test4" },
    { ttl: "お問い合わせ", sub: "Get in touch", link: "/test5" },
  ]

  const fadeIn = keyframes`
    0% { opacity: 0; transform: translateY(5px); }
    100% { opacity: 1; transform: none; }
  `

  const MenuLists = styled.li`
    animation: ${open && fadeIn} 0.25s forwards;
    margin: 30px 0;
    opacity: 0;
    @media (min-width: ${props => props.theme.media.m}) {
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
    a {
      color: #fff;
      @media (min-width: ${props => props.theme.media.m}) {
        color: inherit;
      }
      display: grid;
      text-align: center;
      text-decoration: none;
      p {
        font-size: 18px;
        font-weight: bold;
        @media (min-width: ${props => props.theme.media.m}) {
          font-size: 14px;
        }
      }
      span {
        font-family: ${props => props.theme.fontEn};
        font-size: 13px;
        @media (min-width: ${props => props.theme.media.m}) {
          font-size: 11px;
        }
      }
    }
  `

  return (
    <>
      {menus.map(menu => (
        <MenuLists key={menu.link}>
          <Link to={menu.link}>
            <p>{menu.ttl}</p>
            <span>{menu.sub}</span>
          </Link>
        </MenuLists>
      ))}
    </>
  )
}

export default HeaderMenuLists
