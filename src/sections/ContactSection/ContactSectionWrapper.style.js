import styled from "styled-components"

const ContactSectionWrapper = styled.section`
  display: block;
  max-width: 700px;
  margin: 0px auto 200px auto;
  height: 100%;

  .title {
    color: lightseagreen;
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 50px;
  }

  .contactPage {
    display: block;
    width: 100%;
    height: auto;
    background-color: aliceblue;
    padding: 10px 30px;
    border: none;
    border-radius: 5px;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  }

  .contactForm {
    text-align: center;
    h3 {
      color: darkturquoise;
      margin-bottom: 40px;
    }
  }

  .formGroup {
    display: flex;
    width: 100%;
    margin-bottom: 30px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .formControl {
    display: flex;
    width: 100%;
    padding: 10px 30px;
    margin-bottom: 30px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: none;
    border-style: none;
    border-radius: 5px;
    text-transform: uppercase;
    color: lightseagreen;
  }

  .submitBtn {
    display: block;
    margin: auto;
    width: fit-content;
    height: auto;
    padding: 10px 20px;
    border: none;
    border-radius: 10px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
    background-color: aliceblue;
    color: lightseagreen;
    text-transform: capitalize;
    font-size: 20px;
    font-weight: 500;
    cursor: pointer;
    transition: 0.5s ease-in all;

    &:hover {
      color: aliceblue;
      background-color: lightseagreen;
      box-shadow: 0px 5px 10px lightseagreen;
    }
  }
`

export default ContactSectionWrapper
