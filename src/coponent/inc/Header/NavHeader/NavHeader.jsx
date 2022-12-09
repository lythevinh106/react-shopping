import React from 'react';
import PropTypes from 'prop-types';
import "./style.scss"
import { ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';

import NavHeaderItem from '../NavHeaderItem/NavHeaderItem';
import PopperWrapper from '../../../PopperWapper/PopperWrapper';
NavHeader.propTypes = {

};

function NavHeader(props) {
    const handleClick = () => {

        console.log("sdad")
    }
    return (
        <ul className="header-nav">

            <div className="header-nav__item">
                <PopperWrapper>    <NavHeaderItem icon={<UserOutlined />} title="Thông Tin" onClick={handleClick} /></PopperWrapper>

            </div>
            <div className="header-nav__item">
                <PopperWrapper> <NavHeaderItem icon={<ShoppingCartOutlined />} title="Giỏ Hàng" /></PopperWrapper>

            </div>








        </ul>
    );
}

export default NavHeader;