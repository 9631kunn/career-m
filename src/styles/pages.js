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
    padding-inline-start: 30px;
    li {
      line-height: 1.5;
      position: relative;
      &:before {
        background: ${color};
        border-radius: 50%;
        content: "";
        display: inline-block;
        height: 10px;
        left: -20px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 10px;
      }
    }
  }
`

export default pagesStyle
