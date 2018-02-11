import React from 'react';
import graphql from 'graphql';
import Content, { HTMLContent } from '../components/Content';
import Link from 'gatsby-link';

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
      <div className="container">
        <div className="ribbon l-box-lrg pure-g">
          <div className="pure-u-1 blog-ribbon-container">
            <h1 className="splash-head borderless is-center">{title}</h1>
          </div>
        </div>
        <div className="blog-post-container">
          <PageContent content={content} />
          <Link className="pure-button" to="/">
            Back to front page
                </Link>
        </div>
      </div>
  );
};

export default ({ data }) => {
  const { markdownRemark: post } = data;

  return (<AboutPageTemplate
    contentComponent={HTMLContent}
    title={post.frontmatter.title}
    content={post.html}
  />);
};

export const aboutPageQuery = graphql`
  query AboutPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;
