import React from "react"
import { Link, graphql } from "gatsby"
import styled from 'styled-components'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const BlogLink = styled(Link)`
  text-decoration: none;
`
const BlogTitle = styled.h3`
  margin-bottom: 20px;
  color: blue;
`

export default ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div>
      <h1>My Thoughts</h1>
      <h4>{ data.allMarkdownRemark.totalCount }</h4>
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

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
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
