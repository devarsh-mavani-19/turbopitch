import Link from 'next/link';
import React from 'react';
import { FiCheck } from "react-icons/fi";
import { useSelector } from 'react-redux';

const PricingOne = () => {
    let auth = useSelector(state => state.auth)
    return (
        <div className="row row--30">
            {/* Start PRicing Table Area  */}
            <div className="col-lg-4 col-md-6 col-12">
                <div className="rn-pricing">
                    <div className="pricing-table-inner">
                        <div className="pricing-header">
                            <h4 className="title">Basic</h4>
                            <div className="pricing">
                                <div className="price-wrapper">
                                    <span className="currency">$</span>
                                    <span className="price">5</span>
                                </div>
                                {/* <span className="subtitle">USD (Never Expires)</span> */}
                            </div>
                        </div>
                        <div className="pricing-body">
                            <ul className="list-style--1">
                                <li><FiCheck /> 50 Credits</li>
                                <li><FiCheck /> Never Expires</li>
                                <li><FiCheck /> Email Support</li>
                                <li><FiCheck /> Future Updates</li>
                                <li><FiCheck /> Freelance Cover Letters</li>
                                <li><FiCheck /> Freelance Pitch</li>
                            </ul>
                        </div>
                        <div className="pricing-footer">
                            <form method='POST' action='/api/checkout_sessions'>
                                <input type={'text'} name='idToken' value={auth.token} hidden />
                                <input type={'text'} name='pricing' value={'price_1LbrBrH6sRgnLBOdB8nGvyNx'} hidden />
                                <button className="btn-default btn-border" type='submit'>Purchase Now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* End PRicing Table Area  */}

            {/* Start PRicing Table Area  */}
            <div className="col-lg-4 col-md-6 col-12">
                <div className="rn-pricing active">
                    <div className="pricing-table-inner">
                        <div className="pricing-header">
                            <h4 className="title">Standard</h4>
                            <div className="pricing">
                                <div className="price-wrapper">
                                    <span className="currency">$</span>
                                    <span className="price">10</span>
                                </div>
                                <span className="subtitle">10% extra credits</span>
                            </div>
                        </div>
                        <div className="pricing-body">
                            <ul className="list-style--1">
                                <li><FiCheck /> 110 Credits</li>
                                <li><FiCheck /> Never Expires</li>
                                <li><FiCheck /> Email Support</li>
                                <li><FiCheck /> Future Updates</li>
                                <li><FiCheck /> Freelance Cover Letters</li>
                                <li><FiCheck /> Freelance Pitch</li>
                            </ul>
                        </div>
                        <div className="pricing-footer">
                            <form method='POST' action='/api/checkout_sessions'>
                                <input type={'text'} name='idToken' value={auth.token} hidden />
                                <input type={'text'} name='pricing' value={'price_1LbrCvH6sRgnLBOdMx3srIKd'} hidden />
                                <button className="btn-default">Purchase Now</button>
                            </form>
                            
                        </div>
                    </div>
                </div>
            </div>
            {/* End PRicing Table Area  */}

            {/* Start PRicing Table Area  */}
            <div className="col-lg-4 col-md-6 col-12">
                <div className="rn-pricing">
                    <div className="pricing-table-inner">
                        <div className="pricing-header">
                            <h4 className="title">Pro</h4>
                            <div className="pricing">
                                <div className="price-wrapper">
                                    <span className="currency">$</span>
                                    <span className="price">20</span>
                                </div>
                                <span className="subtitle">20% extra credits</span>
                            </div>
                        </div>
                        <div className="pricing-body">
                            <ul className="list-style--1">
                                <li><FiCheck /> 240 Credits</li>
                                <li><FiCheck /> Never Expires</li>
                                <li><FiCheck /> Email Support</li>
                                <li><FiCheck /> Future Updates</li>
                                <li><FiCheck /> Freelance Cover Letters</li>
                                <li><FiCheck /> Freelance Pitch</li>
                            </ul>
                        </div>
                        <div className="pricing-footer">
                            <form method='POST' action='/api/checkout_sessions'>
                                <input type={'text'} name='idToken' value={auth.token} hidden />
                                <input type={'text'} name='pricing' value={'price_1LbrDJH6sRgnLBOdax4H5GQ2'} hidden />
                                <button className="btn-default btn-border">Purchase Now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* End PRicing Table Area  */}
        </div>
    )
}
export default PricingOne;
