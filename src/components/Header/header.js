import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Image from "../image"
import DesktopNavbar from "../DesktopNav/DesktopNavbar"
import MobileNavbar from "../MobileNav/MobileNavbar"
import useWindowsDimensions from "./useWindowDimensions"

const HeaderWrapper = styled.header`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: rebeccapurple;
  height: 70px;

  .logo {
    width: 60px;
    height: auto;
  }
`

const Header = () => {
  const data = useStaticQuery(graphql`
    {
      file {
        childImageSharp {
          fluid {
            src
          }
        }
      }
    }
  `)
  const { width } = useWindowsDimensions()
  return (
    <HeaderWrapper>
      <header>
        <div>
          <h1 className="logo">
            <Link to="/">
              <Image fluid={data.file.childImageSharp.fluid} />
            </Link>
          </h1>
        </div>
        {width <= `960` ? <MobileNavbar /> : <DesktopNavbar />}
      </header>
    </HeaderWrapper>
  )
}

export default Header
