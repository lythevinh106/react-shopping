import React from 'react';
import PropTypes from 'prop-types';
import { UserOutlined } from '@ant-design/icons';
import "./style.scss"
NavHeaderItem.propTypes = {

};

function NavHeaderItem(props) {
    return (
        <li className='item'>
            <span className="item_icon">
                <UserOutlined />
            </span>

            <div className="item_title">
                Tài Khoản Của Tôi
            </div>
        </li>
    );
}

export default NavHeaderItem;