import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Blogs = () => {
  const data = useStaticQuery(graphql`
    query BlogPostByPath($slug: String!) {
      mdx(slug: { eq: $slug }) {
        body
        excerpt
        frontmatter {
          title
          subtitle
          published
          description
          date
          category
          thumbnail {
            childImageSharp {
              fluid {
                src
              }
            }
          }
        }
      }
    }
  `)

  const blog = data.mdx

  console.log(blog)

  return (
    <div>
      <Helmet title={`Your Blog Name - ${title}`} />
      <div>{title}</div>
      <div>{subtitle}</div>
      <div>{description}</div>
      <div>{date}</div>
      <div>{category}</div>
      <div>{body}</div>
    </div>
  )
}

export default Blogs
