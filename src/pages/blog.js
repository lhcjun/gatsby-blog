import React from "react"
import { Link, graphql } from "gatsby"
import styled from 'styled-components'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Sidebar from '../components/sidebar'


const BlogLink = styled(Link)`
  text-decoration: none;
`
const BlogTitle = styled.h3`
  margin-bottom: 20px;
  color: darkblue;
`

const BlogPage = ({ data }) => (
  <Layout>
    <SEO title="Blog" />
    <div style={{ display: `flex` }}>
      <Sidebar />
      <div>
        <h4>{ data.allMarkdownRemark.totalCount } Posts</h4>
        {
          data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id}>
              <BlogLink to={ node.fields.slug }>
                <BlogTitle>{ node.frontmatter.title } - { node.frontmatter.date }</BlogTitle>
              </BlogLink>
              <p>{ node.excerpt }</p>
            </div>
          ))
        }
      </div>
    </div>
  </Layout>
)


export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields:[frontmatter___date], order: DESC }) {  # descending order
      totalCount
      edges {
        node {
          id
          frontmatter {
            description
            date
            title
          }
          html
          excerpt

          fields {
            slug
          }
        }
      }
    }
  }
`

export default BlogPage
