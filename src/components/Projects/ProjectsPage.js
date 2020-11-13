import React from "react"
import ProjectsPageWrapper from "./ProjectsPageWrapper.style"

const ProjectsPage = ({ data }) => {
  console.log(data)
  return (
    <ProjectsPageWrapper>
      <div>
        <h1>Projects</h1>
      </div>
      <p>This is the Projects Page</p>
    </ProjectsPageWrapper>
  )
}

export default ProjectsPage
