import React from 'react';
import SEO from "../common/SEO";
import Separator from "../elements/separator/Separator";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
// import {Link} from "react-router-dom";
import HeaderOne from '../common/header/HeaderOne';
import CounterUpFour from '../elements/counterup/CounterUpFour';
import ServiceOne from '../elements/service/ServiceOne';
// import AboutFour from '../elements/about/AboutFour';
import AdvancePricingOne from '../elements/advancePricing/AdvancePricingOne';
import BrandOne from '../elements/brand/BrandOne';
import FooterTwo from '../common/footer/FooterTwo';
import Copyright from '../common/footer/Copyright';
import AdvanceTabOne from '../elements/advancetab/AdvanceTabOne';
import PricingOne from '../elements/pricing/PricingOne';
import Testimonial from '../elements/testimonial/Testimonial';


const BannerData = [
    {
        image: "/images/bg/bg-image-20.jpg",
        title: "Let the AI <br /> Build Winning Pitches.",
        description: "Spend less time building pitches and more time winning clients."
    },
]


const WebAgency = () => {
    return (
        <>
            <SEO title="Web Agency" />
            <main className="page-wrapper">
                <HeaderOne btnStyle="btn-small" HeaderSTyle="header-not-transparent" />


                {/* Start Slider Area  */}
                <div className="slider-area slider-style-8 height-650">
                    {BannerData.map((data, index) => (
                        <div key={index} className="single-slide">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-12">
                                        <div className="inner text-center">
                                            <span className="subtitle theme-gradient">WELCOME TO TURBO PITCH</span>
                                            <h1 className="title" dangerouslySetInnerHTML={{__html: data.title}}></h1>
                                            <p className="description" dangerouslySetInnerHTML={{__html: data.description}}></p>
                                            <div className="button-group mt--30">
                                                <a className="btn-default btn-large round" target="_blank" href="https://themeforest.net/checkout/from_item/33571911?license=regular">Demo</a>
                                                <a className="btn-default btn-border btn-large round" href="#">Contact Us</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* End Slider Area  */}


                {/* Start Counterup Area  */}
                <div className="our-counterup-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="thumbnail">
                                    <img className="radius w-100" src="./images/demo/screenshot_tp.jpg" alt="Images" />
                                </div>
                                {/* Start Elements Area  */}
                                {/* <div className="rwt-counterup-area ptb--60">
                                    <div className="col-lg-12">
                                        <CounterUpFour column="col-lg-3 col-md-6 col-sm-6 col-12" counterStyle="counter-style-4" textALign="text-center" />   
                                    </div>
                                </div> */}
                                {/* End Elements Area  */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Counterup Area  */}

                <Separator />

                <div className="rn-service-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "Demo"
                                    title = "A Video demonstration of how it works"
                                    description = ""
                                    />
                            </div>
                        </div>
                        <iframe width="1250" height="703" src="https://www.youtube.com/embed/St6Xcz4RulQ" title="TurboPitch Demo" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
                <Separator />

                <div className="rwt-pricing-area rn-section-gap">
                    <div className="container">
                        <div className="row mb--40 mb_sm--0">
                            <div className="col-lg-12">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "Pricing"
                                        title = "That's a bargain."
                                        description = ""
                                    />
                            </div>
                        </div>
                        <PricingOne />
                    </div>
                </div>
                <Separator />

                <Testimonial />

                {/* <AboutFour image="./images/about/contact-image.jpg" /> */}

                {/* Start Brand Area  */}
                {/* <div className="rwt-brand-area rn-section-gapBottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "Our Awesome Client"
                                    title = "Our Awesome Client."
                                    description = ""
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 mt--40">
                                <BrandOne brandStyle="brand-style-1" />
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* End Brand Area  */}

                <FooterTwo />
                <Copyright />
            </main>
        </>
    )
}
export default WebAgency;