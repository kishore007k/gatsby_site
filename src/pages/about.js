import React from "react"
import AboutPage from "../components/About/AboutPage"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const Wrapper = styled.div`
  max-width: 1300px;
  height: auto;
  margin: auto;
`

const About = () => {
  return (
    <Layout>
      <SEO title="About" />
      <Wrapper>
        <AboutPage />
      </Wrapper>
    </Layout>
  )
}

export default About
