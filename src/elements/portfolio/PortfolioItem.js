import React from 'react';
// import {Link} from "react-router-dom";

const PortfolioItem = ({ portfolio }) => {
    return (
        <div className="rwt-card">
            <div className="inner">
                <div className="thumbnail">
                    <figure className="card-image">
                        <img className="img-fluid" src={portfolio.portfolioImage} alt="Portfolio-01"/>
                        {/* <a href={process.env.PUBLIC_URL + `/portfolio-details/${portfolio.id}`}>
                            
                        </a> */}
                    </figure>
                    {/* <a href={process.env.PUBLIC_URL + `/portfolio-details/${portfolio.id}`} className="rwt-overlay"></a> */}
                </div>
                <div className="content">
                    <h5 className="title mb--10">
                        {/* <a href={process.env.PUBLIC_URL + `/portfolio-details/${portfolio.id}`}> */}
                            {portfolio.title}
                        {/* </a> */}
                    </h5>
                    <span className="subtitle b2 text-capitalize">{portfolio.category}</span>
                </div>
            </div>
        </div>
    )
}
export default PortfolioItem;