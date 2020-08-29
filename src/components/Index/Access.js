import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Section from "./Section"
import BracketsBg from "./BracketsBg"
import Heading from "../Heading"

import styled from "styled-components"

import postalCodeIcon from "../../icon/postalCode.svg"

const gapY = props => props.theme.gapY
const media = props => props.theme.media.m

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const HeadingWrap = styled.div`
  margin-block-end: ${gapY};
  width: 100%;
  @media (min-width: ${media}) {
    margin-block-end: 0;
    width: 50%;
  }
  address::before {
    background-image: url(${postalCodeIcon});
    content: "";
    display: inline-block;
    height: 10px;
    margin-inline-end: 5px;
    width: 10px;
  }
`

const MapWrap = styled.div`
  height: 0;
  padding-top: 35%;
  position: relative;
  width: 100%;
  @media (min-width: ${media}) {
    width: 50%;
  }
  iframe {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
`

const Access = () => {
  const { site } = useStaticQuery(graphql`
    query AccessComponentQuery {
      site {
        siteMetadata {
          title
          addressLocality
          addressRegion
          postalCode
          streetAddress
        }
      }
    }
  `)

  const {
    title,
    addressLocality,
    addressRegion,
    postalCode,
    streetAddress,
  } = site.siteMetadata

  const map = (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3243.6392409193536!2d139.7399056156549!3d35.61196458021063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188a7aaa7fd0f5%3A0xcf955bc3ea46597!2z44CSMTQwLTAwMDQg5p2x5Lqs6YO95ZOB5bed5Yy65Y2X5ZOB5bed77yS5LiB55uu77yS4oiS77yVIOODquODvOODieOCt-ODvOWNl-WTgeW3neODk-ODqw!5e0!3m2!1sja!2sjp!4v1598673753343!5m2!1sja!2sjp"
      title={title}
      width="600"
      height="450"
      frameBorder="0"
      style={{ border: 0 }}
      allowFullScreen=""
      aria-hidden="false"
      loading="lazy"
    />
  )

  return (
    <Section>
      <BracketsBg>
        <Container>
          <HeadingWrap>
            <Heading
              main="Access"
              sub="アクセス"
              mainAlign="left"
              subAlign="left"
            />
            <strong>人材紹介事業部</strong>
            <address>
              <span>{postalCode}</span>
              <br />
              <span>{addressRegion}</span>
              <br />
              <span>{addressLocality + streetAddress}</span>
            </address>
          </HeadingWrap>
          <MapWrap>{map}</MapWrap>
        </Container>
      </BracketsBg>
    </Section>
  )
}

export default Access
