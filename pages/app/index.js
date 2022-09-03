import { FiArrowRight } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import Blury from "../../src/common/Blury";
import FooterThree from "../../src/common/footer/FooterThree";
import HeaderOne from "../../src/common/header/HeaderOne";
import SEO from "../../src/common/SEO";
import Button from "../../src/elements/button/Button";
import SectionTitle from "../../src/elements/sectionTitle/SectionTitleNoScroll";
import Separator from "../../src/elements/separator/Separator";
import ServiceFour from "../../src/elements/service/ServiceFour";
import { notificationAction } from "../../store/notification";
import Chip from '@mui/material/Chip'
import { useState } from "react";
import axios from 'axios'
import { loadingAction } from "../../store/loading";
import PricingModal from "../../src/elements/pricing/PricingModal";
import { authAction } from "../../store/auth";
import { AiFillQuestionCircle } from "react-icons/ai";
import HelpModalCV from "../../src/elements/devarsh/HelpModalCV";

export default function App() {
    let authState = useSelector(state => state.auth)
    const [results, setResults] = useState([`
    To whom it may concern,

    I am writing to apply for the website building freelance work that you have posted. Based on my existing website, I believe that I have the design skills necessary to create a home page as similar to your specification as can be achieved in DUDA. I have also designed a photo display gallery that is similar to the one in your existing website. I believe that my skills and experience make me the perfect candidate for this position and I look forward to contributing to your website.

    Thank you for your time and consideration.

    Sincerely,

    [Your Name]
    `])
    let dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [showModal, setShowModal] = useState(false)
    const [showHelpModal, setShowHelpModal] = useState(false)

    const generateCoverLetter = () => {
        dispatch(loadingAction.startLoading())
        if (authState.isLoading) {
            dispatch(loadingAction.stopLoading())
            dispatch(notificationAction.showNotification({message: 'Authenticating... Please wait a second', type: 'info'}))
            return;
        }
        if (!authState.isAuth) {
            // Show notification
            dispatch(loadingAction.stopLoading())
            dispatch(notificationAction.showNotification({message: 'You are not logged in', type: 'error'}))
        } else {
            if (authState.credits == 0) {
                // Show a purchase pop-up
                setShowModal(true)
                dispatch(loadingAction.stopLoading())
            } else {
                // Send an http request to server
                axios({
                    url: process.env.NEXT_PUBLIC_SERVER_URL + '/api/cv/generate',
                    method: 'POST',
                    data: {
                        idToken: authState.token,
                        title: title,
                        description: description
                    }
                })
                .then(r => {
                    dispatch(loadingAction.stopLoading())
                    let results = r.data.result
                    let credits = r.data.credits
                    dispatch(authAction.updateCredits({credits: credits}))
                    setResults(results)
                })
                .catch(e => {
                    dispatch(loadingAction.stopLoading())
                    dispatch(notificationAction.showNotification({message: 'Something went wrong while fetching results', type: 'error'}))
                })
            }
        }
    }
    const copyText = (result) => {
        navigator.clipboard.writeText(result).then(r => {
            dispatch(notificationAction.showNotification({message: 'Text Copied', type: 'info'}))
        }).catch(e => {
            dispatch(notificationAction.showNotification({message: 'Failed to copy text', type: 'error'}))
        })
    }
    return (
        <>
            <SEO title="Marketing" />
            <main className="page-wrapper">
                <HeaderOne btnStyle="btn-small round btn-icon" HeaderSTyle="header-not-transparent" />
                
                {/* Start title section here */}
                
                <div className="" style={{marginBottom: '5rem', marginTop: '5rem'}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "Freelance Job Cover Letter Generator"
                                    title = "Generate Cover letter for freelancing job."
                                    description = "Useful for websites like upwork.com, freelancer.com"
                                    />
                            </div>
                        </div>
                    </div>
                </div>

                {
                    showModal ? (
                        <PricingModal open={showModal} handleClose={() => {setShowModal(false)}} />
                    ) : null
                }

                {
                    showHelpModal ? (
                        <HelpModalCV open={showHelpModal} handleClose={() => {setShowHelpModal(false)}} />
                    ) : null
                }
                

                {/* title section ends here */}

                <Separator />

                {/*  */}


                <div className='container my-4'>
                    {
                        !authState.isAuth && !authState.isLoading ? (
                            <div className="alert alert-danger" role="alert">
                                You are not logged in. Please login to use the app.
                            </div>
                        ) : null
                    }
                    
                    <div className="card shadow-lg p-5 my-3">
                        <AiFillQuestionCircle size={25} style={{cursor: 'pointer'}} onClick={() => {
                            setShowHelpModal(true)
                        }} />
                        <div className="d-flex flex-row justify-content-center flex-wrap m-5">
                            
                            <h2 className="title w-600  mx-4">Create a cover letter for</h2>
                            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} aria-label="First name" style={{width: 'auto'}} className="" placeholder="Website Design" />
                            <h2 className="title w-600 mx-4">Freelance work</h2>
                        </div>
                        <div className="form-floating ">
                            <textarea className=" " value={description} onChange={(e) => setDescription(e.target.value)} style={{minHeight: "200px"}} placeholder="Website building from scratch, including website design, content writing, relevant images/graphics, Logo design" id="floatingTextarea"></textarea>
                            {/* <label for="floatingTextarea" className="">Description</label> */}
                        </div>
                        <button onClick={generateCoverLetter} className="btn-default btn-icon my-5" >Generate Cover Letter <i className="icon"><FiArrowRight /></i></button>
                    </div>
                    {
                        results.map((result, index) => {
                            return (
                                <div className="card shadow-lg my-3 p-5" key={index}>
                                    <Chip label="Copy" variant="outlined" onClick={() => copyText(result)} style={{width: '10rem', fontWeight: 'bolder', fontSize: '1.2rem'}} />
                                    <pre style={{whiteSpace: "pre-wrap", wordWrap: "break-word" }}>{result}</pre>
                                </div>
                            )
                        })
                    }

                </div>

                <FooterThree />

            </main>
        </>
        )
}
