import React from 'react';
import Typed from 'react-typed';
import SEO from "../common/SEO";
// import {Link} from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import HeaderTwo from '../common/header/HeaderTwo';
import HeaderTopNews from '../common/header/HeaderTopNews';
import FooterTwo from '../common/footer/FooterTwo';
import Copyright from '../common/footer/Copyright';
import AboutOne from '../elements/about/AboutOne';
import ServiceFive from '../elements/service/ServiceFive';
import CalltoActionFive from '../elements/calltoaction/CalltoActionFive';
import TeamTwo from '../elements/team/TeamTwo';
import TestimonialThree from "../elements/testimonial/TestimonialThree";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import Separator from "../elements/separator/Separator";
import Mission from "../elements/about/Mission";
// import BlogList from "../components/blog/itemProp/BlogList";
import BlogClassicData from '../data/blog/BlogList.json';
import ServiceTwo from '../elements/service/ServiceTwo';
import ServiceThree from '../elements/service/ServiceThree';
import ServiceOne from '../elements/service/ServiceOne';
var BlogListData = BlogClassicData.slice(0, 3);

const BusinessConsulting2 = () => {
    return (
        <>
            <SEO title="Best Website Agency & Logo Designing - JSG Developers" />
            <main className="page-wrapper">
                {/* <HeaderTopNews /> */}
                <HeaderTwo btnStyle="round" HeaderSTyle="header-not-transparent" />

                {/* Start Slider Area  */}
                <div className="slider-area slider-style-1 bg-transparent height-850">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inner text-center">
                                    <span className="subtitle">WEBSITE AGENCY</span>
                                    <h1 className="title theme-gradient display-two">JSG Developers <br /> {" "}
                                        <Typed
                                            strings={[
                                                "Design.",
                                                "Build.",
                                                "Deploy.",
                                            ]}
                                            typeSpeed={80}
                                            backSpeed={5}
                                            backDelay={1000}
                                            loop
                                        />
                                    </h1>
                                    <p className="description">Your #1 Website Development & App Development Agency.</p>
                                    <div className="button-group">
                                        {/* <a className="btn-default btn-medium round btn-icon" target="_blank" href="https://themeforest.net/checkout/from_item/33571911?license=regular">Purchase Now <i className="icon"><FiArrowRight /></i></a> */}
                                        <a className="btn-default btn-medium round btn-icon" href="#services">Let's Connect <i className="icon"><FiArrowRight /></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Slider Area  */}

                {/* <Separator /> */}

                {/* Start About Area  */}
                {/* <AboutOne />                             */}
                {/* End About Area  */}

                <Separator />                            
                {/* Start Service Area  */}
                <div className="rn-service-area rn-section-gap" id='services'>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "What we can do for you"
                                    title = "Our Services."
                                    description = "We provide logo designing, website designing and development"
                                    />
                            </div>
                        </div>
                        <ServiceOne 
                                serviceStyle = "service__style--1 bg-color-blackest radius mt--25 rbt-border"
                                textAlign = "text-start"
                             />
                    </div>
                </div>
                {/* End Service Area  */}


                {/* Start Call To Action Area  */}
                <div className="rwt-callto-action-area">
                    <div className="wrapper">
                        <CalltoActionFive />
                    </div>
                </div>
                {/* End Call To Action Area  */}


                 {/* Start Team Area  */}
                 {/* <div className="rwt-team-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "Our Experts."
                                        title = "Our Company Experts."
                                        description = "We provide company and finance service for <br /> startups and company business."
                                    />
                            </div>
                        </div>
                        <TeamTwo column="col-lg-4 col-md-6 col-12" teamStyle="team-style-default style-two" />
                    </div>
                </div> */}
                {/* End Team Area  */}
                <Separator /> 
                {/* Start Mission Area   */}
                <Mission />                    
                {/* Start Mission Area  */}


                <Separator />                               
                {/* Start Testimonial Area  */}
                <div className="rwt-testimonial-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "Client Feedback"
                                    title = "Our Awesome Client."
                                    description = "Clients loves our service. They keep coming back to us."
                                />
                            </div>
                        </div>
                        <TestimonialThree teamStyle="" />
                    </div>
                </div>
                {/* End Testimonial Area  */}

                <Separator />   
                <div className="blog-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "Latests News"
                                    title = "Our Latest News."
                                    description = "We provide company and finance service for <br /> startups and company business."
                                />
                            </div>
                        </div>
                        <div className="row row--15">
                            {BlogListData.map((item) => (
                                <div key={item.id} className="col-lg-4 col-md-6 col-12 mt--30">
                                    {/* <BlogList StyleVar="box-card-style-default" data={item} /> */}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <FooterTwo />
                <Copyright />
            </main>
        </>
    )
}
export default BusinessConsulting2;
