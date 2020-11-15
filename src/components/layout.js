import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./Header/header"
import "./layout.css"
import styled from "styled-components"
import Footer from "./Footer/footer"
import favicon from "../images/favicon.ico"
import Helmet from "react-helmet"

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #f0fcff;

  main {
    display: block;
    min-height: 100vh;
    position: relative;
    width: 100%;
    margin: auto;
    overflow: hidden;
    z-index: 1;
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Wrapper>
      <Helmet>
        <link rel="icon" href={favicon} />
      </Helmet>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </Wrapper>
  )
}

export default Layout
