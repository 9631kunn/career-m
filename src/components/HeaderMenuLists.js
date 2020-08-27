import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import styled, { keyframes } from "styled-components"
import "typeface-josefin-sans"

const HeaderMenuLists = ({ open }) => {
  const media = props => props.theme.media.m
  const fontEn = props => props.theme.fontEn

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

  const fadeIn = keyframes`
    0% { opacity: 0; transform: translateY(5px); }
    100% { opacity: 1; transform: none; }
  `

  const MenuLists = styled.li`
    animation: ${open && fadeIn} 0.25s forwards;
    margin: 30px 0;
    opacity: 0;
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
    a {
      color: #fff;
      @media (min-width: ${media}) {
        color: inherit;
      }
      display: grid;
      text-align: center;
      text-decoration: none;
      p {
        font-size: 18px;
        font-weight: bold;
        @media (min-width: ${media}) {
          font-size: 14px;
        }
      }
      span {
        font-family: ${fontEn};
        font-size: 13px;
        @media (min-width: ${media}) {
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
            <p>{menu.title}</p>
            <span>{menu.sub}</span>
          </Link>
        </MenuLists>
      ))}
    </>
  )
}

export default HeaderMenuLists
