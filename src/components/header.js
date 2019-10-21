// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Link, navigate } from "gatsby"
import {Navbar, NavItem} from "react-materialize"


const Header = ({ siteTitle }) => (
  <Navbar
    brand={<Link to='/'>{siteTitle}</Link>}
    alignLinks="right"
    sidenav={
      <>
        <li><Link to='/blog/'>Getting started</Link></li>
        <li><Link to='/portfolio/'>Components</Link></li>
      </>
    }
    className="page-header"
  >
    <NavItem onClick={() => navigate('/blog/')}>Blog</NavItem>
    <NavItem onClick={() => navigate('/portfolio/')}>Portfolio</NavItem>
  </Navbar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
