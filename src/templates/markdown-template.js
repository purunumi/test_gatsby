import React from 'react';
import {graphql} from 'gatsby';

export default function Template({data}){
  const {markdownRemark: {frontmatter, html}} = data;

  return (
    <div>
      <h1>{frontmatter.title}</h1>
      <h2>{frontmatter.data}</h2>
      <div dangerouslySetInnerHTML = {{__html: html}} />
    </div>
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
      }
    }
  }
`;