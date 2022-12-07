import React from 'react';
import PropTypes from 'prop-types';
import "./style.scss"
import { ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';

import NavHeaderItem from '../NavHeaderItem/NavHeaderItem';
NavHeader.propTypes = {

};

function NavHeader(props) {
    const handleClick = () => {

        console.log("sdad")
    }
    return (
        <ul className="header-nav">
            <NavHeaderItem icon={<UserOutlined />} title="Thông Tin" onClick={handleClick} />
            <NavHeaderItem icon={<ShoppingCartOutlined />} title="Giỏ Hàng" />






        </ul>
    );
}

export default NavHeader;