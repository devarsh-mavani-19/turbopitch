import React from 'react';
import { FiActivity, FiCast, FiMap } from "react-icons/fi";
import { AiFillMobile } from "react-icons/ai";
import { SiAltiumdesigner } from 'react-icons/si'
import { TbWritingSign } from 'react-icons/tb'
// import {Link} from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const ServiceList = [
    {
        icon: <FiActivity color='#059dff' />,
        title: 'Website Design',
        description: 'We work with top designers around the world who knows advanced tools to provide you best website design for your brand on time.'
    },
    {
        icon: <FiCast color='#fb5343' />,
        title: 'Website Development',
        description: 'Our developers can make your dream website. We have knowledge of more than 50 technologies to create your brand website.'
    },
    {
        icon: <FiMap color='#6549d5' />,
        title: 'Logo Design',
        description: "Create visual impact with your logo designs. Hire best professional logo designers to make the impact. Good Design Matters"
    },
    {
        icon: <AiFillMobile color='#5096C3' />,
        title: 'App Development',
        description: "Develop highly optimized mobile application for android, IOS or both. We use advance frameworks for cross-platform development."
    },
    {
        icon: <SiAltiumdesigner color='#FF9B46' />,
        title: 'UI/UX Design',
        description: "We develop mockups and UI/UX Wireframes based on your brand guidelines. We do design differntly because good design matters."
    },
    {
        icon: <TbWritingSign color='#74B491' />,
        title: 'Content Writing',
        description: "We provide high quality and most affordable content writing services. Our experts performs detailed research on all topics."
    },
]

const ServiceOne = ({textAlign, serviceStyle}) => {
    return (
        <div className="row row--15 service-wrapper">
              {ServiceList.map( (val , i) => (
                <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                    <ScrollAnimation 
                    animateIn="fadeInUp"
                    animateOut="fadeInOut"
                    animateOnce={true}>
                        <div className={`service ${serviceStyle} ${textAlign}`}>
                            <div className="icon">
                                {val.icon}
                            </div>
                            <div className="content">
                                <h4 className="title w-600"><a href="#service" dangerouslySetInnerHTML={{__html: val.title}}></a></h4>
                                <p className="description b1 color-gray mb--0" dangerouslySetInnerHTML={{__html: val.description}}></p>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            ))}
        </div>
    )
}
export default ServiceOne;