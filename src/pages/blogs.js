import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Blogs from "../components/Blogs/Blogs"

const BlogsPage = () => {
  return (
    <Layout>
      <SEO title="Blogs" />
      <Blogs />
    </Layout>
  )
}

export default BlogsPage
