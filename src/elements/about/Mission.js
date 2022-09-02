import React from 'react';
import Typed from 'react-typed';
// // import {Link} from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import AccordionOne from '../accordion/AccordionOne';

const mission = () => {
    return (
        <div className="rn-company-mission-are rn-section-gap">
            <div className="container">
                <div className="row row--30">
                    <div className="col-lg-6">
                        <div className="mission-title">
                            <h2 className="title">Our Mission <br /> {" "}
                                <Typed className="theme-gradient"
                                    strings={[
                                        "Innovate.",
                                        "Design.",
                                        "Develop.",
                                    ]}
                                    typeSpeed={80}
                                    backSpeed={5}
                                    backDelay={1000}
                                    loop
                                />
                            </h2>
                            <p>Our mission is to ease the process of having a brand website that can catch attention. We succeed when our clients are satisfied and love our work. </p>

                            <p>We dream to make JSG Developers go-to company for any brands to grow their business or make an impact among its customers. we hire best team of developers & designers to make dream come true</p>

                            <div className="read-more-btn mt--50">
                                <a className="btn-default btn-icon" href="/contact">Learn More <i className="icon"><FiArrowRight /></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mt_md--30 mt_sm--30">
                        <AccordionOne customStyle="" />
                    </div>
                </div>
            </div>                        
        </div>
    )
}
export default mission;
