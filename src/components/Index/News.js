import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Section from "./Section"
import BracketsBg from "./BracketsBg"
import Heading from "../Heading"

import styled from "styled-components"
import "typeface-josefin-sans"

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

  const mainOp = props => props.theme.color.mainOp
  const fontGo = props => props.theme.fontGo

  const NewsWrap = styled.ul`
    height: 150px;
    list-style: none;
    overflow-y: scroll;
    li {
      align-items: center;
      display: grid;
      gap: 15px;
      grid-template-columns: 80px 1fr;
      margin-block-end: 10px;
      time {
        background: ${mainOp};
        border-radius: 3px;
        color: #fff;
        font: 0.9em ${fontGo};
        height: 20px;
        text-align: center;
      }
    }
  `

  return (
    <Section>
      <BracketsBg>
        <Heading main="News" sub="新着情報" />
        <NewsWrap>
          {allNews.nodes.map(n => (
            <li key={n.id}>
              <time datetime={n.date}>{n.date}</time>
              <p>{n.content}</p>
            </li>
          ))}
        </NewsWrap>
      </BracketsBg>
    </Section>
  )
}

export default News
