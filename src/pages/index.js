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
  color: darkblue;
`
const ImgContainer = styled.div`
  margin-bottom: 3rem;
  width: 100%;
  height: 250px;
  overflow: hidden;  

  @media screen and (max-width: 600px){
    height: 150px;
    overflow: hidden;
  }
`

export default ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div>
      <ImgContainer>
        <Image />
      </ImgContainer>
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
