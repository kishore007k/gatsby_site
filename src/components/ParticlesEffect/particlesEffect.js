import React from "react"
import Particles from "react-particles-js"
import { ParticleThree } from "./Modes/ParticleType"
import ParticlesWrapper from "./particlesWrapper.style"

export default () => {
  return (
    <ParticlesWrapper>
      <Particles params={ParticleThree} />
    </ParticlesWrapper>
  )
}
