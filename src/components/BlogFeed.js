import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Img from "gatsby-image"

function BlogFeed({ post }){
  return (
    <div className="col s12 m6 l4">
      <div className="card small">
        <div className="card-image">
          {/* <img src={post.frontmatter.featuredImage.childImageSharp.fluid.src} /> */}
          <Img fluid={post.frontmatter.featuredImage.childImageSharp.fluid} />
          <span className="card-title">{post.frontmatter.title}</span>
        </div>
        <div className="card-content">
          <p>{post.excerpt}</p>
        </div>
        <div className="card-action">
          <Link to={post.frontmatter.path}>This is a link</Link>
        </div>
      </div>
    </div>
  );
}

export default BlogFeed;