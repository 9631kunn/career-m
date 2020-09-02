import React from "react"
import Helmet from "react-helmet"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Heading from "../components/Heading"
import Image from "../components/Image"

import styled from "styled-components"

const gapX = props => props.theme.gapX
const gapY = props => props.theme.gapY
const container = props => props.theme.container
const fontEn = props => props.theme.fontEn
const main = props => props.theme.color.main

const Wrap = styled.div`
  margin: auto;
  max-width: ${container};
  padding: ${gapY} ${gapX};
  width: 100%;
  .notFound {
    margin: auto;
    width: 200px;
    img {
      filter: drop-shadow(0 10px 10px hsl(0 0% 0% / 10%));
    }
  }
  a {
    background: ${main};
    color: #fff;
    display: block;
    font: 14px ${fontEn};
    margin: auto;
    padding: 0.5em;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    width: 200px;
  }
`

const NotFoundPage = props => (
  <Layout location={props.location} titleTag="ページが見つかりませんでした">
    <Helmet>
      <meta name="robots" content="noindex" />
    </Helmet>
    <Wrap>
      <Heading main="Not Found" sub="ページが見つかりませんでした" />
      <Image filename="404.png" className="notFound" />
      <Link to="/">Back To Home</Link>
    </Wrap>
  </Layout>
)

export default NotFoundPage
