import React from 'react';
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import BreadcrumbOne from "../breadcrumb/BreadcrumbOne";
import SectionTitle from "../sectionTitle/SectionTitle";
import PortfolioOne from "./PortfolioOne";

const PortfolioThreeColumn = () => {
    return (
        <>
            <SEO title="Our Portfolio || JSG Developers - Website Design Agency" />
            <Layout>
                <BreadcrumbOne 
                    title="From simple websites to complex </br> mobile applications, we have done it all."
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Portfolio"
                />
                <div className="main-content">
                    <div className="rwt-portfolio-area rn-section-gap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                        <SectionTitle
                                            textAlign = "text-center"
                                            radiusRounded = ""
                                            subtitle = "Portfolio"
                                            title = "Some of the cool stuff we build!"
                                            description = ""
                                        />
                                </div>
                            </div>
                            <PortfolioOne Column="col-lg-4 col-md-6 mt--30 portfolio"  />
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}
export default PortfolioThreeColumn;
