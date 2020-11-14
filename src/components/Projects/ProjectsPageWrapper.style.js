import styled from "styled-components"

const ProjectsPageWrapper = styled.section`
  display: block;
  max-width: 1300px;
  height: auto;
  margin: 200px auto;

  .sectionTitle {
    text-align: center;
    color: lightseagreen;
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 150px;
  }

  .cardContainer {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }

  .card {
    display: block;
    width: 100%;
    height: auto;
    border: none;
    border-radius: 5px;
    padding: 10px;
    background-color: aliceblue;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  }

  .title {
    color: #3d3d3d;
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    padding: 20px 0px 10px 0px;
  }

  .categoryAndDate {
    display: flex;
    width: 100%;
    height: auto;
    justify-content: space-between;
    align-items: center;
  }

  .category {
    display: block;
    width: 100%;
    height: auto;

    pre {
      font-weight: 600;
      font-size: 15px;
      padding: 5px;
      background-color: lightblue;
      width: fit-content;
      padding: 5px 10px;
      box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
    }
  }

  .date {
    font-size: 15px;
    font-weight: 600;
  }

  .flags {
    display: flex;
    width: 100%;
    height: auto;
    justify-content: space-evenly;
    align-items: center;

    pre {
      padding: 5px 10px;
      background-color: lightgrey;
      box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    }
  }

  .linkAndReadme {
    display: flex;
    width: 100%;
    height: auto;
    justify-content: space-between;
    align-items: center;
  }

  .links {
    display: flex;
    width: fit-content;
    height: inherit;
  }

  .githubBtn,
  .externalBtn {
    display: block;
    border: none;
    border-radius: 50%;
    outline: none;
    padding: 10px;
    font-size: 30px;
    background-color: transparent;
    transition: 0.5s ease-in-out all;
    margin-right: 10px;

    a {
      color: lightseagreen;
      transition: 0.5s ease-in-out all;
    }

    &:hover {
      background-color: lightseagreen;

      a {
        color: aliceblue;
      }
    }
  }

  .readmeBtn {
    display: block;
    width: fit-content;
    height: auto;
    border: none;
    border-radius: 5px;
    outline: none;
    background-color: darkturquoise;
    padding: 5px 10px;
    font-size: 20px;
    font-weight: 500;
    cursor: pointer;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    transition: 0.5s ease-in-out all;

    &:hover {
      background-color: #21adaf;
      box-shadow: 0px 5px 10px rgba(33, 173, 175, 0.5);
    }

    a {
      color: #000;
      text-decoration: none;
      transition: 0.5s ease-in-out all;

      &:hover {
        color: aliceblue;
      }
    }
  }

  @media (max-width: 1200px) {
    margin: 100px auto 200px auto;

    .cardContainer {
      grid-template-columns: 1fr;
      margin: 40px 20px;
    }
  }
`

export default ProjectsPageWrapper
