import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from 'styled-components'

const HeaderContainer = styled.header`
  margin-bottom: 2rem;

  @media screen and (max-width: 600px){
    margin-bottom: 0.8rem;
  }
`

const NavBar = styled.div`
  margin: 0 auto;
  max-width: 1300px;
  padding: 2rem 2rem;
  display: flex;

  @media screen and (max-width: 600px){
    padding: 1.5rem 2rem;
  }
`
const TitleLink = styled(Link)`
  color: black;
  text-decoration: none;
`
const NavLink = styled(Link)`
  margin-left: auto;
  color: darkgray;
  text-decoration: none;
`

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <NavBar>
      <h2 style={{ margin: 0 }}>
        <TitleLink to="/">
          {siteTitle}
        </TitleLink>
      </h2>
      <NavLink to="/blog/">BLOG</NavLink>
    </NavBar>
  </HeaderContainer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
