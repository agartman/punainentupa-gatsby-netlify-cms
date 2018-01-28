const path = require('path');

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  return graphql(`
    {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000) {
        edges {
          node {
            excerpt(pruneLength: 400)
            html
            id
            frontmatter {
              templateKey
              path
              date
              title
              description
              
              main {
                heading
                description
                image1 {
                  alt
                  image
                }
                image2 {
                  alt
                  image
                }
                image3 {
                  alt
                  image
                }
              }
              
            }
          }
        }
      }
    }
  `).then((result) => {
      if (result.errors) {
        result.errors.forEach(e => console.error(e.toString()));
        return Promise.reject(result.errors);
      }

      return result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.frontmatter.path,
          component: path.resolve(`src/templates/${String(node.frontmatter.templateKey)}.js`),
          context: {}, // additional data can be passed via context
        });
      });
    });
};
