import styled, { keyframes } from "styled-components"

const RotationAnimation = keyframes`
  transform:rotate(360deg)
`

const FooterWrapper = styled.footer`
  display: block;
  position: relative;
  bottom: 0;
  right: 0;
  height: max-content;
  width: 100%;
  background-color: #fdfdfd;
  text-align: center;
  z-index: 1;

  h3 {
    color: #1090b8;
    font-size: 20px;
    font-weight: 500;
  }

  span {
    color: crimson;
    animation-name: ${RotationAnimation};
    animation-duration: 5s;
    animation-iteration-count: infinite;
  }

  strong {
    font-weight: 500;
  }

  h4 {
    padding-top: 20px;
    font-size: 25px;
    color: #1090b8;
    font-weight: 400;
  }

  p {
    color: #1090b8;
    padding-bottom: 10px;
  }
`

export default FooterWrapper
