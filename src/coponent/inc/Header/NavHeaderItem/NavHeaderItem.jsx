import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { UserOutlined } from '@ant-design/icons';
import "./style.scss"
NavHeaderItem.propTypes = {

    title: PropTypes.string.isRequired,
    onClick: PropTypes.func



};

NavHeaderItem.defaultProps = {

    title: "",
    onClick: () => {

    }


}

function NavHeaderItem({ icon = <Fragment></Fragment>, title, onClick }) {

    // const handleOnclick = () => {

    //     onClick(5)

    // }

    const props = {
        onClick
    }

    return (
        <li className='item' {...props}>
            <span className="item_icon">
                {icon}
            </span>

            <div className="item_title">
                {title}
            </div>
        </li>
    );
}

export default NavHeaderItem;