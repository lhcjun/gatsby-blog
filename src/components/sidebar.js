import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from 'styled-components'


const SidebarContainer = styled.aside`
  margin: 0 0.75rem;
  padding-right: 1rem;
  display: block;
`
const SidebarTitle = styled.h4`
  white-space: nowrap;
`
const Widget = styled.div`
  border-bottom: 1px solid #ccc;
  font-size: 0.9rem;
`
const PostLink = styled(Link)`
  text-decoration: none;
`

const Sidebar = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields:[frontmatter___date], order: DESC }) {  # descending order
        edges {
          node {
            id
            frontmatter {
              date
              title
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return(
      <SidebarContainer>
        <SidebarTitle>RECENT POSTS</SidebarTitle>
        <Widget>
          {
            data.allMarkdownRemark.edges
              .filter(({ node }, idx) => idx < 4)
              .map(({ node }) => (
                <div key={node.id}>
                  <PostLink to={ node.fields.slug }>
                    <div>{ node.frontmatter.title }</div>
                  </PostLink>
                </div>
              ))
          }
        </Widget>     
      </SidebarContainer>
  )
}

export default Sidebar