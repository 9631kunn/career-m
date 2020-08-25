import { createGlobalStyle } from "styled-components"

const Global = createGlobalStyle`
  /******
  Ref: https://github.com/hankchizljaw/modern-css-reset/blob/master/dist/reset.css
  ******/
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    color: #444;
    font-family: 'Yu Mincho Light','YuMincho','Yu Mincho','游明朝体',sans-serif;
    scroll-behavior: smooth;
  }
  body {
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }


  /******
  Ref: https://qiita.com/nabettu/items/1593af04e48444c45c53
  ******/
  button{
    appearance: none;
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    padding: 0;
  }


  @media (max-width: 768px){
    .sp__none{
      display: none;
    }
  }
  @media (min-width: 769px){
    .pc__none{
      display: none;
    }
  }
`

export default Global
