import styled from "styled-components"

const OtherSkillsSectionWrapper = styled.section`
  display: block;
  width: 100%;
  height: auto;

  .mainContent {
    display: grid;
    /* grid-template-columns: repeat(2, 1fr); */
    grid-template-columns: 1fr;
    width: 100%;
  }

  .vsc {
    display: flex;
    flex-direction: column-reverse;
    width: 100%;
    height: auto;
    justify-content: space-evenly;
    align-items: center;

    img {
      width: 60px;
    }

    h3 {
      text-align: center;
    }
  }

  .imageContainer {
    display: flex;
    width: 100%;
    height: auto;
    justify-content: space-evenly;
    align-items: center;

    img {
      width: 60px;
      height: 60px;
    }

    h4 {
      text-align: center;
    }
  }

  .otherSkills {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
  }
`

export default OtherSkillsSectionWrapper
