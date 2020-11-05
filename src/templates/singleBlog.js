import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import Image from "gatsby-image"
import Layout from "../components/layout"
import styled from "styled-components"

const Wrapper = styled.div`
  max-width: 1300px;
  height: auto;
  margin: auto;
`

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        subtitle
        published
        description
        date
        category
        thumbnail {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

const shortcodes = { Link } // Provide common components here

const singleBlog = ({ data: { mdx } }) => {
  return (
    <Layout>
      <Wrapper>
        <Helmet title={mdx.frontmatter.title} />
        <h1>{mdx.frontmatter.title}</h1>
        <Image fluid={mdx.frontmatter.thumbnail.childImageSharp.fluid} />
        <MDXProvider components={shortcodes}>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>
      </Wrapper>
    </Layout>
  )
}

export default singleBlog
