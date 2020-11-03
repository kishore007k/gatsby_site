import styled from "styled-components"

const LandingPageWrapper = styled.section`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: auto;
  z-index: 1;

  .mainDiv {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    justify-content: center;
    align-items: center;
  }

  .content {
    display: flex;
    align-items: center;
  }

  .profileContainer {
    display: block;
    width: 300px;
    height: auto;
    margin-right: 40px;
  }

  .profilePic {
    display: block;
    border: none;
    border-radius: 50%;
  }

  .mainContent {
    display: block;
    width: auto;
    text-align: center;
    color: aliceblue;

    h1 {
      font-size: 45px;
      font-weight: 400;
      margin-bottom: 30px;
    }

    h3 {
      font-size: 40px;
      font-weight: 400;
      letter-spacing: 20px;
      text-transform: uppercase;
      color: #71ff9e;
    }
  }

  .subContents {
    display: flex;
    width: 100%;
    height: auto;
    justify-content: center;
    padding-top: 20px;

    p {
      padding-right: 50px;
      font-size: 22px;
      font-weight: 300;
    }
  }

  .socialIcons {
    display: flex;
    width: 100%;
    position: absolute;
    bottom: 40px;
    margin: auto;
    justify-content: center;
    align-items: center;

    .instagram {
      width: 40px;
    }

    .linkedIn {
      margin-right: 0px;
    }

    img {
      width: 50px;
      margin-right: 150px;
    }
  }

  @media (max-width: 960px) {
    .content {
      display: flex;
      flex-direction: column;
    }

    .profileContainer {
      width: 250px;
    }

    .mainContent {
      h1 {
        font-size: 40px;
      }

      h3 {
        font-size: 35px;
      }

      .subContents {
        p {
          font-size: 20px;
        }
      }
    }

    .socialIcons {
      img {
        margin-right: 80px;
      }
    }
  }

  @media (max-width: 570px) {
    .profileContainer {
      width: 150px;
    }

    .mainContent {
      h1 {
        font-size: 30px;
      }

      h3 {
        font-size: 25px;
      }

      .subContents {
        p {
          padding-right: 30px;
        }
      }
    }
  }

  @media (max-width: 420px) {
    .profileContainer {
      margin-right: 0px;
      margin-bottom: 20px;
    }

    .mainContent {
      h3 {
        letter-spacing: 10px;
      }

      .subContents {
        p {
          font-size: 20px;
          padding-right: 20px;
        }
      }
    }

    .socialIcons {
      img {
        margin-right: 20px;
      }
    }
  }
`

export default LandingPageWrapper
