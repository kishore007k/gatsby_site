import React from "react"
import ContactForm from "../components/Contact/ContactForm"
import Layout from "../components/layout"
import SEO from "../components/seo"

import styled from "styled-components"

const H1 = styled.h1`
  text-align: center;
  margin-top: 175px;
  color: lightseagreen;
`

const Wrapper = styled.div`
  max-width: 1300px;
  height: 100%;
  margin: auto;
`

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <div>
        <H1>Contact Me</H1>
      </div>
      <Wrapper>
        <ContactForm />
      </Wrapper>
    </Layout>
  )
}

export default Contact
