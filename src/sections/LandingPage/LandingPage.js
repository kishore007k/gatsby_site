import React from "react"
import Image from "gatsby-image"
import LandingPageWrapper from "./LandingPageWrapper.style"
import { useStaticQuery, graphql } from "gatsby"
import ReactTypingEffect from "react-typing-effect"
import github from "../../images/socialIcons/github.svg"
import linkedIn from "../../images/socialIcons/linkedIn.svg"
import instagram from "../../images/socialIcons/instagram.svg"
import twitter from "../../images/socialIcons/twitter.svg"

const query = graphql`
  {
    file(relativePath: { eq: "avatar.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const LandingPage = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  return (
    <LandingPageWrapper>
      <div className="mainDiv">
        <div className="content">
          <div className="profileContainer">
            <Image fluid={fluid} className="profilePic" />
          </div>
          <div className="mainContent">
            <h1>Hi!! I'm</h1>
            <h3>
              <ReactTypingEffect
                speed={100}
                eraseSpeed={100}
                typingDelay={1000}
                text="kishorekumar"
              />
            </h3>
            <div className="subContents">
              <p>FrontEnd Developer</p>
              <p>Web Designer</p>
              <p>Student</p>
            </div>
          </div>
        </div>
        <div className="socialIcons">
          <a
            href="https://www.instagram.com/kishore_007_k/"
            rel="noreferrer"
            target="_blank"
          >
            <img src={instagram} alt="instagram" className="instagram" />
          </a>
          <a
            href="https://github.com/kishore007k"
            rel="noreferrer"
            target="_blank"
          >
            <img src={github} alt="github" />
          </a>
          <a
            href="https://twitter.com/kishorekumarst1"
            rel="noreferrer"
            target="_blank"
          >
            <img src={twitter} alt="twitter" />
          </a>
          <a
            href="https://www.linkedin.com/in/kishore-kumar-6bb5801a2/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedIn} alt="linkedIn" className="linkedIn" />
          </a>
        </div>
      </div>
    </LandingPageWrapper>
  )
}

export default LandingPage
