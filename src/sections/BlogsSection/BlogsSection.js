import React from "react"
import BlogsSectionWrapper from "./BlogsSectionWrapper.style"
import Image from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const BlogsSection = () => {
  const data = useStaticQuery(graphql`
    {
      allMdx(
        filter: { frontmatter: { published: { eq: true } } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        nodes {
          id
          slug
          frontmatter {
            title
            subtitle
            category
            date
            description
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
  `)

  return (
    <BlogsSectionWrapper>
      <div>
        <div className="sectionTitle">
          <h1>Blogs</h1>
        </div>
        <div>
          {data.allMdx.nodes.map(blog => {
            return (
              <div>
                <div>
                  <h3>{blog.frontmatter.title}</h3>
                  <h5>{blog.frontmatter.subtitle}</h5>
                </div>
                <div>
                  <code>{blog.frontmatter.category}</code>
                  <p>{blog.frontmatter.date}</p>
                </div>
                <div>
                  <p>{blog.frontmatter.description}</p>
                </div>
                <div>
                  <Image
                    fluid={blog.frontmatter.thumbnail.childImageSharp.fluid}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </BlogsSectionWrapper>
  )
}

export default BlogsSection
