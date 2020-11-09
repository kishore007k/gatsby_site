import React from "react"
import "react-vertical-timeline-component/style.min.css"
import AboutPageWrapper from "./AboutPageWrapper.style"
import TimeLineEffect from "./TimeLineEffect"
import tree from "../../images/tree.png"
import dev from "../../images/socialIcons/dev.svg"
import avatar from "../../images/me.jpeg"

const AboutPage = ({ data }) => {
  const {
    github: { viewer },
  } = data
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
          articles in the{" "}
          <a href="https://dev.to/kishore007k" className="devContainer">
            <img src={dev} alt="dev.io" className="devIcon" />
            Dev.io
          </a>
        </div>
      </div>
      <TimeLineEffect />
      <div className="githubContainer">
        <div className="github">
          <div className="githubImage">
            <img src={viewer.avatarUrl} alt={viewer.name} />
          </div>
          <div className="githubDetails">
            <div className="githubBio">
              <p>{viewer.bio}</p>
            </div>
            <div className="githubDesc">
              <div>
                <p>Followers: {viewer.followers.totalCount}</p>
                <p>Following: {viewer.following.totalCount}</p>
              </div>
              <div>
                <p>Gists: {viewer.gists.totalCount}</p>
                <p>Repositories: {viewer.repositories.totalCount}</p>
              </div>
            </div>
          </div>
        </div>
        <img
          src="https://grass-graph.moshimo.works/images/kishore007k.png?background=none"
          alt="GitHub Contribution Graph"
          className="image"
        />
      </div>
    </AboutPageWrapper>
  )
}

export default AboutPage
