import React from "react"
import SEO from "../seo"
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"
import BlogPageWrapper from "./BlogsWrapper.style"

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
              fluid(maxWidth: 1500) {
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
    <BlogPageWrapper>
      <SEO title="Blogs" />
      <div className="sectionTitle">
        <h1 className="title">Blogs</h1>
      </div>
      <div className="blogs">
        {blogs.map(blog => (
          <div key={blog.id} className="cardContainer">
            <div className="card">
              <Link to={blog.slug}>
                <div className="cardTitle">
                  <h2>{blog.frontmatter.title}</h2>
                </div>
                <div className="blogImageContainer">
                  <div className="image">
                    <Image
                      fluid={blog.frontmatter.thumbnail.childImageSharp.fluid}
                    />
                  </div>
                </div>
                <div className="cardDetails">
                  <p>{blog.frontmatter.date}</p>
                  <code>{blog.frontmatter.category}</code>
                </div>
                <div className="published">
                  {blog.frontmatter.published ? (
                    <p>Published</p>
                  ) : (
                    <p>upcoming...</p>
                  )}
                </div>
                <div className="desc">{blog.frontmatter.description}</div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </BlogPageWrapper>
  )
}

export default Blogs
