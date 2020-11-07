import React from "react"
import Layout from "../components/layout"
import SingleBlogPost from "../components/SingleBlog/SingleBlog"
import { graphql } from "gatsby"

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
      <SingleBlogPost data={data} />
    </Layout>
  )
}

export default singleBlog
