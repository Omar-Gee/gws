import React from "react"
import styled from 'styled-components'
import image from '../images/oming-soon.jpeg'

import './reset.css'

const IndexPage = () => (
  <Container>
    <TextContainer>
      <Text style={{ fontSize: '80px' }}>
        coming soon
    </Text>
      <Text>
        geermanwebsolutions.nl
    </Text>
    </TextContainer>

  </Container>
)

export default IndexPage

const Container = styled.div`
  background: url(${image}) center center no-repeat;
  background-size: cover;
  width: 100vw;
  height: 100vh;
`
const TextContainer = styled.div`

`
const Text = styled.h1`
  color: #fff;
  font-family: Arial;
  text-align: center;
  padding: 24px 0;
`