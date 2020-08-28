import React from "react"
import scrollTo from 'gatsby-plugin-smoothscroll';

import styled from "styled-components"

import UpIcon from "../icon/up-arrow.svg"

const mediaS = props => props.theme.media.s
const mediaL = props => props.theme.media.l

const Wrap = styled.div`
  bottom: 10px;
  position: fixed;
  right: 5vw;
  @media (min-width: ${mediaS}){
    right: 10vw;
  }
  @media (min-width: ${mediaL}){
    right: 15vw;
  }
  button::before{
    background-image: url(${UpIcon});
    content: "";
    display: inline-block;
    height: 30px;
    opacity: 0.5;
    width: 30px;
  }
`

const GoToTop = () => <Wrap><button onClick={() => scrollTo('#header')} aria-label="button" /></Wrap>

export default GoToTop
