import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import CompanyJson from "./JsonLd/Company"
import SiteJson from "./JsonLd/Site"
import Header from "./Header"
import Footer from "./Footer"

import { ThemeProvider } from "styled-components"
import theme from "../styles/theme"

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
      <CompanyJson />
      <SiteJson />
      <Header location={location} siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
