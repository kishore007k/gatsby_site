import styled from "styled-components"

const HeaderWrapper = styled.header`
  .header {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    z-index: 2;
  }

  .scrolled {
    background-color: #f7fdff;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
  }

  .container {
    display: block;
    max-width: 1300px;
    height: inherit;
    margin: auto;
  }

  .logo {
    width: 50px;
    height: auto;
    float: left;
    padding-top: 8px;
    margin-left: 20px;
  }

  .afterScroll {
    /* box-shadow: inset 2px 0px 10px rgba(227, 83, 149, 0.25),
      inset 0px 1px 10px rgba(243, 98, 107, 0.25); */
    filter: drop-shadow(0px 1px 5px rgba(245, 99, 102, 0.25));
    /* drop-shadow(0px 1px 5px rgba(227, 83, 148, 0.25)); */
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
            color: lightseagreen;
            font-size: 20px;
            padding: 5px;
            border: none;
            border-radius: 5px;
            font-weight: 400;
            transition: 0.5s ease-in-out all;
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
      font-size: 40px;
      top: 10px;
      right: 10px;
      z-index: 100;
      color: lightseagreen;
      cursor: pointer;
      background-color: transparent;
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
      background-color: #f0fcff;
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
      background-color: #f0fcff;

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
              color: lightseagreen;
              font-size: 40px;
              border: none;
              border-radius: 5px;
              padding: 5px;
              text-decoration: none;
              transition: 0.5s ease-in-out all;

              &:hover {
                color: #f0fcff;
                background-color: lightseagreen;
              }
            }
          }
        }
      }
    }
  }
`

export default HeaderWrapper
