import React from "react"
import vsc from "../../images/skills/vsc.svg"
import OtherSkillsSectionWrapper from "./OtherSkillsSectionWrapper.style"

const OtherSkillsSection = () => {
  return (
    <OtherSkillsSectionWrapper>
      <div className="mainContent">
        <div className="vsc">
          <img src={vsc} alt="Visual Studio Code" />
          <h3>My favorite Text Editor</h3>
        </div>
      </div>
    </OtherSkillsSectionWrapper>
  )
}

export default OtherSkillsSection
