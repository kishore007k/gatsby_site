import styled from "styled-components"

const HeaderWrapper = styled.header`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #fdfdfd;
  height: 70px;
  z-index: 2;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);

  .container {
    display: block;
    max-width: 1140px;
    height: inherit;
    margin: auto;
  }

  .logo {
    width: 60px;
    height: auto;
    float: left;
    margin-left: 20px;
  }

  .toggleBar {
    display: none;
  }

  .navBar {
    display: block;
    float: right;
    height: 70px;

    nav {
      height: inherit;
      display: block;
      width: 100%;
      padding-top: 10px;

      .navList {
        display: flex;
        height: 100%;
        align-items: center;

        li {
          padding: 15px;
          list-style: none;

          a {
            text-decoration: none;
            color: #1090b8;
            font-size: 20px;
            padding: 5px;
            border: none;
            border-radius: 5px;
            font-weight: 400;
            transition: 0.5s ease-in-out all;

            &:hover {
              border-bottom: 2px solid rebeccapurple;
              animation: grow 5s linear infinite;
            }
          }
        }
      }
    }
  }

  @media (max-width: 960px) {
    .toggleBar {
      display: block;
      position: absolute;
      border: none;
      outline: none;
      border-radius: 50px;
      padding: 10px;
      font-size: 30px;
      top: 10px;
      right: 10px;
      z-index: 100;
      color: rebeccapurple;
      background-color: aliceblue;
    }

    .navBar {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      left: 100%;
      bottom: 0;
      height: 100vh;
      overflow: hidden;
      background-color: aliceblue;
    }

    .closed {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      left: 0%;
      bottom: 0;
      height: 100vh;
      overflow: hidden;
      background-color: aliceblue;

      .nav {
        display: flex;
        position: absolute;
        height: 100%;
        width: 100%;

        .navList {
          display: flex;
          width: 100%;
          height: 100vh;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          li {
            list-style: none;
            margin: 20px;

            a {
              color: rebeccapurple;
              font-size: 40px;
              border: none;
              border-radius: 5px;
              padding: 5px;
              text-decoration: none;
              transition: 0.5s ease-in-out all;

              &:hover {
                color: aliceblue;
                background-color: rebeccapurple;
              }
            }
          }
        }
      }
    }
  }
`

export default HeaderWrapper
