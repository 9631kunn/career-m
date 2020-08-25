import React from "react"

import Layout from "../components/Layout"
import Hero from "../components/Hero"

import styled from "styled-components"

const IndexPage = (props) => {

  const Container = styled.div`

  `

  return (
    <Layout location={props.location}>
      <Container>
        <Hero />
      </Container>
    </Layout>
  )
}

export default IndexPage
