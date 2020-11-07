import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import Image from "gatsby-image"
import styled from "styled-components"

const Wrapper = styled.div`
  max-width: 1300px;
  height: auto;
  margin: 200px auto 0px auto;

  .content {
    h1 {
      text-align: center;
    }

    h2 {
      text-align: start;
      font-weight: 500;
    }

    p {
      margin-bottom: 20px;
    }

    img {
      margin-top: 20px;
    }

    pre {
      code {
        font-size: 18px;
        font-weight: 300;
        background-color: transparent;
      }
    }

    strong {
      code {
        background-color: transparent;
      }
    }

    code {
      background-color: #ffb14a;
      padding: 2px 5px;
      font-weight: 600;
    }
  }

  p {
    margin-bottom: 10px;
  }

  a {
    font-weight: 500;
    text-decoration: none;
    color: rebeccapurple;
    transition: 0.5s ease-in-out all;

    &:hover {
      font-weight: 600;
    }
  }

  pre {
    display: block;
    width: 100%;
    height: 100%;
    padding: 20px;
    color: aliceblue;
    font-size: 20px;
    font-weight: 400;
    background-color: #333333;
    overflow-x: auto;
  }

  .imageContainer {
    display: block;
    width: 100%;
    height: auto;
    margin-bottom: 30px;
  }

  .cardContainer {
    display: block;
    width: 100%;
    height: auto;
    padding: 10px;
  }

  h1 {
    color: lightseagreen;
    text-align: center;
  }

  .dateAndCategory {
    display: flex;
    width: 100%;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  .dateAndTime {
    p {
      margin-bottom: 0;
    }
  }

  .category {
    code {
      display: block;
      background-color: lightblue;
      padding: 5px 10px;
      border: none;
      border-radius: 5px;
      font-size: 18px;
      font-weight: 600;
    }
  }

  @media (max-width: 720px) {
    margin: 50px auto 0px auto;
  }
`

const shortcodes = { Link } // Provide common components here

const SingleBlogPost = ({ data: { mdx } }) => {
  return (
    <Wrapper>
      <Helmet title={mdx.frontmatter.title} />
      <div className="imageContainer">
        <Image fluid={mdx.frontmatter.thumbnail.childImageSharp.fluid} />
      </div>
      <div className="cardContainer">
        <div>
          <h1 className="title">{mdx.frontmatter.title}</h1>
          {mdx.frontmatter.subtitle ? (
            <h3>{mdx.frontmatter.subtitle}</h3>
          ) : (
            <></>
          )}
        </div>
        <div className="dateAndCategory">
          <div className="dateAndTime">
            <p>Time to read: {mdx.timeToRead} minutes</p>
            <p>Date: {mdx.frontmatter.date}</p>
          </div>
          <div className="category">
            <code>{mdx.frontmatter.category}</code>
          </div>
        </div>
        <div className="content">
          <MDXProvider components={shortcodes}>
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </MDXProvider>
        </div>
      </div>
    </Wrapper>
  )
}

export default SingleBlogPost
