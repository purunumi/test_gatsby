import React from "react"
// import { Link } from "gatsby"
import { graphql, Link } from "gatsby"

import Layout from "../components/Layout"
// import Image from "../components/Image"
import SEO from "../components/SEO"
import BlogFeed from "../components/BlogFeed"
import PortfolioFeed from "../components/PortfolioFeed"

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter((edge, i) => (!!edge.node.frontmatter.date && i>=1))
    .map(edge => <BlogFeed key={edge.node.id} post={edge.node} />)
  console.log(edges[0].node.frontmatter.featuredImage.childImageSharp.fluid);
  return (
    <Layout wrap="page_index">
      <SEO title="Home" />

      <Link to={edges[0].node.frontmatter.path} className="recent-post container">
        <div className="cover" style={{ backgroundImage: `url('${edges[0].node.frontmatter.featuredImage.childImageSharp.fluid.src}')` }} />
        <div className="row">
          <div className="content col s12 m7 l6">
            <div className="card-panel">
              <h1 className="h5">{edges[0].node.frontmatter.title}</h1>
              <p className="description">{edges[0].node.excerpt}</p>
            </div>
          </div>
        </div>
      </Link>

      <div className="container">
        <div className="section">
          <div className="row">
            {Posts}
          </div>
        </div>

        <div className="section">
          <PortfolioFeed />
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