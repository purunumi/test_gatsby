import React from 'react';
import {graphql} from 'gatsby';

import Layout from "../components/Layout"

export default function Template({data}){
  const {markdownRemark: {frontmatter, html}} = data;

  return (
    <Layout wrap="page_post-content">
      <div className="post-cover container">
        <div className="cover" style={{ backgroundImage: `url('${frontmatter.featuredImage.childImageSharp.fluid.src}')` }} />
        <div className="content row">
          <div className="col s12 m7 l6">
            <div className="card-panel">
              <h1 className="h5">{frontmatter.title}</h1>
              <p className="post-meta">
                <time>{frontmatter.data}</time>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div dangerouslySetInnerHTML = {{__html: html}} className="post-content container" />
    </Layout>
  );
};

export const pageQuery = graphql`
  query($path: String!){
    markdownRemark(frontmatter: {path: {eq: $path}}){
      html
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
`;