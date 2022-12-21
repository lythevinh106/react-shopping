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
import { Link, useNavigate } from 'react-router-dom';
import SlugStr from '../../../../until/SlugStr/SlugStr';

CatHeader.propTypes = {

};

function CatHeader(props) {






    const navigate = useNavigate();





    const handleOnClick = (title) => {
        const newTitle = SlugStr(title);
        navigate(`/${newTitle}`);

    }




    return (
        <ul className='header-cat-wrapper'>
            <NavHeaderItem onClick={handleOnClick} catType icon={<MobileOutlined />} title="Điện thoại" />
            <NavHeaderItem onClick={handleOnClick} catType icon={<WatchIcon />} title="Đồng Hồ" />
            <NavHeaderItem onClick={handleOnClick} catType icon={<HeadphonesIcon />} title="Tai Nghe" />
            <NavHeaderItem onClick={handleOnClick} catType icon={<UsbOutlined />} title="Phụ Kiện" />
            <NavHeaderItem onClick={handleOnClick} catType icon={<CoffeeMakerIcon />} title="Gia Dụng" />
            <NavHeaderItem onClick={handleOnClick} catType icon={<MonitorIcon />} title="Màn Hình" />



            {/* <Link to="/MànHình">demooooooo
            </Link> */}



        </ul>
    );
}

export default CatHeader;