import styled from "styled-components"

const ContactFormWrapper = styled.section`
  display: block;
  max-width: 700px;
  margin: auto;

  p {
    margin-bottom: 20px;
  }

  form {
    display: block;
    width: 100%;
    margin-top: 50px;
  }

  .name {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }

  label {
    color: #1ebda2;
    font-size: 20px;
    font-weight: 600;
  }

  input {
    font-weight: 300;
    font-size: 16px;
    margin-left: 20px;
    border: 1px solid #a7a7a7;
    outline: none;
    padding: 5px;
    border-radius: 2px;
  }

  .email {
    display: block;
    width: 100%;
  }

  textarea {
    margin-bottom: 50px;
  }

  .sendBtn {
    display: block;
    width: auto;
    margin: auto;
    background-color: lightskyblue;
    border: none;
    border-radius: 2px;
    outline: none;
    padding: 5px 10px;
    font-size: 20px;
    font-weight: 500;
    color: aliceblue;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2);
    transition: 0.5s ease-in-out all;
    cursor: pointer;

    &:hover {
      box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.5);
    }
  }

  @media (max-width: 720px) {
    .name {
      display: block;
    }
  }
`

export default ContactFormWrapper
