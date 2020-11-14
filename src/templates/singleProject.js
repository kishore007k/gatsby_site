import React from "react"
import Layout from "../components/layout"
import SingleProject from "../components/SingleProject/SingleProject"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import styled from "styled-components"

const Wrapper = styled.div`
  margin-top: 50px;
`

export const pageQuery = graphql`
  query ProjectPostQuery($id: String) {
    mdx(id: { eq: $id }, fields: { collection: { eq: "projects" } }) {
      id
      slug
      body
      frontmatter {
        category
        date
        description
        flags
        githubLink
        siteLink
        title
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

const singleBlog = ({ data }) => {
  return (
    <Layout>
      <SEO title={data.mdx.frontmatter.title} />
      <Wrapper>
        <SingleProject data={data} />
      </Wrapper>
    </Layout>
  )
}

export default singleBlog
