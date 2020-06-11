const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`)

// invoked when new node created (build step)
exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions
    // dynamically create file path > add to node
    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode })
        
        createNodeField({
            node,
            name: `slug`,
            value: slug
        })
    }
}

// create pages with query data
exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    
    // graphql query markdown > loop markdown node(file) > createPage(using blog-post.js)
    return graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }      
    `).then(result => 
        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
            createPage({
                // build pages with prop obj
                path: node.fields.slug,
                component: path.resolve(`./src/templates/blog-post.js`),
                context: {
                    slug: node.fields.slug
                }   // pass actual slug value to blog-post.js
            })
        })
    )
}