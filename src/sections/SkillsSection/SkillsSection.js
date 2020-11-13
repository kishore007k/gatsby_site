import React from "react"
import SkillsSectionWrapper from "./SkillsSectionWrapper.style"

// Imports of Images
import css from "../../images/skills/css.svg"
import gatsbyLogo from "../../images/skills/gatsby.svg"
import git from "../../images/skills/git.svg"
import graphQL from "../../images/skills/graphQL.svg"
import html from "../../images/skills/html.svg"
import javascript from "../../images/skills/javascript.svg"
import jekyll from "../../images/skills/jekyll.svg"
import markdown from "../../images/skills/markdown.svg"
import python from "../../images/skills/python.svg"
import reactLogo from "../../images/skills/react.svg"
import sass from "../../images/skills/sass.svg"
import vue from "../../images/skills/vue.svg"

const SkillsSection = () => {
  return (
    <SkillsSectionWrapper>
      <div className="mainContent">
        <div className="programingLanguages">
          <big className="question">What are all the languages I know?</big>
          <div className="skill">
            <div>
              <div className="imageContainers">
                <img src={python} alt="Python" />
                <h4>Python</h4>
              </div>
              <div className="imageContainers">
                <img src={javascript} alt="JavaScript" />
                <h4>JavaScript</h4>
              </div>
              <div className="imageContainers">
                <img src={markdown} alt="Markdown" />
                <h4>MarkDown</h4>
              </div>
            </div>
            <div>
              <div className="imageContainers">
                <img src={html} alt="HTML" />
                <h4>HTML</h4>
              </div>
              <div className="imageContainers">
                <img src={css} alt="CSS" />
                <h4>CSS</h4>
              </div>
              <div className="imageContainers">
                <img src={sass} alt="SASS/SCSS" />
                <h4>SCSS/SASS</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="frameworks">
          <big className="question">
            What frameworks & Static-Site generators I know?
          </big>
          <div className="skill">
            <div>
              <div className="imageContainers">
                <img src={reactLogo} alt="React JS" />
                <h4>ReactJS</h4>
              </div>
              <div className="imageContainers">
                <img src={vue} alt="Vue JS" />
                <h4>VueJS</h4>
              </div>
              <div className="imageContainers">
                <img src={gatsbyLogo} alt="Gatsby JS" />
                <h4>GatsbyJS</h4>
              </div>
            </div>
            <div>
              <div className="imageContainers">
                <img src={jekyll} alt="Jekyll" />
                <h4>Jekyll</h4>
              </div>
              <div className="imageContainers">
                <img src={graphQL} alt="GraphQL" />
                <h4>GraphQL</h4>
              </div>
              <div className="imageContainers">
                <img src={git} alt="Git" />
                <h4>Git</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SkillsSectionWrapper>
  )
}

export default SkillsSection
