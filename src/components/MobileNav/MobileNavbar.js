import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { AiOutlineMenuFold, AiOutlineClose } from "react-icons/ai"

const NavbarWrapper = styled.nav`
  .navBar {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    background-color: aliceblue;
    height: 100vh;
  }

  .open {
    display: none;
    left: 100%;
  }

  .toggleBar {
    display: block;
    position: absolute;
    top: 15px;
    right: 10px;
    border: none;
    outline: none;
    border-radius: 50%;
    align-items: center;
    background-color: aliceblue;
    color: rebeccapurple;
    font-size: 30px;
    padding: 5px;
    z-index: 100;
    transition: 0.5s ease-in-out all;
  }

  .nav-list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;

    li {
      list-style: none;
      margin: 20px;

      a {
        text-decoration: none;
        color: rebeccapurple;
        padding: 5px;
        border: none;
        border-radius: 5px;
        font-size: 40px;
        transition: 0.5s ease-in-out all;

        &:hover {
          color: aliceblue;
          background-color: rebeccapurple;
        }
      }
    }
  }
`

const MobileNavbar = () => {
  const [active, setActive] = useState(false)
  const [Inactive, setInactive] = useState(true)

  const toggleMenu = () => {
    if (active) {
      setActive(false)
      setInactive(true)
    } else {
      setActive(true)
      setInactive(false)
    }
  }
  return (
    <NavbarWrapper>
      <button onClick={toggleMenu} className="toggleBar">
        {active ? <AiOutlineClose /> : <AiOutlineMenuFold />}
      </button>
      <div className={Inactive ? "navBar" : "navBar open"}>
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
      </div>
    </NavbarWrapper>
  )
}

export default MobileNavbar
