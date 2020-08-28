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
    word-break: break-all;
  }
  html {
    color: #444;
    scroll-behavior: smooth;
  }
  body {
    font-family: '游明朝','Yu Mincho','YuMincho','Hiragino Mincho ProN','Hiragino Mincho Pro','HGS明朝E','メイリオ','Meiryo',serif;
    line-height: 1.5;
    min-height: 100vh;
    text-rendering: optimizeSpeed;
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

  address{
    font-style: normal;
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
