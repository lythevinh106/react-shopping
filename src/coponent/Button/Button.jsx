import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import cln from "classnames"
import "./style.scss"
Button.propTypes = {

};

function Button({ type = "text", onClick = () => { },
    btnGreen = false, children, className, btnWhite = false, btnRed = false,
    btnYellow = false, disabled = false, SizeNormal = false, sizeSmall = false, sizeBig = false }) {


    const classes = cln(
        "btn-wrapper", {

        "btn--red": btnRed,
        "btn--yellow": btnYellow,
        "btn--green": btnGreen,
        "btn--white": btnWhite,
        "btn--disabled": disabled,
        "btn--size-normal": SizeNormal,
        "btn--size-small": sizeSmall,
        "btn--size-big": sizeBig,




        // "btn--with-icon": withIcon ? true : false,



        [className]: className


    }

    )

    // const handelOnClick = () => {
    //     onClick();
    // }


    return (
        <button className={classes} onClick={onClick} type={type}>
            <span className='btn-core'>
                {children}
            </span>

        </button>
    );
}

export default Button;