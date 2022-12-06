import React from 'react';
import PropTypes from 'prop-types';
import "./style.scss"

import NavHeaderItem from '../NavHeaderItem/NavHeaderItem';
NavHeader.propTypes = {

};

function NavHeader(props) {
    return (
        <ul className="header-nav">
            <NavHeaderItem />
            <NavHeaderItem />
            <NavHeaderItem />



        </ul>
    );
}

export default NavHeader;