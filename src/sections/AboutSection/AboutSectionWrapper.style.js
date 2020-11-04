import styled from "styled-components"

const AboutSectionWrapper = styled.section`
  padding: 50px 0px;

  .title {
    font-size: 40px;
    font-weight: 700;
    color: lightseagreen;
  }

  .mainContent {
    display: flex;
    width: 100%;
    height: 100%;
  }

  .profilePicContainer {
    min-width: 350px;
    height: auto;
    margin-right: 40px;
  }

  .profilePic {
    display: block;
    width: 100%;
    height: auto;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .btnsContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  .btn {
    display: flex;
    align-items: center;
    margin-right: 20px;

    .btnCover {
      margin-left: 10px;
      text-decoration: none;
      color: aliceblue;

      button {
        outline: none;
        padding: 5px;
        display: flex;
        align-items: center;
        color: aliceblue;
        border: none;
        border-radius: 5px;
        background-color: lightseagreen;
        cursor: pointer;
        box-shadow: 0px 1px 10px rgba(32, 178, 170, 0.5);
        transition: 0.5s ease-in-out all;

        &:hover {
          box-shadow: 0px 3px 20px rgba(25, 138, 132, 0.8);
        }

        img {
          width: 30px;
          height: auto;
        }
      }
    }
  }

  .content {
    p {
      text-align: justify;

      i {
        font-variant: small-caps;
      }

      span {
        color: cadetblue;
        font-weight: 600;
      }

      code {
        background-color: lightblue;
        font-size: 18px;
        padding: 5px;
        font-weight: 600;
        margin-right: 5px;
      }
    }
  }

  @media (max-width: 1024px) {
    padding: 50px 20px;
  }

  @media (max-width: 960px) {
    margin: 50px 30px;

    .profilePicContainer {
      margin-right: 20px;
    }

    .btnsContainer {
      display: block;
    }
  }

  @media (max-width: 720px) {
    .mainContent {
      flex-direction: column;
      align-items: center;
    }

    .profilePicContainer {
      width: 100%;
      margin: 20px auto;

      .profilePic {
        max-width: 500px;
        display: block;
        margin: auto;
      }
    }
  }

  @media (max-width: 420px) {
    margin: 50px 0px;

    .profilePicContainer {
      .profilePic {
        max-width: 300px;
      }
    }
  }
`

export default AboutSectionWrapper
