import React from 'react';
import SEO from "../common/SEO";
import HeaderOne from '../common/header/HeaderOne';
import HeaderTopBar from '../common/header/HeaderTopBar';
import FooterThree from '../common/footer/FooterThree';


import Typed from 'react-typed';
// import {Link} from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import ServiceFour from '../elements/service/ServiceFour';
import AdvanceTabOne from '../elements/advancetab/AdvanceTabOne';
import AdvancePricingOne from '../elements/advancePricing/AdvancePricingOne';
import BrandTwo from '../elements/brand/BrandTwo';

import Separator from "../elements/separator/Separator";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import PricingTwo from '../elements/pricing/PricingTwo';
import TestimonialOne from '../elements/testimonial/TestimonialOne';
import PricingOne from '../elements/pricing/PricingOne';
import { useRouter } from 'next/router';
import Link from 'next/link';


const Marketing = () => {
    let router = useRouter()
    const { success } = router.query
    const { canceled } = router.query
    return (
        <>
            <SEO title="Marketing" />
            <main className="page-wrapper">

                {
                    success ? (
                        <div className="alert alert-success" role="alert">
                            Your previous transaction was successful
                        </div>
                    ) : null
                }
                {
                    canceled ? (
                        <div className="alert alert-danger" role="alert">
                            Your previous transaction failed.
                        </div>
                    ) : null
                }
                {/* <HeaderTopBar /> */}
                <HeaderOne btnStyle="btn-small round btn-icon" HeaderSTyle="header-not-transparent" />


                {/* Start Slider Area  */}
                <div className="slider-area slider-style-1 bg-transparent variation-2 height-750">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 order-2 order-lg-1 mt_md--40 mt_sm--40">
                                <div className="inner text-start">
                                    <h1 className="title theme-gradient display-two">Turbo Pitch <br /> For {" "}
                                        <Typed
                                            strings={[
                                                "Freelancer.",
                                                "entrepreneur.",
                                                "Startup.",
                                            ]}
                                            typeSpeed={80}
                                            backSpeed={5}
                                            backDelay={1000}
                                            loop
                                        />
                                    </h1>
                                    <p className="description">A tool that will help you quickly create an automatic pitch and cover letter for your freelance business.</p>
                                    <div className="button-group">
                                        <Link href="/app"><a className="btn-default btn-medium btn-border round btn-icon">Create Pitch<i className="icon"><FiArrowRight /></i></a></Link>
                                        <Link href="#how-it-works"><a className="btn-default btn-medium btn-border round btn-icon">How it works? <i className="icon"><FiArrowRight /></i></a></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 order-1 order-lg-2">
                                <div className="thumbnail">
                                    <img src="./images/banner/content_writer.svg" alt="Banner Images" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Slider Area  */}

                <Separator />

                {/* Start Service Area  */}
                <div className="rn-service-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "Use cases"
                                    title = "How can you use it?"
                                    description = "This AI Powered tools has many use cases. It uses cutting edge technology to generate content."
                                    />
                            </div>
                        </div>
                        <ServiceFour 
                            serviceStyle = "service__style--1 icon-circle-style with-working-process"
                            textAlign = "text-center"
                            />
                    </div>
                </div>
                {/* End Service Area  */}

                <Separator />

                <div className="rwt-advance-tab-area rn-section-gap" id='how-it-works'>
                    <div className="container">
                        <div className="row mb--40">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "You can acquire all."
                                    title = "Acquire new customers with Turbo Pitch."
                                    description = "There are many use cases of turbo-pitch. Some of them are listed below."
                                />
                            </div>
                        </div>
                        <AdvanceTabOne />
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

                <div className="rwt-testimonial-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 mb--10">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "Client Feedback"
                                    title = "Testimonial."
                                />
                            </div>
                        </div>
                        <TestimonialOne column="col-lg-4 col-md-6 col-12 mt--30" teamStyle="card-style-default testimonial-style-one" />
                    </div>
                </div>

                {/* <Separator /> */}
                {/* Start Elements Area  */}
               
                {/* End Elements Area  */}

                {/* <Separator /> */}

                {/* Start Brand Area  */}
                {/* <div className="rwt-brand-area rn-section-gapBottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "Awesome Clients"
                                    title = "Join over +10,000 happy clients!"
                                    description = ""
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 mt--10">
                                <BrandTwo brandStyle="brand-style-2" />
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* End Brand Area  */}

                <FooterThree />

            </main>
        </>
    )
}

export default Marketing;
