import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet"

import SEO from "./SEO"
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

const Layout = ({ children, location, titleTag }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          siteUrl
        }
      }
    }
  `)

  const { siteUrl, title } = data.site.siteMetadata
  const canonical =
    location.pathname === "/" ? siteUrl : siteUrl + location.pathname

  return (
    <ThemeProvider theme={theme}>
      <SEO titleTag={titleTag} location={location} />
      <Helmet>
        <link rel="canonical" href={canonical} />
      </Helmet>
      <Global />
      <CompanyJson />
      <SiteJson />
      <Header location={location} siteTitle={title} />
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
