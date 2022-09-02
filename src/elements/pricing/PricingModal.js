import { Modal } from "@mui/material";
import { FiCheck } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector } from "react-redux";
import PricingOne from "./PricingOne";


export default function PricingModal({open, handleClose}) {
    let auth = useSelector(state => state.auth)
    return <Modal
        open={open}
        className='d-flex justify-content-center align-items-center'
        style={{backdropFilter: 'saturate(180%) blur(10px)'}}
    >
        <div className='d-flex justify-content-center align-items-center card p-5' style={{}}>
            <div style={{overflow: 'scroll', maxHeight: "100vh"}}>
            <div className='d-flex align-items-center w-100 my-3'>
                <AiOutlineClose size={25} style={{flex: 0.1, cursor: 'pointer'}} onClick={handleClose} />
                <h2 className="my-0" style={{flex: 0.9, textAlign: 'center'}}>You ran out of credits!</h2>
            </div>
            <div className='d-flex flex-wrap justify-content-center align-items-center m-5' style={{overflow: 'scroll'}}>
                <div className='d-flex m-3 flex-wrap justify-content-center align-items-center'>
                    <div className='card shadow p-4 d-flex flex-column justify-content-center align-items-center'>
                        <h4>Basic</h4>
                        <h3>
                            5 USD
                        </h3>
                        <div className='pricing-body'>
                            <ul className="list-style--1" style={{listStyle: 'none'}}>
                                <li><FiCheck /> 50 Credits</li>
                                <li><FiCheck /> Never Expires</li>
                                <li><FiCheck /> Email Support</li>
                                <li><FiCheck /> Future Updates</li>
                                <li><FiCheck /> Freelance Cover Letters</li>
                                <li><FiCheck /> Freelance Pitch</li>
                            </ul>
                        </div>
                        <form method='POST' action='/api/checkout_sessions'>
                                <input type={'text'} name='idToken' value={auth.token} hidden />
                                <input type={'text'} name='pricing' value={'price_1LbrBrH6sRgnLBOdB8nGvyNx'} hidden />
                                <button className="btn-default btn-border" type='submit'>Purchase Now</button>
                        </form>
                    </div>
                </div>
                <div className='d-flex m-3 flex-wrap justify-content-center align-items-center'>
                    <div className='card shadow p-4 d-flex flex-column justify-content-center align-items-center'>
                        <h4>Standard</h4>
                        <h3>
                            10 USD
                        </h3>
                        <div>
                            <ul className="list-style--1" style={{listStyle: 'none'}}>
                                <li><FiCheck /> 110 Credits</li>
                                <li><FiCheck /> Never Expires</li>
                                <li><FiCheck /> Email Support</li>
                                <li><FiCheck /> Future Updates</li>
                                <li><FiCheck /> Freelance Cover Letters</li>
                                <li><FiCheck /> Freelance Pitch</li>
                            </ul>
                        </div>
                        <form method='POST' action='/api/checkout_sessions'>
                                <input type={'text'} name='idToken' value={auth.token} hidden />
                                <input type={'text'} name='pricing' value={'price_1LbrCvH6sRgnLBOdMx3srIKd'} hidden />
                                <button className="btn-default">Purchase Now</button>
                        </form>
                    </div>
                </div>
                <div className='d-flex m-3 flex-wrap justify-content-center align-items-center'>
                    <div className='card shadow p-4 d-flex flex-column justify-content-center align-items-center'>
                        <h4>Pro</h4>
                        <h3>
                            20 USD
                        </h3>
                        <div>
                            <ul className="list-style--1" style={{listStyle: 'none'}}>
                                <li><FiCheck /> 240 Credits</li>
                                <li><FiCheck /> Never Expires</li>
                                <li><FiCheck /> Email Support</li>
                                <li><FiCheck /> Future Updates</li>
                                <li><FiCheck /> Freelance Cover Letters</li>
                                <li><FiCheck /> Freelance Pitch</li>
                            </ul>
                        </div>
                        <form method='POST' action='/api/checkout_sessions'>
                                <input type={'text'} name='idToken' value={auth.token} hidden />
                                <input type={'text'} name='pricing' value={'price_1LbrDJH6sRgnLBOdax4H5GQ2'} hidden />
                                <button className="btn-default btn-border">Purchase Now</button>
                        </form>
                    </div>
                </div>
                {/* <PricingOne /> */}
            </div>
            </div>
        </div>
    </Modal>
}