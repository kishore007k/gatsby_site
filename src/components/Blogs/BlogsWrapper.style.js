import styled from "styled-components"

const BlogPageWrapper = styled.section`
  .sectionTitle {
    text-align: center;
    margin-top: 200px;
    .title {
      font-size: 40px;
      font-weight: 700;
      color: lightseagreen;
      margin-bottom: 50px;
    }
  }

  .blogs {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    margin: 40px auto;
  }

  .cardContainer {
    margin-right: 20px;
  }

  .card {
    display: block;
    width: 100%;
    height: 650px;
    padding: 10px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    margin-bottom: 20px;
    box-shadow: 0 1px 5px rgba(10, 150, 143, 0.3);
    transition: 0.5s ease-in-out all;

    &:hover {
      box-shadow: 0 2px 10px rgba(32, 178, 170, 0.7);
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

  .blogImageContainer {
    display: block;
    margin-bottom: 10px;
    height: 380px;
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

  .published {
    display: block;
    text-transform: capitalize;
    background-color: aquamarine;
    width: fit-content;
    height: auto;
    border: none;
    border-radius: 5px;

    p {
      padding: 5px 10px;
    }
  }

  @media (max-width: 1024px) {
    .card {
      height: auto;
    }

    .blogImageContainer {
      height: 285px;
    }
  }
`

export default BlogPageWrapper
