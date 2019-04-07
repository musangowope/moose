import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import { Link } from "gatsby";
import { Card, CardContent, CardImage, Content } from "bloomer";

const BlogPostPreview = ({ blogImage, link, title, date, excerpt, key }) => (
  <Fragment>
    <Card className="blog-post-preview" key={key}>
      <CardImage className="blog-post-preview__image">
        <Img fluid={blogImage} />
      </CardImage>
      <CardContent className="blog-post-preview__content">
        <Content>
          <Link className="blog-post-preview__link" to={link}>
            {title}
          </Link>

          <div className="blog-post-preview__date">{date}</div>

          <div className="blog-post-preview__excerpt">{excerpt}</div>

          <br />

          <div className="blog-post-preview__footer has-text-right">
            <Link className="blog-post-preview__footer__button" to={link}>
              Keep Reading
            </Link>
          </div>
        </Content>
      </CardContent>
    </Card>
    <br />
  </Fragment>
);

BlogPostPreview.propTypes = {
  blogImage: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  link: PropTypes.string,
  excerpt: PropTypes.string
};
BlogPostPreview.defaultProps = {};

export default BlogPostPreview;
