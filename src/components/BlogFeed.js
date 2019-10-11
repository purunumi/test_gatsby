import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

function BlogFeed({data}){
  // const {markdownRemark: {frontmatter, html}} = graphql`
  //   query($path: String!){
  //     markdownRemark(frontmatter: {path: {eq: $path}}){
  //       html
  //       frontmatter {
  //         date(formatString: "MMMM DD, YYYY")
  //         path
  //         title
  //       }
  //     }
  //   }
  // `;
  // post list: https://www.gatsbyjs.org/docs/adding-a-list-of-markdown-blog-posts/

  return (
    <div className="row">
      <div className="col s12 m6 l4">
        <div className="card small">
          <div className="card-image">
            <img src="https://placehold.it/640x700" />
            <span className="card-title">Consequat veniam commodo aliquip tempor cillum eu.</span>
          </div>
          <div className="card-content">
            <p>Eiusmod amet deserunt reprehenderit in.</p>
          </div>
          <div className="card-action">
            <a href="#!">This is a link</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogFeed;
// export const pageQuery = graphql`
//   query($path: String!){
//     markdownRemark(frontmatter: {path: {eq: $path}}){
//       html
//       frontmatter {
//         date(formatString: "MMMM DD, YYYY")
//         path
//         title
//       }
//     }
//   }
// `;