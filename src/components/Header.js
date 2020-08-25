import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import Image from "./Image"

import styled, { keyframes } from "styled-components"

const Header = ({ location, siteTitle }) => {

  const root = `${__PATH_PREFIX__}/`;
  const Logo = <Image filename="logo.png" className="logo" alt={siteTitle + "ロゴ"} />

  const menus = [
    { ttl: "事業紹介", sub: "Our Works", link: "/test1" },
    { ttl: "人材をお探しの企業様へ", sub: "Recruiter", link: "/test2" },
    { ttl: "求人", sub: "Recruitment", link: "/test3" },
    { ttl: "会社情報", sub: "About us", link: "/test4" },
    { ttl: "お問い合わせ", sub: "Get in touch", link: "/test5" },
  ]

  const gradAnimation = keyframes`
    0%{ background-position:0% 50% }
    50%{ background-position:100% 50% }
    100%{ background-position:0% 50% }
  `
  const Wrap = styled.header`
    box-shadow: 0 2px 3px hsl(0 0% 0% / 20%);
    height: 55px;
    @media(min-width: ${props => props.theme.media.m}){
      height: 75px;
    }
    position: relative;
    &::after{
      animation: ${gradAnimation} 5s infinite;
      background-image: linear-gradient(to right, ${props => props.theme.color.main} 0%, ${props => props.theme.color.sub} 100%);
      background-size: 600% 600%;
      bottom: 0;
      content: "";
      display: inline-block;
      height: 3px;
      left: 0;
      position: absolute;
      width: 100%;
    }
  `
  const Container = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    height: 100%;
    margin: auto;
    max-width: 1024px;
    padding: 0 10px;
    h1, h3{
      height: 26px;
      width: 186px;
      @media(min-width: ${props => props.theme.media.l}){
        height: 30px;
        width: 214px;
      }
    }
  `
  const Menu = styled.ul`
    list-style: none;
    li{
      display: inline-block;
      &:not(:last-child){
        margin-inline-end: 30px;
      }
      a{
        color: inherit;
        display: grid;
        text-align: center;
        text-decoration: none;
        p{
          font-size: 14px;
          font-weight: bold;
        }
        span{
          font: 12px ${props => props.theme.fontEn};
          /* text-transform: uppercase; */
        }
      }
    }
  `

  return (
    <Wrap>
      <Container>
        {location.pathname === root
          ? <h1><Link to="/">{Logo}</Link></h1>
          : <h3><Link to="/">{Logo}</Link></h3>
        }
        <nav>
          <Menu>
            {menus.map(menu =>
              <li key={menu.link}>
                <Link to={menu.link}>
                  <p>{menu.ttl}</p>
                  <span>{menu.sub}</span>
                </Link>
              </li>
            )}
          </Menu>
        </nav>
      </Container>
    </Wrap>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
