import React from "react"
import Image from "gatsby-image"
import AboutSectionWrapper from "./AboutSectionWrapper.style"
import github from "../../images/socialIcons/github.svg"
import dev from "../../images/socialIcons/dev.svg"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    file(relativePath: { eq: "avatar.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const AboutSection = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)
  return (
    <AboutSectionWrapper>
      <h1 className="title">About Me</h1>
      <div className="mainContent">
        <div className="profilePicContainer">
          <div className="profilePic">
            <Image
              fluid={fluid}
              style={{ border: "none", borderRadius: "5px" }}
            />
          </div>
        </div>
        <div className="content">
          <p>
            I'm an engineering student currently pursuing my B.E. Degree in the
            <i> Mechanical Engineering</i>. I'm the kind of person who likes to
            keep all people around him happy and joyful. I started coding in my
            second year of the college. I have some experience on working with
            some <span>frameworks</span> and
            <span> static site generators</span> like <code>Gatsby</code>
            <code> React</code> <code>Jekyll</code>. I'm looking forward to
            collaborate with all kinds of designers, developers, etc.
          </p>
          <div className="btnsContainer">
            <p className="btn">
              To know about my works:
              <a
                href="https://github.com/kishore007k"
                target="_blank"
                rel="noreferrer"
                className="btnCover"
              >
                <button>
                  <img src={github} alt="GitHub" /> &nbsp;&nbsp;GitHub
                </button>
              </a>
            </p>
            <p className="btn">
              I often write some blogs in:
              <a
                href="https://dev.to/kishore007k"
                target="_blank"
                rel="noreferrer"
                className="btnCover"
              >
                <button>
                  <img src={dev} alt="Dev" /> &nbsp;&nbsp;Dev &nbsp;
                </button>
              </a>
            </p>
          </div>
        </div>
      </div>
    </AboutSectionWrapper>
  )
}

export default AboutSection
