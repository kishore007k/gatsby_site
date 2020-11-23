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
        <div className="cardContainer">
          {data.allMdx.nodes.map(project => {
            return (
              <div key={project.id} className="cards">
                <div className="card">
                  <div>
                    <h3 className="title">{project.frontmatter.title}</h3>
                  </div>
                  <div>
                    <img
                      src={project.frontmatter.thumbnail.publicURL}
                      alt={project.slug}
                    />
                  </div>
                  <div className="categoryAndDate">
                    <div className="category">
                      <pre>
                        <code>{project.frontmatter.category}</code>
                      </pre>
                    </div>
                    <div>
                      <h4 className="date">{project.frontmatter.date}</h4>
                    </div>
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
                  </div>
                  <div>
                    <p>{project.frontmatter.description}</p>
                  </div>
                  <div className="linkAndReadme">
                    <div className="links">
                      <button className="githubBtn">
                        <a
                          href={project.frontmatter.githubLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <AiFillGithub />
                        </a>
                      </button>
                      <button className="externalBtn">
                        <a
                          href={project.frontmatter.siteLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FiExternalLink />
                        </a>
                      </button>
                    </div>
                    <div>
                      <button className="readmeBtn">
                        <a href={project.slug}>Read More</a>
                      </button>
                    </div>
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
