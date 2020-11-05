import styled, { keyframes } from "styled-components"

const RotationAnimation = keyframes`
  0% {transform: rotate(0deg);}
  100% {transform: rotate(360deg);}
`

const FooterWrapper = styled.footer`
  display: block;
  position: relative;
  bottom: 0;
  right: 0;
  height: max-content;
  width: 100%;
  background-color: #f7fdff;
  text-align: center;
  box-shadow: 1px 0px 5px rgba(0, 0, 0, 0.1);
  z-index: 1;

  h3 {
    color: lightseagreen;
    font-size: 20px;
    font-weight: 500;
  }

  span {
    color: crimson;
    animation: ${RotationAnimation} 5s linear infinite;
  }

  strong {
    font-weight: 500;
  }

  h4 {
    padding-top: 20px;
    font-size: 25px;
    color: lightseagreen;
    font-weight: 400;
  }

  p {
    color: lightseagreen;
    padding-bottom: 10px;
    margin-bottom: 0px;
  }
`

export default FooterWrapper
