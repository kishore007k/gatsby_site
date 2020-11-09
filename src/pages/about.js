import React from "react"
import AboutPage from "../components/About/AboutPage"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

const Wrapper = styled.div`
  max-width: 1300px;
  height: auto;
  margin: auto;
`

const query = graphql`
  {
    github {
      viewer {
        name
        login
        location
        bio
        avatarUrl
        company
        email
        twitterUsername
        url
        followers {
          totalCount
        }
        following {
          totalCount
        }
        gists {
          totalCount
        }
        organization(login: "layer5io") {
          avatarUrl
          name
          login
          email
          isVerified
        }
        repositories {
          totalCount
        }
      }
    }
  }
`

const About = () => {
  const data = useStaticQuery(query)
  return (
    <Layout>
      <SEO title="About" />
      <Wrapper>
        <AboutPage data={data} />
      </Wrapper>
    </Layout>
  )
}

export default About
