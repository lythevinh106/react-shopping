import React from 'react';
import PropTypes from 'prop-types';


import "./style.scss"
import cln from "classnames"

PopperWrapper.propTypes = {

};

function PopperWrapper({ children, bigShadow, bgGrey = false }) {





    return (
        <div className={cln("popper-wrapper", {
            "big-shadow": bigShadow,
            "grey": bgGrey

        })}>
            {children}
        </div>

    )
}

export default PopperWrapper;