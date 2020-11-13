import React from "react"
import Layout from "../components/layout"
import SingleBlogPost from "../components/SingleBlog/SingleBlog"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import styled from "styled-components"

const Wrapper = styled.div`
  margin-top: 50px;
`

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      timeToRead
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

const singleBlog = ({ data }) => {
  return (
    <Layout>
      <SEO title={data.mdx.frontmatter.title} />
      <Wrapper>
        <SingleBlogPost data={data} />
      </Wrapper>
    </Layout>
  )
}

export default singleBlog
