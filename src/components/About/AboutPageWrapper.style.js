import styled from "styled-components"

const AboutPageWrapper = styled.section`
  .title {
    text-align: center;
    color: lightseagreen;
    font-size: 40px;
    font-weight: 500;
    margin-top: 200px;
  }

  .aboutSection {
    display: flex;
    width: 100%;
    height: 500px;
  }

  .avatar {
    display: block;
    margin-right: 40px;
    width: 600px;
    height: 500px;

    img {
      display: block;
      border: none;
      border-radius: 10px;
    }
  }

  .devContainer {
    display: flex;
    align-items: center;
  }

  .devIcon {
    display: block;
    width: 40px;
  }

  .image {
    display: block;
    max-width: 100%;
    margin: auto;
    height: auto;
  }

  .githubContainer {
    /* background: linear-gradient(90deg, #e9e9e9, #dfe4ea); */
    background-color: #d1eff3;
    padding: 10px;
    border: none;
    border-radius: 5px;
    box-shadow: 0px 1px 5px rgba(51, 51, 51, 0.3);
    margin: 50px auto;
  }

  .github {
    display: flex;
    width: 100%;
  }

  .githubImage {
    display: block;
    max-width: auto;
    height: 100%;
    margin-right: 20px;
  }

  .githubDetails {
    display: block;
    width: 100%;

    .githubBio {
      p {
        font-size: 22px;
        font-weight: 300;
        letter-spacing: 3px;
        line-height: 35px;
      }
    }

    .githubDesc {
      display: flex;
      width: 100%;
      justify-content: space-evenly;
      align-items: center;

      p {
        text-align: center;
        background-color: aliceblue;
        padding: 10px;
        font-size: 20px;
        border: none;
        border-radius: 2px;
        box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2);
      }
    }
  }
`

export default AboutPageWrapper
