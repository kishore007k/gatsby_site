import styled from "styled-components"

const BlogsSectionWrapper = styled.section`
  .blogs {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
    margin: 40px auto;
  }

  .sectionTitle {
    margin-top: 50px;
  }

  .card {
    display: block;
    width: 100%;
    height: 450px;
    padding: 10px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.5s ease-in-out all;

    &:hover {
      box-shadow: 0 1px 10px rgba(32, 178, 170, 0.5);
    }

    a {
      text-decoration: none;
      color: black;
    }
  }

  .cardTitle {
    font-size: 25px;
    font-weight: 500;
    padding-left: 10px;
  }

  .title {
    font-size: 40px;
    font-weight: 700;
    color: lightseagreen;
  }

  .blogImageContainer {
    display: block;
    margin-bottom: 10px;
  }

  .cardContainer {
    margin-right: 20px;
  }

  .cardDetails {
    display: flex;
    justify-content: space-between;
    height: auto;
    width: 100%;
    margin-bottom: 10px;

    code {
      background-color: lightblue;
      font-size: 18px;
      padding: 5px;
      font-weight: 600;
      margin-right: 5px;
    }

    p {
      font-size: 20px;
      margin-bottom: 0px;
      font-weight: 500;
    }
  }

  .blogLinkBtn {
    display: block;
    width: fit-content;
    height: auto;
    margin: auto;
    margin-bottom: 20px;

    a {
      text-decoration: none;

      button {
        border: none;
        outline: none;
        border-radius: 10px;
        padding: 5px 10px;
        background-color: lightseagreen;
        color: aliceblue;
        font-size: 20px;
        font-weight: 500;
        cursor: pointer;
        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
      }
    }
  }

  @media (max-width: 960px) {
    .cardContainer {
      margin: 40px 60px;
    }

    .card {
      height: auto;
    }

    .blogs {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 420px) {
    .cardContainer {
      margin: 15px 30px;
    }
  }
`

export default BlogsSectionWrapper
