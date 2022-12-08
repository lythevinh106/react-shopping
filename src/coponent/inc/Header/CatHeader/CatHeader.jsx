import React from 'react';
import PropTypes from 'prop-types';
import NavHeaderItem from '../NavHeaderItem/NavHeaderItem';
import { MobileOutlined, ShoppingCartOutlined, UsbOutlined } from '@ant-design/icons';

import WatchIcon from '@mui/icons-material/Watch';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import TabletAndroidIcon from '@mui/icons-material/TabletAndroid';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import CoffeeMakerIcon from '@mui/icons-material/CoffeeMaker';
import MonitorIcon from '@mui/icons-material/Monitor';
import "./style.scss"


CatHeader.propTypes = {

};

function CatHeader(props) {
    return (
        <ul className='header-cat-wrapper'>
            <NavHeaderItem catType icon={<MobileOutlined />} title="Điện thoại" />
            <NavHeaderItem catType icon={<WatchIcon />} title="Đồng Hồ" />
            <NavHeaderItem catType icon={<HeadphonesIcon />} title="Tai Nghe" />
            <NavHeaderItem catType icon={<UsbOutlined />} title="Phụ Kiện" />
            <NavHeaderItem catType icon={<CoffeeMakerIcon />} title="Gia Dụng" />
            <NavHeaderItem catType icon={<MonitorIcon />} title="Màn Hình" />



        </ul>
    );
}

export default CatHeader;