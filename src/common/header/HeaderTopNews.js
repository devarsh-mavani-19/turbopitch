import {useState} from "react";
import { FiX , FiArrowRight} from "react-icons/fi";

const HeaderTopNews = () => {
    const [deactive, setClass] = useState('');
    return (
        // https://doob.rainbowit.net/images/bg/top-banner.png
        <div className={`header-top-news bg_image ${deactive}`}  style={{backgroundImage: `url(https://doob.rainbowit.net/images/bg/top-banner.png`}}>
        {/* <div className={`header-top-news bg_image ${deactive}`}  style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg/top-banner.png)`}}> */}
            <div className="wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner">
                                <div className="content">
                                    <span className="rn-badge">Limited Time Offer</span>
                                    <span className="news-text">Launching month sale <strong>-50% off.</strong></span>
                                </div>
                                <div className="right-button">
                                    <a className="btn-read-more" target="_blank" href="/contact"><span>Purchase Now <FiArrowRight /></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="icon-close">
                <button className="close-button" onClick={() => setClass('deactive')}><FiX /></button>
            </div>
        </div>
    )
}

export default HeaderTopNews;
