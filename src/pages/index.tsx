import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"

import "./reset.css"

// @ts-ignore
const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "gws.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  console.log(data)
  const imageData = data.desktop.childImageSharp.fluid
  return (
    <StyledBackgroundImage
      Tag="section"
      fluid={imageData}
      backgroundColor={`#040e18`}
    >
      <Container />
    </StyledBackgroundImage>
  )
}

export default IndexPage

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`
const StyledBackgroundImage = styled(BackgroundImage)`
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`
