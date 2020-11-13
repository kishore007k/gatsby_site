const { createFilePath } = require("gatsby-source-filesystem")

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === "Mdx") {
    const value = createFilePath({ node, getNode })

    const collection = getNode(node.parent).sourceInstanceName

    let slug = ""

    if (collection === `posts`) {
      slug = `/blogs${value}`
    } else if (collection === `projects`) {
      slug = `/projects/${value}`
    } else {
      slug = `/${collection}/${value}`
    }

    createNodeField({
      name: "collection",
      node,
      value: collection,
    })

    createNodeField({
      name: `slug`,
      node,
      value: slug,
    })
  }
}

const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  // Destructure the createPage function from the actions object
  const blogPost = path.resolve(`src/templates/singleBlog.js`)
  const ProjectPost = path.resolve(`src/templates/singleProject.js`)

  const { createPage } = actions
  const result = await graphql(`
    {
      allBlogs: allMdx(filter: { fields: { collection: { eq: "posts" } } }) {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }

      allProjects: allMdx(
        filter: { fields: { collection: { eq: "projects" } } }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  // Create blog post pages.
  const posts = result.data.allBlogs.edges
  const projects = result.data.allProjects.edges
  // you'll call `createPage` for each result
  posts.forEach(({ node }) => {
    createPage({
      // This is the slug you created before
      // (or `node.frontmatter.slug`)
      path: node.fields.slug,
      // This component will wrap our MDX content
      component: blogPost,
      // You can use the values in this context in
      // our page layout component
      context: { id: node.id },
    })
  })

  projects.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: ProjectPost,
      context: { id: node.id },
    })
  })
}
