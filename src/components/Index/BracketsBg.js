import React from "react"

import styled from "styled-components"

const BracketsBg = ({ children }) => {
  const red = props => props.theme.color.main

  const Wrap = styled.div`
    background: #fff;
    padding: 60px 30px;
    position: relative;
    &::before,
    &::after {
      content: "";
      height: 60px;
      position: absolute;
      width: 30px;
    }
    &::before {
      border-left: 1px solid ${red};
      border-top: 1px solid ${red};
      left: 0;
      top: 0;
    }
    &::after {
      bottom: 0;
      right: 0;
      border-bottom: 1px solid ${red};
      border-right: 1px solid ${red};
    }
  `

  return <Wrap>{children}</Wrap>
}

export default BracketsBg
