import React from "react"
// import Image from "../../components/image"
import LandingPageWrapper from "./LandingPageWrapper.style"

const LandingPage = () => {
  return (
    <LandingPageWrapper>
      <div className="profilePic">{/* <Image fluid={} /> */}</div>
      <div className="mainContent">
        <h1>Hi!!</h1>
        <h1>I'm</h1>
        <h3>kishorekumar</h3>
        <div className="subContents">
          <p>FrontEnd Developer</p>
          <p>Web Designer</p>
          <p>Student</p>
        </div>
      </div>
    </LandingPageWrapper>
  )
}

export default LandingPage
