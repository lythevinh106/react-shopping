import React from 'react';
import PropTypes from 'prop-types';
import "./style.scss"
import { ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';

import NavHeaderItem from '../NavHeaderItem/NavHeaderItem';
import PopperWrapper from '../../../PopperWapper/PopperWrapper';
import { Link } from 'react-router-dom';
NavHeader.propTypes = {

};

function NavHeader(props) {
    const handleClick = () => {

        console.log("sdad")
    }
    return (
        <ul className="header-nav">

            <div className="header-nav__item">
                <Link to="/info"> <PopperWrapper>    <NavHeaderItem icon={<UserOutlined />} title="Thông Tin" onClick={handleClick} /></PopperWrapper></Link>


            </div>
            <div className="header-nav__item">
                <Link to="/cart"> <PopperWrapper> <NavHeaderItem icon={<ShoppingCartOutlined />} title="Giỏ Hàng" /></PopperWrapper></Link>

            </div>








        </ul>
    );
}

export default NavHeader;