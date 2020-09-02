import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Section from "./Section"
import BracketsBg from "./BracketsBg"
import Heading from "../Heading"

import styled from "styled-components"
import "typeface-josefin-sans"

const main = props => props.theme.color.main
const fontGo = props => props.theme.fontGo
const news = props => props.news

const NewsWrap = styled.ul`
  height: ${news.length > 3 ? "100px" : "auto"};
  list-style: none;
  margin: auto;
  max-width: 600px;
  overflow-y: scroll;
  li {
    align-items: center;
    display: grid;
    gap: 15px;
    grid-template-columns: 80px 1fr;
    margin-block-end: 10px;
    time {
      background: ${main};
      border-radius: 3px;
      color: #fff;
      font: 11px ${fontGo};
      letter-spacing: 1.5px;
      line-height: 20px;
      text-align: center;
    }
    p {
      line-height: 20px;
    }
  }
`

const News = () => {
  const { allNews } = useStaticQuery(graphql`
    query newsComponentQuery {
      allNews(limit: 5, sort: { fields: date, order: DESC }) {
        nodes {
          content
          id
          date
        }
      }
    }
  `)

  const news = allNews.nodes

  return (
    <Section>
      <BracketsBg>
        <Heading main="News" sub="新着情報" />
        <NewsWrap news={news}>
          {news.map(n => (
            <li key={n.id}>
              <time dateTime={n.date}>{n.date.replace(/-/g, "/")}</time>
              <p>{n.content}</p>
            </li>
          ))}
        </NewsWrap>
      </BracketsBg>
    </Section>
  )
}

export default News
