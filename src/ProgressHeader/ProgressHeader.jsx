import React from 'react';
import PropTypes from 'prop-types';
import "./style.scss"
import { LinearProgress } from '@mui/material';
import cln from "classnames"
ProgressHeader.propTypes = {

};

function ProgressHeader({ active }) {


    const classes = cln("progress-header-wrapper", {

        active
    })

    return (
        <div className={classes}>
            <LinearProgress color="inherit" />
        </div>
    );
}

export default ProgressHeader;