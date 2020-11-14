import React from "react"
import ProjectsSectionWrapper from "./ProjectsSectionWrapper.style"
import Image from "gatsby-image"
import { useStaticQuery, graphql, Link } from "gatsby"

const ProjectsSection = () => {
  const data = useStaticQuery(graphql`
    {
      allMdx(
        filter: { fields: { collection: { eq: "projects" } } }
        sort: { fields: frontmatter___date, order: DESC }
        limit: 3
      ) {
        nodes {
          id
          slug
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
    }
  `)

  return (
    <ProjectsSectionWrapper>
      <div>
        <div className="sectionTitle">
          <h1 className="title">Projects</h1>
        </div>
        <div className="projects">
          {data.allMdx.nodes.map(project => {
            return (
              <div className="cardContainer" key={project.id}>
                <div className="card">
                  <div className="projectImageContainer">
                    <div className="image">
                      <Image
                        fluid={
                          project.frontmatter.thumbnail.childImageSharp.fluid
                        }
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="cardTitle">{project.frontmatter.title}</h3>
                    {project.frontmatter.subtitle ? (
                      <h5>{project.frontmatter.subtitle}</h5>
                    ) : (
                      <></>
                    )}
                  </div>
                  <div className="cardDetails">
                    <code>{project.frontmatter.category}</code>
                    <p>{project.frontmatter.date}</p>
                  </div>
                  <div className="cardDesc">
                    <p>{project.frontmatter.description}</p>
                  </div>
                  <div className="readme">
                    <Link to={`/projects/${project.slug}`}>Read More</Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <div className="projectLinkBtn">
          <Link to="/projects">
            <button>Projects</button>
          </Link>
        </div>
      </div>
    </ProjectsSectionWrapper>
  )
}

export default ProjectsSection
