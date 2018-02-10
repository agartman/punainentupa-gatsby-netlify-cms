import React from 'react';
import graphql from 'graphql';
import Helmet from 'react-helmet';
import Content, { HTMLContent } from '../components/Content';
import Link from 'gatsby-link';

export const BlogPostTemplate = ({
  content, contentComponent, description, title, helmet,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section className="section">
      {helmet || ''}
      <div className="container">
        <div className="ribbon l-box-lrg pure-g">
          <div className="pure-u-1 blog-ribbon-container">
            <h1 className="splash-head borderless is-center">{title}</h1>
          </div>
        </div>
        <div className="blog-post-container chapter">
          <p>{description}</p>
          <PostContent content={content} />

          <Link className="pure-button" to="/blog">
            Back to blog list
                </Link>
        </div>
      </div>
    </section>
  );
};

export default ({ data }) => {
  const { markdownRemark: post } = data;

  return (<BlogPostTemplate
    content={post.html}
    contentComponent={HTMLContent}
    description={post.frontmatter.description}
    helmet={<Helmet title={`Blog | ${post.frontmatter.title}`} />}
    title={post.frontmatter.title}
  />);
};

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        date(formatString: "MMMM DD, YYYY")
        title
        description
      }
    }
  }
`;
