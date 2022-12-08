import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { UserOutlined } from '@ant-design/icons';
import "./style.scss"

import cln from "classnames"
import { useNavigate } from 'react-router-dom';
NavHeaderItem.propTypes = {

    title: PropTypes.string.isRequired,
    onClick: PropTypes.func



};

NavHeaderItem.defaultProps = {

    title: "",
    onClick: () => {

    }


}

function NavHeaderItem({ icon = <Fragment></Fragment>, title, catType = false, fontThin = false, onClick }) {

    // const handleOnclick = () => {

    //     onClick(5)

    // }


    let navigate = useNavigate();


    const handleOnClick = () => {
        navigate("category");
    }


    const props = {
        onClick: catType ? handleOnClick : () => {

        }
    }





    const classes = cln(
        "item", {
        "item--cat": catType,



    }
    )



    return (
        <li className={classes} {...props}>
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