import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import styled from "styled-components"

const FooterMenuLists = () => {
  const fontEn = props => props.theme.fontEn

  const { allMenus } = useStaticQuery(graphql`
    query FooterMenuQuery {
      allMenus {
        nodes {
          title
          sub
          link
        }
      }
    }
  `)

  const menus = allMenus.nodes

  const Wrap = styled.ul`
    list-style: none;
    li {
      a {
        color: #fff;
        font-size: 12px;
        text-decoration: none;
        span {
          font: 100 12px ${fontEn};
          margin-inline-start: 1em;
        }
      }
    }
  `

  return (
    <Wrap>
      {menus.map(menu => (
        <li key={menu.link}>
          <Link to={menu.link}>
            {menu.title}
            <span>{menu.sub}</span>
          </Link>
        </li>
      ))}
    </Wrap>
  )
}

export default FooterMenuLists
