import styled from "styled-components"

const ContactFormWrapper = styled.section`
  display: block;
  max-width: 700px;
  margin: 0px auto 50px auto;
  height: 100%;

  .contactPage {
    display: block;
    width: 100%;
    height: auto;
    background-color: aliceblue;
    padding: 10px;
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
    padding: 10px;
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
`

export default ContactFormWrapper
