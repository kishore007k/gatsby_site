import React from "react"
import "react-vertical-timeline-component/style.min.css"
import AboutPageWrapper from "./AboutPageWrapper.style"
import TimeLineEffect from "./TimeLineEffect"
import Skills from "./Skills"
import SkillsSection from "../../sections/SkillsSection/SkillsSection"
// Images Import
import tree from "../../images/tree.png"
import avatar from "../../images/me.jpeg"

const AboutPage = () => {
  return (
    <AboutPageWrapper>
      <div>
        <h1 className="title">About Me</h1>
      </div>
      <div className="aboutSection">
        <div className="avatar">
          <img src={avatar} alt="profilePic" />
        </div>
        <div className="aboutDesc">
          <p>
            I'm an engineering student currently pursuing my B.E. Degree. I
            started coding in my second year of college. I have done some
            Contributions during the last{" "}
            <span>
              <a href={tree}>Hacktoberfest</a>
            </span>{" "}
            and successfully completed the challenge within the time period. I
            also participate in some coding challenges in the sites like{" "}
            <span>
              <a
                href="https://www.hackerrank.com/kishorekumarsta1?hr_r=1"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                HackerRank
              </a>
            </span>{" "}
            and some other popular open ground challenges. I often write some
            articles in the <a href="https://dev.to/kishore007k">Dev.io</a>
          </p>
          <img
            src="https://grass-graph.moshimo.works/images/kishore007k.png?background=none"
            alt="GitHub Contribution Graph"
            className="image"
          />
        </div>
      </div>
      <SkillsSection />
      <TimeLineEffect />
      <Skills />
    </AboutPageWrapper>
  )
}

export default AboutPage
