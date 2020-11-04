import React from "react"
import SEO from "../seo"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

export const query = graphql`
  query AllBlogPostsQuery {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        id
        slug
        frontmatter {
          title
          subtitle
          description
          category
          date
          published
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
  }
`

const Blogs = () => {
  const data = useStaticQuery(query)
  const blogs = data.allMdx.nodes
  return (
    <div>
      <SEO title="Blogs" />
      <div>
        {blogs.map(blog => (
          <div key={blog.id}>
            <Helmet title={blog.frontmatter.title} />
            <div>Date : {blog.frontmatter.date}</div>
            <div>Category: {blog.frontmatter.category}</div>
            <div>Desc: {blog.frontmatter.description}</div>
            <div>
              <Image fluid={blog.frontmatter.thumbnail.childImageSharp.fluid} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blogs
