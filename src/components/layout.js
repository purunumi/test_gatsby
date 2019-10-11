/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "../assets/sass/common.scss"
import Header from "./Header"
import Tail from "./Tail"

const Layout = ({ children, wrap }) => {
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
      <div id="contents" className={wrap}>{children}</div>
      <Tail />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  wrap: PropTypes.string,
}

export default Layout
