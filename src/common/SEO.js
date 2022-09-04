import PropTypes from "prop-types";
import React from 'react'


const SEO = ( {title} ) => {
    return (
        <>
            <meta charSet="utf-8" />
            <title>{"Turbo Pitch | A.I. Freelance Pitch and Cover letter generator"}</title>
            <meta name="description" content="JSG Developers is leading website designing and development agency. we focus on modern design and development that will make grow your brand and make an impact. " />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        </>
    )
}
SEO.propTypes = {
    title: PropTypes.string
};

export default SEO;


