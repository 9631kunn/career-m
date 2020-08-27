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
        display: inline-block;
        font-size: 12px;
        position: relative;
        text-decoration: none;
        &::after {
          background: #fff;
          bottom: -4px;
          content: "";
          display: inline-block;
          height: 1px;
          left: 0;
          position: absolute;
          transition: 0.5s;
          width: 0;
        }
        &:hover::after {
          width: 100%;
        }
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
