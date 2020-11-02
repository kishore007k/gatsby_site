import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import styled from "styled-components"
import LandingPage from "../sections/LandingPage/LandingPage"

const Wrapper = styled.div`
  h1 {
    text-align: center;
    font-size: 20px;
    font-weight: 300;

    strong {
      font-weight: 500;
    }
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Wrapper>
      <LandingPage />
    </Wrapper>
  </Layout>
)

export default IndexPage
