import React from "react"

import styled from "styled-components"

const Wrap = styled.div`
  padding: 0 10px;
`

const Form = ({ title, src, height }) => {
  return (
    <Wrap>
      <iframe
        src={src}
        title={title}
        width="100%"
        height={height}
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        loading="lazy"
      >
        読み込んでいます…
      </iframe>
    </Wrap>
  )
}

export default Form
