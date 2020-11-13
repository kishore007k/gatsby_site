import React from "react"
import SingleProjectWrapper from "./SingleProjectWrapper.style"

const SingleProject = ({ data }) => {
  const {
    mdx: { body, frontmatter },
  } = data

  return (
    <SingleProjectWrapper>
      This is where all single projects will display
    </SingleProjectWrapper>
  )
}

export default SingleProject
