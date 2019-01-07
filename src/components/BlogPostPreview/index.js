import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import {
  Columns,
  Column,
  Card,
  CardContent,
  CardImage,
  Content,
  Image
} from "bloomer";

const BlogPostPreview = ({ blogImage, link, title, date, excerpt, key }) => (
  <Fragment>
    <Card className="blog-post-preview" key={key}>
      <CardImage className="blog-post-preview__image">
        <Image src={blogImage} />
      </CardImage>
      <CardContent>
        <Content>
          <Link className="blog-post-preview__link" to={link}>
            {title}
          </Link>

          <div className="blog-post-preview__date">
            {date}
          </div>


          <div className="blog-post-preview__excerpt">{excerpt}</div>

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
