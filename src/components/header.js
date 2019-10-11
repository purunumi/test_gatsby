// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {Navbar, NavItem} from "react-materialize"

const Header = ({ siteTitle }) => (
  <Navbar brand={<a href="#!">{siteTitle}</a>} alignLinks="right" sidenav={<li />}>
    <NavItem href="">
      Getting started
    </NavItem>
    <NavItem href="components.html">
      Components
    </NavItem>
  </Navbar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
