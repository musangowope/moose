import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import BackgroundIcons from "../components/BackgroundIcons";
import { MooseAtWork } from "./image-constants";

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      webDisplayIndex: 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setWebIndex(), 3000);
  }

  componentWillMount() {
    clearInterval(this.interval);
  }

  setWebIndex = () => {
    if (this.state.webDisplayIndex >= 2) {
      this.setState({ webDisplayIndex: 0 });
    } else {
      this.setState(prevState => ({
        webDisplayIndex: prevState.webDisplayIndex + 1
      }));
    }
  };

  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <Layout>
        <div className="landing-page">
          <BackgroundIcons />
          <div className="landing-page__content">
            <div className="landing-page__content__thinking-bubble">
              <div className="landing-page__content__thinking-bubble__text">
                {this.state.webDisplayIndex === 0 && (
                  <div className="animated fadeIn">HTML</div>
                )}
                {this.state.webDisplayIndex === 1 && (
                  <div className="animated fadeIn">CSS</div>
                )}
                {this.state.webDisplayIndex === 2 && (
                  <div className="animated fadeIn">Javascript</div>
                )}
              </div>
            </div>
            <img
              src={MooseAtWork}
              className="landing-page__content__working-image"
            />
          </div>
        </div>

        {/*<section className="section">*/}
        {/*<div className="container">*/}
        {/*<div className="content">*/}
        {/*<h1 className="has-text-weight-bold is-size-2">Latest Stories</h1>*/}
        {/*</div>*/}
        {/*{posts*/}
        {/*.map(({ node: post }) => (*/}
        {/*<div*/}
        {/*className="content"*/}
        {/*style={{ border: '1px solid #333', padding: '2em 4em' }}*/}
        {/*key={post.id}*/}
        {/*>*/}
        {/*<p>*/}
        {/*<Link className="has-text-primary" to={post.fields.slug}>*/}
        {/*{post.frontmatter.title}*/}
        {/*</Link>*/}
        {/*<span> &bull; </span>*/}
        {/*<small>{post.frontmatter.date}</small>*/}
        {/*</p>*/}
        {/*<p>*/}
        {/*{post.excerpt}*/}
        {/*<br />*/}
        {/*<br />*/}
        {/*<Link className="button is-small" to={post.fields.slug}>*/}
        {/*Keep Reading →*/}
        {/*</Link>*/}
        {/*</p>*/}
        {/*</div>*/}
        {/*))}*/}
        {/*</div>*/}
        {/*</section>*/}
      </Layout>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
