import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header/header"
import "./layout.css"

import styled from "styled-components"
import Footer from "./Footer/footer"

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #e8faff;

  main {
    display: block;
    height: auto;
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
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </Wrapper>
  )
}

export default Layout
