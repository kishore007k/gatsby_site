import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const NavbarWrapper = styled.nav`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  float: right;

  .nav-list {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
    float: right;

    li {
      padding: 20px;
      list-style: none;
      margin: 0;

      a {
        text-decoration: none;
        font-weight: 500;
        color: aliceblue;
        border: none;
        border-radius: 5px;
        padding: 8px;
        transition: 0.5s ease-in-out all;

        &:hover {
          color: rebeccapurple;
          background-color: white;
        }
      }
    }
  }
`

const DesktopNavbar = () => {
  return (
    <NavbarWrapper>
      <ul className="nav-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/blogs">Blogs</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </NavbarWrapper>
  )
}

export default DesktopNavbar
