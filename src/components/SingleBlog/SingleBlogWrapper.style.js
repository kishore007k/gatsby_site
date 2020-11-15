import styled from "styled-components"

const SingleBlogWrapper = styled.section`
  max-width: 1300px;
  height: auto;
  margin: 200px auto;

  .content {
    h1 {
      text-align: center;
    }

    h2 {
      text-align: start;
      font-weight: 500;
    }

    p {
      margin-bottom: 20px;
    }

    img {
      margin-top: 20px;
    }

    pre {
      code {
        font-size: 18px;
        font-weight: 300;
        background-color: transparent;
      }
    }

    strong {
      code {
        background-color: transparent;
      }
    }

    code {
      background-color: #ffb14a;
      padding: 2px 5px;
      font-weight: 600;
    }
  }

  p {
    margin-bottom: 10px;
  }

  a {
    font-weight: 500;
    text-decoration: none;
    color: rebeccapurple;
    transition: 0.5s ease-in-out all;

    &:hover {
      font-weight: 600;
    }
  }

  pre {
    display: block;
    width: 100%;
    height: 100%;
    padding: 20px;
    color: aliceblue;
    font-size: 20px;
    font-weight: 400;
    background-color: #333333;
    overflow-x: auto;
  }

  .imageContainer {
    display: block;
    width: 100%;
    height: auto;
    margin-bottom: 30px;
  }

  .cardContainer {
    display: block;
    width: 100%;
    height: auto;
    padding: 10px;
  }

  h1 {
    color: lightseagreen;
    text-align: center;
  }

  .dateAndCategory {
    display: flex;
    width: 100%;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  .dateAndTime {
    p {
      margin-bottom: 0;
    }
  }

  .category {
    code {
      display: block;
      background-color: lightblue;
      padding: 5px 10px;
      border: none;
      border-radius: 5px;
      font-size: 18px;
      font-weight: 600;
    }
  }

  @media (max-width: 720px) {
    margin: 50px auto 0px auto;
  }
`

export default SingleBlogWrapper
