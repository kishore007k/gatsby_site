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

  .title {
    font-size: 40px;
    font-weight: 700;
    color: lightseagreen;
  }

  .card {
    display: block;
    width: 100%;
    height: 500px;
    padding: 10px;
    border: none;
    border-radius: 10px;
    transition: 0.5s ease-in-out all;

    &:hover {
      box-shadow: 0 1px 10px rgba(32, 178, 170, 0.5);
    }
  }

  .cardTitle {
    h2 {
      font-size: 25px;
      font-weight: 500;
      padding-left: 10px;
    }
  }

  .blogImageContainer {
    display: block;
    height: 220px;
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
    margin-bottom: 50px;

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
        transition: 0.5s ease-in-out all;
        box-shadow: 0 1px 5px rgba(0, 155, 147, 0.5);

        &:hover {
          background-color: #009b93;
          box-shadow: 0 1px 10px rgba(0, 155, 147, 0.8);
        }
      }
    }
  }

  .readme {
    display: block;
    margin-left: auto;
    width: max-content;

    a {
      background-color: aquamarine;
      padding: 5px 10px;
      text-decoration: none;
      color: black;
      border: none;
      border-radius: 5px;
      box-shadow: 0px 2px 5px rgba(32, 178, 170, 0.3);
      transition: 0.5s ease-in-out all;

      &:hover {
        color: aliceblue;
        background-color: #039766;
        box-shadow: 0px 2px 5px rgba(32, 178, 170, 0.7);
      }
    }
  }

  @media (max-width: 960px) {
    .cardContainer {
      margin: 40px 60px;
    }

    .card {
      height: max-content;
    }

    .blogImageContainer {
      height: auto;
    }

    .blogs {
      grid-template-columns: 1fr;
    }

    .readme {
      padding-bottom: 10px;
    }
  }

  @media (max-width: 420px) {
    .cardContainer {
      margin: 15px 30px;
    }
  }
`

export default BlogsSectionWrapper
