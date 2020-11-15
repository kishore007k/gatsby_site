import styled from "styled-components"

const SingleProjectWrapper = styled.section`
  display: block;
  max-width: 1300px;
  height: auto;
  margin: 200px auto;

  .links {
    display: flex;
    height: auto;
    justify-content: center;
    width: 100%;

    .githubBtn,
    .externalBtn {
      display: block;
      border: none;
      border-radius: 50%;
      outline: none;
      padding: 10px;
      background-color: transparent;
      transition: 0.5s ease-in-out all;
      margin-right: 10px;

      > a {
        font-size: 50px;
        color: lightseagreen;
        transition: 0.5s ease-in-out all;
        vertical-align: middle;
      }

      &:hover {
        background-color: lightseagreen;

        > a {
          color: aliceblue;
        }
      }
    }
  }

  h1:nth-child(1) {
    color: lightseagreen;
    font-size: 40px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 60px;
  }

  img {
    display: block;
    max-width: 800px;
    margin: auto auto 60px auto;
    height: auto;
  }

  ul:nth-child(1) {
    li {
      list-style: inherit;
    }
  }

  ul {
    li {
      list-style: none;

      p {
        font-size: 18px;
        font-weight: 300;
      }

      a {
        text-decoration: none;
        color: darkslategrey;
        font-size: 20px;
        font-weight: 500;
        transition: 0.5s ease-in-out all;

        &:hover {
          color: rebeccapurple;
          font-weight: 500;
        }
      }
    }
  }

  ul {
    li {
      ul {
        li {
          list-style: disc;
        }
      }
    }
  }

  a {
    color: rebeccapurple;
    font-size: 25px;
    font-weight: 500;
    text-decoration: none;
  }

  pre {
    background-color: lightslategrey;
    color: aliceblue;
    font-size: 15px;
    font-weight: 600;
    padding: 10px;

    code {
      padding: 10px;
      border: none;
      border-radius: 0px;
    }
  }
`

export default SingleProjectWrapper
