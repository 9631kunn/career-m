import React from "react"

import Layout from "../components/Layout"
import Hero from "../components/Index/Hero"
import TwoCol from "../components/Index/TwoCol"
import Feature from "../components/Index/Feature"
import News from "../components/Index/News"
import Access from "../components/Index/Access"
import Info from "../components/Index/Info"

import PagesContainer from "../components/PagesContainer"

const IndexPage = props => (
  <Layout location={props.location}>
    {/* <Hero />
    <TwoCol />
    <Feature />
    <News />
    <Access />
    <Info /> */}
    <PagesContainer>
      <h1>てｓｔ</h1>
    </PagesContainer>
  </Layout>
)

export default IndexPage
