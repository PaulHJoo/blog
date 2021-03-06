import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

import "./post-list.scss";

const PostCard = ({ frontmatter }) => {
    const { excerpt, title, path, featureImage } = frontmatter;
    const { sizes } = featureImage.childImageSharp;
    return (
        <div className="margin-b-50">
            <div className="margin-b-10 text-center">
                <div className="display-inline-block hover-border padding-10">
                    <Link to={path} className="text-no-decor text-m text-light margin-t-zero">
                        {title}
                    </Link>
                </div>
            </div>
            <Link to={path}>
                <Img sizes={sizes} />
            </Link>
            <div className="reading-text">
                <p>
                    {excerpt}
                    <Link to={path} className="margin-l-5 text-no-decor text-bold hover-bottom-border">
                        Read More
                </Link>
                </p>
            </div>
        </div>
    );
}

export default PostCard;