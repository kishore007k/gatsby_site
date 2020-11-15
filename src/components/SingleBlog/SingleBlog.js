import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import Image from "gatsby-image"
import SingleBlogWrapper from "./SingleBlogWrapper.style"

const shortcodes = { Link } // Provide common components here

const SingleBlogPost = ({ data: { mdx } }) => {
  return (
    <SingleBlogWrapper>
      <Helmet title={mdx.frontmatter.title} />
      <div className="imageContainer">
        <Image fluid={mdx.frontmatter.thumbnail.childImageSharp.fluid} />
      </div>
      <div className="cardContainer">
        <div>
          <h1 className="title">{mdx.frontmatter.title}</h1>
          {mdx.frontmatter.subtitle ? (
            <h3>{mdx.frontmatter.subtitle}</h3>
          ) : (
            <></>
          )}
        </div>
        <div className="dateAndCategory">
          <div className="dateAndTime">
            <p>Time to read: {mdx.timeToRead} minutes</p>
            <p>Date: {mdx.frontmatter.date}</p>
          </div>
          <div className="category">
            <code>{mdx.frontmatter.category}</code>
          </div>
        </div>
        <div className="content">
          <MDXProvider components={shortcodes}>
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </MDXProvider>
        </div>
      </div>
    </SingleBlogWrapper>
  )
}

export default SingleBlogPost
