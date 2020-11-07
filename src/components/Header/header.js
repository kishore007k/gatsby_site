import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Image from "../image"
import HeaderWrapper from "./header.style"
import { AiOutlineMenuFold, AiOutlineClose } from "react-icons/ai"

const Header = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "logo.svg" }) {
        publicURL
      }
    }
  `)

  const [scroll, setScroll] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", () =>
      window.pageYOffset > 150 ? setScroll(true) : setScroll(false)
    )
  }, [])

  const [active, setActive] = useState(false)
  const [Inactive, setInactive] = useState(true)
  const toggleActive = () => {
    if (active) {
      setActive(false)
      setInactive(true)
    } else {
      setActive(true)
      setInactive(false)
    }
  }
  return (
    <HeaderWrapper>
      <div className={`header ${scroll ? "scrolled" : ""}`}>
        <div className="container">
          <div>
            <h1 className={`logo ${scroll ? "afterScroll" : ""}`}>
              <Link to="/">
                <Image fluid={data.file.publicURL} />
              </Link>
            </h1>
          </div>
          <div>
            <button onClick={toggleActive} className="toggleBar">
              {Inactive ? <AiOutlineMenuFold /> : <AiOutlineClose />}
            </button>
          </div>
          <div className={active ? "closed" : "navBar"}>
            <nav className="nav">
              <ul className="navList">
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
            </nav>
          </div>
        </div>
      </div>
    </HeaderWrapper>
  )
}

export default Header
