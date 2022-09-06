import PropTypes from "prop-types";
import React from 'react';
// import {Link} from "react-router-dom";

const Logo = ({image, image2}) => {
    return(
        <div className="logo">
            <a href={"/"}>
                <img className="logo-light" src={image} alt="Corporate Logo"  />
                <img className="logo-dark" src={image2} alt="Corporate Logo"  />
            </a>
        </div>
    )
}
Logo.propTypes = {
    image: PropTypes.string
};

export default Logo;
