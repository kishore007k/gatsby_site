import styled from "styled-components"

const FooterWrapper = styled.footer`
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
  height: auto;
  width: 100vw;
  background-color: aliceblue;
  text-align: center;
  z-index: 1;

  h3 {
    color: #323232;
    font-size: 20px;
    font-weight: 500;
  }

  span {
    color: crimson;
    animation: RotationAnimation 4s linear infinite;

    @keyframes RotationAnimation {
      from {
        transform: rotate(0deg);
      }

      to {
        transform: rotate(360deg);
      }
    }
  }

  strong {
    font-weight: 500;
  }

  h4 {
    padding-top: 20px;
    font-size: 25px;
    color: #323232;
    font-weight: 400;
  }

  p {
    padding-bottom: 10px;
  }
`

export default FooterWrapper
