import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ParticlesEffect from "../components/ParticlesEffect/particlesEffect"
import LandingPage from "../sections/LandingSection/LandingPage"
import AboutSection from "../sections/AboutSection/AboutSection"
import SkillsSection from "../sections/SkillsSection/SkillsSection"
import OtherSkillsSection from "../sections/OtherSkillsSection/OtherSkillsSection"
import BlogsSection from "../sections/BlogsSection/BlogsSection"

import styled from "styled-components"

const Wrapper = styled.div`
  max-width: 1300px;
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
      <OtherSkillsSection />
      <BlogsSection />
    </Wrapper>
  </Layout>
)

export default IndexPage
