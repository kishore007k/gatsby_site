import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import styled from "styled-components"
import LandingPage from "../sections/LandingSection/LandingPage"
import ParticlesEffect from "../components/ParticlesEffect/particlesEffect"
import AboutSection from "../sections/AboutSection/AboutSection"
import SkillsSection from "../sections/SkillsSection/SkillsSection"

const Wrapper = styled.div`
  max-width: 1140px;
  margin: auto;
  min-height: 100%;

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
    <ParticlesEffect />
    <Wrapper>
      <LandingPage />
      <AboutSection />
      <SkillsSection />
    </Wrapper>
  </Layout>
)

export default IndexPage
