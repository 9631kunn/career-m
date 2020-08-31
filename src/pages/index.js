import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout"
import Hero from "../components/Index/Hero"
import TwoCol from "../components/Index/TwoCol"
import Feature from "../components/Index/Feature"
import News from "../components/Index/News"
import Access from "../components/Index/Access"
import Info from "../components/Index/Info"

const IndexPage = props => {
  const data = useStaticQuery(graphql`
    query IndexQuery {
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `)

  const { siteUrl } = data.site.siteMetadata

  return (
    <Layout location={props.location}>
      <Helmet>
        <link rel="canonical" href={siteUrl} />
      </Helmet>
      <Hero />
      <TwoCol />
      <Feature />
      <News />
      <Access />
      <Info />
    </Layout>
  )
}

export default IndexPage
