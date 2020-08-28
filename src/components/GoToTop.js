import React from "react"
import scrollTo from 'gatsby-plugin-smoothscroll';

import styled from "styled-components"

const Wrap = styled.div`
  bottom: 10px;
  position: fixed;
  right: 15vw;
  button::before{
    content: "↑";
    display: inline-block;
    height: 20px;
    width: 20px;
  }
`

const GoToTop = () => <Wrap><button onClick={() => scrollTo('#header')} /></Wrap>

export default GoToTop