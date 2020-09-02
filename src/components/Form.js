import React from "react"

import styled from "styled-components"

const Wrap = styled.div`
  padding: 0 10px;
  iframe {
    height: ${props => props.spHeight}px;
    @media (min-width: 500px) {
      height: ${props => props.height}px;
    }
  }
`

const Form = ({ title, src, height, spHeight }) => {
  return (
    <Wrap height={height} spHeight={spHeight}>
      <iframe
        src={src}
        title={title}
        width="100%"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        loading="lazy"
      >
        読み込んでいます…
      </iframe>
    </Wrap>
  )
}

export default Form
