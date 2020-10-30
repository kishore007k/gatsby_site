import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo.svg" }) {
        publicURL
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
            src
          }
        }
      }
    }
  `)

  if (!data?.placeholderImage?.childImageSharp?.fluid) {
    return (
      <div>
        <img src={data.placeholderImage.publicURL} alt="logo" />
      </div>
    )
  }

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default Image
