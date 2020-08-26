import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import Image from "./Image"
import HeaderMenu from "./HeaderMenu"

import styled, { keyframes } from "styled-components"

const Header = ({ location, siteTitle }) => {
  const root = `${__PATH_PREFIX__}/`
  const Logo = (
    <Image filename="logo.png" className="logo" alt={siteTitle + "ロゴ"} />
  )

  const gradAnimation = keyframes`
    0%{ background-position:0% 50% }
    50%{ background-position:100% 50% }
    100%{ background-position:0% 50% }
  `
  const Wrap = styled.header`
    box-shadow: 0 2px 3px hsl(0 0% 0% / 20%);
    height: 55px;
    @media (min-width: ${props => props.theme.media.m}) {
      height: 75px;
    }
    position: relative;
    z-index: 40;
    &::after {
      animation: ${gradAnimation} 3s infinite;
      background-image: linear-gradient(
        -150deg,
        ${props => props.theme.color.main} 80%,
        ${props => props.theme.color.sub} 100%
      );
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
    max-width: 1200px;
    padding: 0 10px;
    h1,
    h3 {
      height: 26px;
      width: 186px;
      @media (min-width: ${props => props.theme.media.m}) {
        height: 30px;
        width: 214px;
      }
    }
  `

  return (
    <Wrap>
      <Container>
        {location.pathname === root ? (
          <h1>
            <Link to="/">{Logo}</Link>
          </h1>
        ) : (
          <h3>
            <Link to="/">{Logo}</Link>
          </h3>
        )}
        <HeaderMenu />
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
