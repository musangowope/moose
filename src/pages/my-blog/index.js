import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import BlogPostPreview from "../../components/BlogPostPreview";

const MyBlog = props => {
  const { data } = props;
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <Layout>
      <div className="generic-content">
        <div className="generic-content__title">Latest Blog Posts</div>
        <br />
        <div className="columns is-multiline">
          {posts.map(({ node: post }, key) => (
            <div className="column is-half-desktop is-full-mobile">
              <BlogPostPreview
                key={key}
                blogImage={post.frontmatter.image.publicURL}
                link={post.fields.slug}
                title={post.frontmatter.title}
                date={post.frontmatter.date}
                excerpt={post.excerpt}
              />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

MyBlog.propTypes = {};
MyBlog.defaultProps = {};

export default MyBlog;

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 100)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            image {
              id
              publicURL
            }
          }
        }
      }
    }
  }
`;
