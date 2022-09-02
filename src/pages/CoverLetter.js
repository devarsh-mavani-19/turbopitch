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
import SectionTitle from "../elements/sectionTitle/SectionTitleNoScroll";
import PricingTwo from '../elements/pricing/PricingTwo';
import TestimonialOne from '../elements/testimonial/TestimonialOne';
import Blury from '../common/Blury';


const CoverLetter = () => {
    return (
        <>
            <SEO title="Marketing" />
            <main className="page-wrapper">
                
                <HeaderOne btnStyle="btn-small round btn-icon" HeaderSTyle="header-not-transparent" />


                {/* Start Slider Area  */}
                    <div className="container">
                        <div className="row">
                            {/* <div className="col-lg-8 order-2 order-lg-1 mt_md--40 mt_sm--40"> */}
                                <div className="inner text-start">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "Freelance Job Cover Letter Generator"
                                        title = "Generate Cover letter for freelancing job."
                                        description = "Useful for websites like upwork.com, freelancer.com"
                                        />
                                </div>
                            {/* </div> */}
                        </div>
                    </div>
                {/* End Slider Area  */}

                <Separator />

                <div className='container'>
                    <div className="card shadow-lg p-4">
                        <div className="d-flex flex-row justify-content-center flex-wrap">
                            <h2 className="title w-600 mb-0 p-0 mx-3">Create a cover letter for</h2>
                            <input type="text" aria-label="First name" style={{width: 'auto'}} className="" placeholder="Website Design" />
                            <h2 className="title w-600 mb-0 p-0 mx-3">Freelance work</h2>
                        </div>
                        <div class="form-floating " style={{marginTop: "5rem"}}>
                            <textarea class="form-control" style={{minHeight: "200px"}} placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                            <label for="floatingTextarea">Description</label>
                        </div>
                    </div>
                </div>

                <Separator />

                <Blury />

            </main>
        </>
    )
}

export default CoverLetter;
