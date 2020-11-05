import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Blogs from "../components/Blogs/Blogs"
import styled from "styled-components"

const Wrapper = styled.div`
  max-width: 1300px;
  margin: auto;
  height: auto;
`

const BlogsPage = () => {
  return (
    <Layout>
      <SEO title="Blogs" />
      <Wrapper>
        <Blogs />
      </Wrapper>
    </Layout>
  )
}

export default BlogsPage
