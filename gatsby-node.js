/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)
const slugify = require("./src/components/utils/slugify")
const { paginate } = require("gatsby-awesome-pagination")

// Replacing '/' would result in empty string which is invalid
const replacePath = path => (path === `/` ? path : path.replace(/\/$/, ``))

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blogs.js`)

  const result = await graphql`
    {
      allPosts: allMdx(filter: { frontmatter: { published: { eq: true } } }) {
        nodes {
          id
          slug
          frontmatter {
            title
            subtitle
            description
            date
            category
            thumbnail {
              publicURL
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const allNodes = result.data.allPosts.nodes

  const blogs = allNodes.filter(node => node.frontmatter.published === true)

  paginate({
    createPage,
    items: blogs,
    itemsPerPage: 8,
    pathPrefix: `/blog`,
    component: blogViewTemplate,
  })

  blogs.forEach(blog => {
    createPage({
      path: blog.frontmatter.slug,
      component: blogPostTemplate,
      context: {
        slug: blog.frontmatter.slug,
      },
    })
  })

  const BlogTags = res.data.blogTags.group
  BlogTags.forEach(tag => {
    paginate({
      createPage,
      items: tag.nodes,
      itemsPerPage: 4,
      pathPrefix: `/blog/tag/${slugify(tag.fieldValue)}`,
      component: blogListTemplate,
      context: {
        tag: tag.fieldValue,
      },
    })
  })
}
