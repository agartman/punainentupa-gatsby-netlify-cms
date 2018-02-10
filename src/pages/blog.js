import React from 'react';
import Link from 'gatsby-link';
import Script from 'react-load-script';
import graphql from 'graphql';
import Splash from '../components/Splash'

export default class BlogPostsPage extends React.Component {

  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <section className="section">

        <div className="container">
        <div className="ribbon l-box-lrg pure-g">
        <div className="pure-u-1 blog-ribbon-container">
          <h1 className="splash-head borderless is-center">Recent blog posts</h1>
        </div>
      </div>          
          {posts.filter(post => post.node.frontmatter.templateKey === 'blog-post').map(({ node: post }) => (
            <div className="content" key={post.id}>
              <p>
                <h2 className="post-title"><Link className="has-text-primary" to={post.frontmatter.path}>
                  {post.frontmatter.title}
                </Link></h2>
                <small>{post.frontmatter.date}</small>
              </p>
              <p>
              <div className="chapter">

                {post.excerpt}
</div>
<br/>
                <Link className="pure-button" to={post.frontmatter.path}>
                  Keep Reading →
                </Link>
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`;
