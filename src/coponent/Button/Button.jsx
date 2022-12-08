import React from 'react';
import PropTypes from 'prop-types';
import cln from "classnames"
import "./style.scss"
Button.propTypes = {

};

function Button({ children, className, btnRed = false, btnYellow = false, disabled = false }) {


    const classes = cln(
        "btn-wrapper", {

        "btn--red": btnRed,
        "btn--yellow": btnYellow,
        "btn--disabled": disabled,



        [className]: className


    }

    )


    return (
        <button className={classes}>
            <span>
                {children}
            </span>

        </button>
    );
}

export default Button;