import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiChevronRight, FiMapPin, FiPhone } from "react-icons/fi";
// import { Link } from 'react-router-dom'

const HeaderTopBar = () => {
    return (
        <div className="header-top-bar">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 col-md-12 col-12">
                        <div className="header-left">
                            <p><a href="#link">Get the most advanced template <FiChevronRight /></a></p>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-12 col-12">
                        <div className="header-right">
                            <div className="address-content">
                                <p><FiMapPin /><span>Alabama, USA</span></p>
                                <p><FiPhone /><span><a href="#">+06 58 49 99 56</a></span></p>
                            </div>
                            <div className="social-icon-wrapper">
                                <ul className="social-icon social-default icon-naked">
                                    <li><a href="twitter.com"><FiFacebook /></a></li>
                                    <li><a href="twitter.com"><FiTwitter /></a></li>
                                    <li><a href="instagram.com"><FiInstagram /></a></li>
                                    <li><a href="linkdin.com"><FiLinkedin /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderTopBar;
