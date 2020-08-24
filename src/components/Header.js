import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import Image from "./Image"

import styled from "styled-components"

const Header = ({ location, siteTitle }) => {

  const root = `${__PATH_PREFIX__}/`;
  const Logo = <Image filename="logo.png" className="logo" alt={siteTitle + "ロゴ"} />

  const Wrap = styled.header`
    box-shadow: 0 2px 3px hsl(0 0% 0% / 20%);
    height: 55px;
    @media(min-width: ${props => props.theme.media.l}){
      height: 70px;
    }
  `
  const Container = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    height: 100%;
    padding: 0 10px;
    h1, h3{
      height: 28px;
      width: 200px;
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
    }
  `

  return (
    <Wrap>
      <Container>
        {location.pathname === root
          ? <h1>{Logo}</h1>
          : <h3>{Logo}</h3>
        }
        <nav>
          <Menu>
            <li><Link to="/">HOME</Link></li>
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
