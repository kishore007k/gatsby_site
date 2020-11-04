import React from "react"
import BlogsSectionWrapper from "./BlogsSectionWrapper.style"
import Image from "gatsby-image"
import { useStaticQuery, graphql, Link } from "gatsby"

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
          <h1 className="title">Blogs</h1>
        </div>
        <div className="blogs">
          {data.allMdx.nodes.map(blog => {
            return (
              <div className="cardContainer">
                <div className="card">
                  <Link to={`/blogs/${blog.slug}`}>
                    <div>
                      <h3 className="cardTitle">{blog.frontmatter.title}</h3>
                      {blog.frontmatter.subtitle ? (
                        <h5>{blog.frontmatter.subtitle}</h5>
                      ) : (
                        <></>
                      )}
                    </div>
                    <div className="blogImageContainer">
                      <Image
                        fluid={blog.frontmatter.thumbnail.childImageSharp.fluid}
                      />
                    </div>
                    <div className="cardDetails">
                      <code>{blog.frontmatter.category}</code>
                      <p>{blog.frontmatter.date}</p>
                    </div>
                    <div className="cardDesc">
                      <p>{blog.frontmatter.description}</p>
                    </div>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
        <div className="blogLinkBtn">
          <Link to="/blogs">
            <button>Blogs</button>
          </Link>
        </div>
      </div>
    </BlogsSectionWrapper>
  )
}

export default BlogsSection
