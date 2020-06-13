/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

import Header from "./header"
import "./layout.css"

const PageContainer = styled.div`
  margin: 0 auto;
  width: 80%;
  padding: 0 1.0875rem 1.45rem;

  @media screen and (max-width: 800px){
    width: 90%;
  }
`
const Footer = styled.footer`
  margin-top: 5rem;
  text-align: center
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <PageContainer>
        <main>{children}</main>
        <Footer>
          © {new Date().getFullYear()} JL. All rights reserved.
        </Footer>
      </PageContainer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
