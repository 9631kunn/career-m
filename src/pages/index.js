import React from "react"

import Layout from "../components/Layout"
import Hero from "../components/Index/Hero"
import TwoCol from "../components/Index/TwoCol"
import Feature from "../components/Index/Feature"
import News from "../components/Index/News"
import Access from "../components/Index/Access"
import Info from "../components/Index/Info"

import styled from "styled-components"

const IndexPage = props => {
  const Container = styled.div``

  return (
    <Layout location={props.location}>
      <Container>
        <Hero />
        <TwoCol />
        <Feature />
        <News />
        <Access />
        <Info />
      </Container>
    </Layout>
  )
}

export default IndexPage
