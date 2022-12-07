import React from 'react';
import PropTypes from 'prop-types';
import "./styles.scss";
import MenuResultItem from './MenuResultItem/MenuResultItem';
MenuResult.propTypes = {

};

function MenuResult(props) {
    return (
        <ul className='menu-result'>
            <MenuResultItem />
            <MenuResultItem />
            <MenuResultItem />

        </ul>
    );
}

export default MenuResult;