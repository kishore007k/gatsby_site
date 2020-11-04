import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

export const query = graphql`
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
`

const Blogs = () => {
  const {
    mdx: {
      body,
      frontmatter: {
        title,
        subtitle,
        description,
        date,
        subtitle,
        category,
        thumbnail,
      },
    },
  } = useStaticQuery(query)
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
