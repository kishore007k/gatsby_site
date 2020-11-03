import styled from "styled-components"

const SkillsSectionWrapper = styled.section`
  .mainContent {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
  }

  .programingLanguages,
  .frameworks {
    margin: 30px auto;
    width: 100%;
  }

  .question {
    display: block;
    margin-bottom: 30px;
    font-size: 25px;
    font-weight: 400;
  }

  .skills {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
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
  }

  @media (max-width: 960px) {
    .mainContent {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(2, 1fr);
    }

    .question {
      text-align: center;
    }
  }
`

export default SkillsSectionWrapper
