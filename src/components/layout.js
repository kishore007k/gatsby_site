import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header/header"
import "./layout.css"

import styled from "styled-components"

const Wrapper = styled.div`
  max-width: 1140px;
  min-height: 100vh;
  display: block;
  padding-top: 100px;
  margin: auto;
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
    </Wrapper>
  )
}

export default Layout
