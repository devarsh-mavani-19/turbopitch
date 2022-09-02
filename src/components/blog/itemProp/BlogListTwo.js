import React from 'react';
import {slugify} from "../../../utils";
import PropTypes from "prop-types";
// import {Link} from "react-router-dom";

const BlogListTwo = ({ data, StyleVar }) => {
    const cate = data.categories.map((value, i) => {
        return (
            <a href={process.env.PUBLIC_URL + `/category/${slugify(value)}`} key={i}>{value}{i !== data.categories.length - 1 && ","}</a>
        )
    });
    
    return (
        <div className={`rn-card ${StyleVar}`}>
            <div className="inner">
                <div className="thumbnail">
                    <a href={`/blog-details/${data.id}`} className="image">
                        <img src={`/${data.image}`} alt="Blog Image" />
                    </a>
                </div>
                <div className="content">
                    <h4 className="title">
                        <a href={`/blog-details/${data.id}`}>
                            {data.title}
                        </a>
                    </h4>
                    <ul className="rn-meta-list">
                        <li><a>{data.author}</a></li>
                        {/* <li><a href={`/archive/${slugify(data.author)}`}>{data.author}</a></li> */}
                        <li className="separator">/</li>
                        <li>{data.date}</li>
                    </ul>
                    <p className="descriptiion">{data.excerpt}</p>
                </div>
            </div>
        </div>
    )
}
BlogListTwo.propTypes = {
    data: PropTypes.object
};
export default BlogListTwo;
