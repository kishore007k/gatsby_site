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
    height: max-content;
    padding: 0px 10px;
  }

  .avatar {
    display: block;
    margin-right: 40px;

    img {
      display: block;
      max-width: 300px;
      border: none;
      border-radius: 10px;
    }
  }

  .aboutDesc {
    display: block;
    width: 100%;
    line-height: 30px;
    letter-spacing: 2px;
    padding-top: 30px;

    a {
      text-decoration: none;
      font-size: 20px;
      font-weight: 400;
    }
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

  @media (max-width: 1120px) {
    .avatar {
      margin-right: 20px;
    }
  }

  @media (max-width: 720px) {
    .aboutSection {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 40px;
    }

    .avatar {
      margin-right: 0px;
      margin: auto;
    }
  }
`

export default AboutPageWrapper
