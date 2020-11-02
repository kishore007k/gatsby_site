import styled from "styled-components"

const ParticlesWrapper = styled.div`
  display: block;
  position: relative;
  min-height: 100vh;
  width: 100%;
  background-image: url("https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
  background-repeat: no-repeat;
  background-position: 50% 50%;
  filter: brightness(50%);
  z-index: 1;

  @media (min-width: 560px) {
    min-height: 100vh;
  }
`

export default ParticlesWrapper
