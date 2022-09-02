import React from 'react';
import ScrollAnimation from "react-animate-on-scroll";

const testimonialData = [
    {
        image: 'testimonial_1',
        name: 'Devarsh',
        designation: 'Web Agency Owner',
        location: 'Ahmedabad, India', 
        description: '“Turbo Pitch is keeping me ahead of competition.„',
       
    },
    {
        image: 'testimonial_2',
        name: 'Hrishita',
        designation: 'Content Writer',
        location: 'Halifax, Canada', 
        description: '“I am able to save a lot of my time due to Turbo Pitch. Recommended.„',
      
    },
    {
        image: 'testimonial_3',
        name: 'Samir',
        designation: 'Freelancer',
        location: 'Ahmedabad, India', 
        description: '“Great tool for quickly creating pitch for upwork job.„',
    },
]


const TestimonialOne = ({column , teamStyle}) => {
    return (
        <div className="row row--15">
            {testimonialData.map((data, index) => (
                <div className={`${column}`} key={index}>
                    <ScrollAnimation 
                    animateIn="fadeInUp"
                    animateOut="fadeInOut"
                    animateOnce={true}>
                        <div className={`rn-box-card ${teamStyle}`}>
                            <div className="inner">
                                <figure className="thumbnail">
                                    <img src={`./images/testimonial/${data.image}.png`} alt="Corporate React Template" />
                                </figure>
                                <figcaption className="content">
                                    <p className="description">{data.description}</p>
                                    <h2 className="title">{data.name}</h2>
                                    <h6 className="subtitle theme-gradient">{data.designation}</h6>
                                </figcaption>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            ))}
        </div>
    )
}

export default TestimonialOne;
