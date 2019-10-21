import React from "react"
// import { Link } from "gatsby"
import { graphql, Link } from "gatsby"

import Layout from "../components/Layout"
import BlogFeed from "../components/BlogFeed"

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter((edge, i) => (!!edge.node.frontmatter.date && i>=1))
    .map(edge => <BlogFeed key={edge.node.id} post={edge.node} />)

  return (
    <Layout wrap="page_index">
      <div className="container">
        <div className="section">
          <div className="row">
            {Posts}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___date] }, limit: 7) {
      edges {
        node {
          id
          excerpt(pruneLength: 100)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 1280) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`