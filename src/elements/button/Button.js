import React from 'react';
// import {Link} from "react-router-dom";
import { FiArrowRight , FiPlay } from "react-icons/fi";
import ScrollAnimation from "react-animate-on-scroll";
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import BreadcrumbOne from "../breadcrumb/BreadcrumbOne";
import SectionTitle from "../sectionTitle/SectionTitle";
import Separator from "../separator/Separator";


const Button = () => {
    return (
        <>
            <SEO title="Button || Doob - React Business  Template" />
            <Layout>
                <BreadcrumbOne 
                title="The Easiest Way To Create Website <br /> Quick Copy & Make site."
                rootUrl="/"
                parentUrl="Home"
                currentUrl="Button"
                />
                <div className="main-content">
                    {/* Start Elements Area  */}
                    <div className="rwt-button-area rn-section-gap">
                        <div className="container">
                            <div className="row row--30">
                                <div className="col-lg-6 col-md-6 col-12">
                                    <SectionTitle
                                        textAlign = "text-start"
                                        radiusRounded = ""
                                        subtitle = "Easily switchable"
                                        title = "Button Sizes"
                                        description = ""
                                    />

                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}
                                    className="button-group">
                                        <a className="btn-default btn-small" href="#">Button Solid</a>
                                    </ScrollAnimation>


                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}
                                    className="button-group mt--20">
                                        <a className="btn-default" href="#">Button Solid</a>
                                    </ScrollAnimation>

                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}
                                    className="button-group mt--20">
                                        <a className="btn-default btn-large" href="#">Button Solid</a>
                                    </ScrollAnimation>

                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}
                                    className="button-group mt--20">
                                        <a className="btn-default btn-extra-large" href="#">Button Solid</a>
                                    </ScrollAnimation>

                                </div>

                                <div className="col-lg-6 col-md-6 col-12 mt_sm--40">
                                    <SectionTitle
                                        textAlign = "text-start"
                                        radiusRounded = ""
                                        subtitle = "Include borders"
                                        title = "Outlined Buttons"
                                        description = ""
                                    />

                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}
                                    className="button-group">
                                        <a className="btn-default btn-small btn-border" href="#">Button Outlined</a>
                                    </ScrollAnimation>
                            


                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}
                                    className="button-group mt--20">
                                        <a className="btn-default btn-border" href="#">Button Outlined</a>
                                    </ScrollAnimation>
                                

                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}
                                    className="button-group mt--20">
                                        <a className="btn-default btn-large btn-border" href="#">Button Outlined</a>
                                    </ScrollAnimation>
                                

                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}
                                    className="button-group mt--20">
                                        <a className="btn-default btn-extra-large btn-border" href="#">Button Outlined</a>
                                    </ScrollAnimation>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Elements Area  */}
                    <Separator />

                    {/* Start Elements Area  */}
                    <div className="rwt-button-area rn-section-gap">
                        <div className="container">
                            <div className="row row--30">
                                <div className="col-lg-6 col-md-6 col-12">
                                    <SectionTitle
                                        textAlign = "text-start"
                                        radiusRounded = ""
                                        subtitle = "Easily switchable icon"
                                        title = "Button Icon"
                                        description = ""
                                    />

                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}
                                    className="button-group">
                                        <a className="btn-default btn-small btn-icon" href="#">Button Solid <i className="icon"><FiArrowRight /></i></a>
                                    </ScrollAnimation>
                            

                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}
                                    className="button-group mt--20">
                                        <a className="btn-default btn-icon" href="#">Button Solid <i className="icon"><FiArrowRight /></i></a>
                                    </ScrollAnimation>
                        

                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}
                                    className="button-group mt--20">
                                        <a className="btn-default btn-large btn-icon" href="#">Button Solid <i className="icon"><FiArrowRight /></i></a>
                                    </ScrollAnimation>
                            

                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}
                                    className="button-group mt--20">
                                        <a className="btn-default btn-extra-large btn-icon" href="#">Button Solid <i className="icon"><FiArrowRight /></i></a>
                                    </ScrollAnimation>
                                </div>

                                <div className="col-lg-6 col-md-6 col-12 mt_sm--40">
                                    <SectionTitle
                                        textAlign = "text-start"
                                        radiusRounded = ""
                                        subtitle = "Include Icon"
                                        title = "Outlined Buttons"
                                        description = ""
                                    />
                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}
                                    className="button-group">
                                        <a className="btn-default btn-small btn-border btn-icon" href="#">Button Outlined <i className="icon"><FiArrowRight /></i></a>
                                    </ScrollAnimation>
                        
                        

                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}
                                    className="button-group mt--20">
                                        <a className="btn-default btn-border btn-icon" href="#">Button Outlined <i className="icon"><FiArrowRight /></i></a>
                                    </ScrollAnimation>
                            

                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}
                                    className="button-group mt--20">
                                        <a className="btn-default btn-large btn-border btn-icon" href="#">Button Outlined <i className="icon"><FiArrowRight /></i></a>
                                    </ScrollAnimation>
                            

                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}
                                    className="button-group mt--20">
                                        <a className="btn-default btn-extra-large btn-border btn-icon" href="#">Button Outlined <i className="icon"><FiArrowRight /></i></a>
                                    </ScrollAnimation>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Elements Area  */}
                    <Separator />

                    {/* Start Elements Area  */}
                    <div className="rwt-button-area rn-section-gap">
                        <div className="container">
                            <div className="row row--30">
                                <div className="col-lg-12 col-md-6 col-12">
                                    <SectionTitle
                                        textAlign = "text-start"
                                        radiusRounded = ""
                                        subtitle = "Button Extra"
                                        title = "Button Variation"
                                        description = ""
                                    />

                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}
                                    className="button-group">
                                        <a className="btn-default text-underline" href="#"><span>View More</span></a>
                                        <a className="btn-read-more" href="#"><span>View More</span></a>
                                        <a className="btn-default round" href="#"><span>View More</span></a>
                                        <a className="btn-default square" href="#"><span>View More</span></a>
                                        <a className="btn-default rounded-player" href="#"><span><FiPlay /></span></a>
                                        <a className="btn-default rounded-player btn-border" href="#"><span><FiPlay /></span></a>
                                    </ScrollAnimation>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Elements Area  */}

                </div>
            </Layout>
        </>
    )
}
export default Button;
