import {useState, useRef} from "react";
import { FiMenu } from "react-icons/fi";
import Logo from "../../elements/logo/Logo";
import Nav from './Nav';
import MobileMenu from './MobileMenu';
import Darkmode from "./Darkmode";
import useStickyHeader from "./useStickyHeader";
import { signInUser, signOutUser } from "../../../utils/auth";
import { useDispatch, useSelector } from 'react-redux'
import { authAction } from "../../../store/auth";
import { Chip } from '@mui/material'
import { notificationAction } from "../../../store/notification";
// import { Link } from "react-router-dom";


const HeaderOne = ({btnStyle, HeaderSTyle}) => {
    const [ofcanvasShow, setOffcanvasShow] = useState(false);
    const onCanvasHandler = () => {
        setOffcanvasShow(prev => !prev);
    }
    const ref = useRef();
    let [check, setCheck] = useState(true);
    const sticky = useStickyHeader( 50 );
    let dispatch = useDispatch()
    let authState = useSelector(state => state.auth)
    let notificationState = useSelector(state => state.notification)

    const headerClasses = `header-default ${(sticky && check) ? 'sticky' : ''}`
    const { clientHeight } = ref;
    
    const checkChange = (value) => {
      setCheck(value);
    };
    const handleLoginClick = () => {
        signInUser()
        .then(({user, token, credits}) => {
            dispatch(authAction.login({email: user.email,fullname: user.displayName, token: token, credits: credits}))
            dispatch(notificationAction.showNotification({
                message: `You are logged in as ${user.displayName} successfully`,
                type: 'success'
            }))
        }).catch(error => {
            //display error
            dispatch(notificationAction.showNotification({
                message: 'Something went wrong. Please try again later.',
                type: 'error'
            }))
        })
    }
    const handleLogoutClick = () => {
        signOutUser()
        .then(r => {
            dispatch(authAction.logout())
            dispatch(notificationAction.showNotification({
                message: `You are logged out.`,
                type: 'info'
            }))
        })
        .catch(e => {
            dispatch(authAction.logout())
            dispatch(notificationAction.showNotification({
                message: 'Something went wrong. Please try again later.',
                type: 'error'
            }))
        })
    }
    return (
        <>
            <header ref={ref} className={`rn-header header-default ${HeaderSTyle} ${headerClasses}`}>
                <div className="container position-relative">
                    <div className="row align-items-center row--0">
                        <div className="col-lg-3 col-md-6 col-4">
                            <Logo 
                                image={`/images/logo/logo-dark.png`}
                                image2={`/images/logo/logo-dark.png`}
                            />
                        </div>
                        <div className="col-lg-9 col-md-6 col-8 position-static">
                            <div className="header-right">
                                <nav className="mainmenu-nav d-none d-lg-block">
                                    <Nav />
                                </nav>
                                <div className="header-btn">
                                    {
                                        authState.isAuth ?
                                            (
                                                <div
                                                    className='d-flex flex-row'
                                                >
                                                    <Chip label={`Credits: ${authState.credits}`} variant="outlined" style={{fontSize: '1.5rem', backgroundImage: 'linear-gradient(to right, #7B48CC, rgb(247,80,89))', color: 'white', fontWeight: 'bolder'}} className='mx-4' />
                                                    <nav className="mainmenu-nav d-flex justify-content-center align-items-center">
                                                    <ul className="mainmenu">
                                                    <li className='has-droupdown'>
                                                        <h6 className={`m-0`} style={{cursor: 'pointer'}}>
                                                            {authState.fullname}
                                                        </h6>
                                                        <ul className="submenu">
                                                            {/* <li><a href="/profile">Profile</a></li> */}
                                                            <li><a href='#' onClick={handleLogoutClick}>Logout</a></li>
                                                        </ul>
                                                    </li>
                                                    </ul>
                                                    </nav>

                                                </div>
                                            ) : 
                                            (
                                                authState.isLoading ? (
                                                    null
                                                ) : <button className={`btn-default ${btnStyle}`} onClick={handleLoginClick}>Login</button>
                                                
                                            )
                                    }
                                    
                                </div>
                                <div className="mobile-menu-bar ml--5 d-block d-lg-none">
                                    <div className="hamberger">
                                        <span className="hamberger-button" onClick={onCanvasHandler}><FiMenu /></span>
                                    </div>
                                </div>
                                {/* <Darkmode /> */}
                            </div>  
                        </div>
                    </div>
                </div>
            </header>
            <MobileMenu show={ofcanvasShow} onClose={onCanvasHandler}  />
        </>
    )
}
export default HeaderOne;