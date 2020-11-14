import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectsPage from "../components/Projects/ProjectsPage"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    allMdx(
      filter: { fields: { collection: { eq: "projects" } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        id
        slug
        body
        frontmatter {
          category
          date
          description
          flags
          githubLink
          siteLink
          title
          thumbnail {
            publicURL
          }
        }
      }
    }
  }
`

const Projects = () => {
  const data = useStaticQuery(query)
  return (
    <Layout>
      <SEO title="Projects" />
      <ProjectsPage data={data} />
    </Layout>
  )
}

export default Projects
