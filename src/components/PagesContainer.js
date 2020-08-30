import React from "react"
import Particles from "react-particles-js"

import styled from "styled-components"
import pagesStyle from "../styles/pages"

const container = props => props.theme.container
const shadow = props => props.theme.shadow
const media = props => props.theme.media.m
const gapX = props => props.theme.gapX
const gapY = props => props.theme.gapY

const Wrap = styled.article`
  padding-block-end: ${gapY};
  position: relative;
`

const Title = styled.h1`
  color: #fff;
  left: 50%;
  position: absolute;
  top: 75px;
  transform: translateX(-50%);
  z-index: 5;
`

const Container = styled.div`
  margin: auto;
  max-width: calc(${container} + 20px); /* 子要素の横幅を980にするため */
  padding: 180px 10px 0;
  @media (min-widht: ${media}) {
    padding: 180px 0 0;
  }
`

const Content = styled.div`
  background: #fff;
  box-shadow: ${shadow};
  margin-block-start: ${gapY};
  padding: ${gapY} ${gapX};
  @media (min-width: ${media}) {
    padding: ${gapY};
  }
  ${pagesStyle}
`

const PagesContainer = ({ children, title }) => {
  return (
    <Wrap>
      <Title>{title}</Title>
      <Particles
        width="100%"
        height="180px"
        params={{
          particles: {
            number: {
              value: 100,
              density: {
                enable: true,
                value_area: 868.0624057955,
              },
            },
            color: {
              value: "#fff",
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#E84F42",
              },
              polygon: {
                nb_sides: 5,
              },
              image: {
                src: "img/github.svg",
                width: 100,
                height: 100,
              },
            },
            opacity: {
              value: 0.1,
              random: true,
              anim: {
                enable: false,
                speed: 0.5,
                opacity_min: 0.3,
                sync: false,
              },
            },
            size: {
              value: 2,
              random: true,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 190,
              color: "#fff",
              opacity: 0.3,
              width: 1,
            },
            move: {
              enable: true,
              speed: 5,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "grab",
              },
              onclick: {
                enable: false,
                mode: "push",
              },
              resize: false,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        }}
        style={{
          backgroundColor: "#E84F42",
          position: "absolute",
          width: "100%",
          height: "180px",
        }}
      />
      <Container>
        <Content>{children}</Content>
      </Container>
    </Wrap>
  )
}

export default PagesContainer
