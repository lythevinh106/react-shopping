import React from 'react';
import PropTypes from 'prop-types';
import "./style.scss"
MenuResultItem.propTypes = {

};

function MenuResultItem(props) {
    return (
        <li className='menu-result-item'>
            <div className="img">
                <img src="https://hoanghamobile.com/productlist/dst/Uploads/2022/01/04/s21-fe-12.png" alt="" />
            </div>
            <div className="info">
                <p className="info__desc">
                    Màn hình AOC CQ27G2/74 27inch/QHD/VA/144Hz/1ms/250nits/HDMI+DP/Freesync/Cong
                </p>

                <div className="info__price">
                    7,990,000 ₫
                </div>
            </div>
        </li>
    );
}

export default MenuResultItem;