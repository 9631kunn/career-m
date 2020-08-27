import React from "react"

import FooterMenuLists from "./FooterMenuLists"

import styled from "styled-components"
import "typeface-josefin-sans"

const Footer = () => {
  const mainC = props => props.theme.color.main
  const mainOp = props => props.theme.color.mainOp
  const mainDark = props => props.theme.color.mainDark
  const media = props => props.theme.media.m
  const gapY = props => props.theme.gapY
  const fontGo = props => props.theme.fontGo
  const fontEn = props => props.theme.fontEn

  const Wrap = styled.footer`
    background: linear-gradient(130deg, ${mainOp} 0, ${mainC} 50%);
    padding: 60px ${gapY};
    width: 100%;
  `

  const Container = styled.div`
    margin: auto;
    max-width: ${media};
    width: 100%;
    h2 {
      border-block-end: 1px solid #fff;
      color: #fff;
      display: inline-block;
      font-family: ${fontEn};
      font-weight: 300;
      margin-block-end: 10px;
      padding-block-end: 10px;
    }
    small {
      color: #fff;
      display: block;
      font-family: ${fontGo};
      text-align: center;
    }
  `

  const CopyRight = styled.div`
    background: ${mainDark};
    padding: 20px;
    width: 100%;
  `

  return (
    <>
      <Wrap>
        <Container>
          <h2>Menus</h2>
          <FooterMenuLists />
        </Container>
      </Wrap>
      <CopyRight>
        <Container>
          <small>
            © {new Date().getFullYear()} キャリア未来図 All rights reserved.
          </small>
        </Container>
      </CopyRight>
    </>
  )
}

export default Footer
