import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import CompanyJson from "./JsonLd/Company"
import SiteJson from "./JsonLd/Site"
import Header from "./Header"
import Footer from "./Footer"
import GoToTop from "./GoToTop"

import styled, { ThemeProvider } from "styled-components"
import theme from "../styles/theme"
import Global from "../styles/global"

const media = props => props.theme.media.l
const light = "#F8FAFD"

const Main = styled.main`
  background: ${light};
  margin: auto;
  max-width: 1200px;
  @media (min-width: ${media}) {
    border-inline-start: 2px solid ${light};
    border-inline-end: 2px solid ${light};
  }
`

const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <Global />
      <CompanyJson />
      <SiteJson />
      <Header location={location} siteTitle={data.site.siteMetadata.title} />
      <Main>{children}</Main>
      <Footer />
      <GoToTop />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
