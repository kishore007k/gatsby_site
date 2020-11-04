import React from "react"
// import Django from "../../images/skills/django.svg"
// import docker from "../../images/skills/docker.svg"
// import flask from "../../images/skills/flask.svg"
// import jquery from "../../images/skills/jquery.svg"
// import mongodb from "../../images/skills/mongodb.svg"
// import mysql from "../../images/skills/mysql.svg"
import vsc from "../../images/skills/vsc.svg"
import OtherSkillsSectionWrapper from "./OtherSkillsSectionWrapper.style"

const OtherSkillsSection = () => {
  return (
    <OtherSkillsSectionWrapper>
      <div className="mainContent">
        <div className="vsc">
          <img src={vsc} alt="Visual Studio Code" />
          <h3>My favorite Code Editor</h3>
        </div>
        {/* <div>
          <div className="otherFeature">
            <big>Some other things that I'm familiar with:</big>
            <div className="otherSkills">
              <div>
                <div className="imageContainer">
                  <img src={jquery} alt="Jquery" />
                  <h4>Jquery</h4>
                </div>
                <div className="imageContainer">
                  <img src={docker} alt="Docker" />
                  <h4>Docker</h4>
                </div>
                <div className="imageContainer">
                  <img src={Django} alt="Django" />
                  <h4>Django</h4>
                </div>
              </div>
              <div>
                <div className="imageContainer">
                  <img src={flask} alt="Flask" />
                  <h4>Flask</h4>
                </div>
                <div className="imageContainer">
                  <img src={mongodb} alt="MongoDB" />
                  <h4>MongoDB</h4>
                </div>
                <div className="imageContainer">
                  <img src={mysql} alt="mySQL" />
                  <h4>MySQL</h4>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </OtherSkillsSectionWrapper>
  )
}

export default OtherSkillsSection
