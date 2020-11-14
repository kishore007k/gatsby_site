import React from "react"
import SingleProjectWrapper from "./SingleProjectWrapper.style"

const SingleProject = ({ data }) => {
  const {
    mdx: { body, frontmatter },
  } = data

  console.log(frontmatter)

  return (
    <SingleProjectWrapper>
      This is where all single projects will display
      <div>{body}</div>
    </SingleProjectWrapper>
  )
}

export default SingleProject
