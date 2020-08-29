import React from "react"
import { Link } from "gatsby"

import Image from "./Image"

import styled from "styled-components"

const mainColor = props => props.theme.color.main
const gapX = props => props.theme.gapX
const gapY = props => props.theme.gapY
const fontEn = props => props.theme.fontEn

const Wrap = styled.address`
  border: 1px solid #fff;
  border-radius: 7px;
  padding: ${gapY} ${gapX};
  text-align: center;
  width: 100%;
  .logo {
    margin: 0 auto 20px;
    width: 250px;
  }
  p {
    color: #fff;
    margin-block-end: 20px;
  }
  button {
    background: #fff;
    border-radius: 30px;
    font-family: ${fontEn};
    padding: 0.75em 3.5em;
    transition: 0.5s;
    a {
      color: ${mainColor};
      font-size: 1em;
      letter-spacing: 3px;
      text-decoration: none;
      transition: 0.5s;
    }
    &:hover {
      background: ${mainColor};
      a {
        color: #fff;
      }
    }
  }
`

const FooterContact = () => (
  <Wrap>
    <Image filename="logo-w.png" className="logo" />
    <button>
      <Link to="/get-in-touch">CONTACT</Link>
    </button>
  </Wrap>
)

export default FooterContact
