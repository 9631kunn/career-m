import { css } from "styled-components"

const color = props => props.theme.color.subOp

const pagesStyle = css`
  & > * {
    margin-block-end: 20px;
  }
  h1,
  h2,
  h3 {
    margin-block-end: 2em;
    text-align: center;
  }
  ul {
    list-style: none;
    li {
      line-height: 1.5;
      padding-inline-start: 30px;
      position: relative;
      &:before {
        background: ${color};
        border-radius: 50%;
        content: "";
        display: inline-block;
        height: 10px;
        left: 0;
        position: absolute;
        top: 7px;
        width: 10px;
      }
    }
  }
`

export default pagesStyle
