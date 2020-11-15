import React from "react"
import SingleProjectWrapper from "./SingleProjectWrapper.style"
import { Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Helmet } from "react-helmet"
import { AiFillGithub } from "react-icons/ai"
import { FiExternalLink } from "react-icons/fi"

const SingleProject = ({ data }) => {
  const { mdx } = data

  const shortcodes = { Link }

  return (
    <SingleProjectWrapper>
      <Helmet title={mdx.frontmatter.title} />
      <div>
        <div>
          <h1>{mdx.frontmatter.title}</h1>
        </div>
      </div>
      <div className="content">
        <MDXProvider components={shortcodes}>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>
      </div>
      <div className="links">
        <button className="githubBtn">
          <a href={mdx.frontmatter.githubLink}>
            <AiFillGithub />
          </a>
        </button>
        <button className="externalBtn">
          <a href={mdx.frontmatter.siteLink}>
            <FiExternalLink />
          </a>
        </button>
      </div>
    </SingleProjectWrapper>
  )
}

export default SingleProject
