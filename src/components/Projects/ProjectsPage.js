import React from "react"
import ProjectsPageWrapper from "./ProjectsPageWrapper.style"
import { AiFillGithub } from "react-icons/ai"
import { FiExternalLink } from "react-icons/fi"

const ProjectsPage = ({ data }) => {
  return (
    <ProjectsPageWrapper>
      <div>
        <div className="sectionTitle">
          <h1>Projects</h1>
        </div>
        <div>
          {data.allMdx.nodes.map(project => {
            return (
              <div key={project.id}>
                <div className="title">
                  <h3>{project.frontmatter.title}</h3>
                </div>
                <div>
                  <img
                    src={project.frontmatter.thumbnail.publicURL}
                    alt={project.slug}
                  />
                </div>
                <div>
                  <pre className="category">
                    <code>{project.frontmatter.category}</code>
                  </pre>
                </div>
                <div>
                  <div className="flags">
                    {project.frontmatter.flags.map((flag, index) => {
                      return (
                        <pre key={index}>
                          <code>{flag}</code>
                        </pre>
                      )
                    })}
                  </div>
                  <div>
                    <h4>{project.frontmatter.date}</h4>
                  </div>
                </div>
                <div>
                  <p>{project.frontmatter.description}</p>
                </div>
                <div>
                  <div>
                    <button>
                      <a href={project.frontmatter.githubLink}>
                        <AiFillGithub />
                      </a>
                    </button>
                    <button>
                      <a href={project.frontmatter.siteLink}>
                        <FiExternalLink />
                      </a>
                    </button>
                  </div>
                  <div>
                    <button>Read More</button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </ProjectsPageWrapper>
  )
}

export default ProjectsPage
