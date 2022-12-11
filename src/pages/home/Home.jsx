import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import SliderImage from '../../coponent/SliderImage/SliderImage';
import "./style.scss";
import SubBanner from '../../coponent/SubBanner/SubBanner';
import Product from '../../coponent/Product/Product';
import ApiProduct from '../../ApiService/ApiProduct';
import AboutUs from '../../coponent/AboutUs/AboutUs';
import Contact from '../../coponent/Contact/Contact';

Home.propTypes = {

};


const dataSlider = [{
    id: 1,
    image: "https://cdn.hoanghamobile.com/i/home/Uploads/2022/12/08/galaxy-z-fold4-z-flip4-noel-1200x3821111111111111111.jpg",
    title: "slide1"

},
{
    id: 2,
    image: "https://cdn.hoanghamobile.com/i/home/Uploads/2022/12/07/ipad-apple-web.jpg"
    , title: "slide2"


},

{
    id: 3,
    image: "https://cdn.hoanghamobile.com/i/home/Uploads/2022/11/30/amazfit-gts-2-mini-1200x382-1.jpg"
    , title: "slide3"


},
{
    id: 4,
    image: "https://cdn.hoanghamobile.com/i/home/Uploads/2022/11/30/xiaomi-tong-t12-1200x382.jpg"
    , title: "slide4"


},



]


const ListSubBanner = [


    {
        id: 1,
        image: "https://cdn.hoanghamobile.com/i/home/Uploads/2022/08/11/chuyen-trang-samssung-11.png"
    },

    {
        id: 2,
        image: "https://cdn.hoanghamobile.com/i/home/Uploads/2022/12/07/sanphamhot11.jpg"
    }

    ,
    {
        id: 3,
        image: "https://cdn.hoanghamobile.com/i/home/Uploads/2022/11/01/sanphamhot-12-lite-1.jpg"
    },


    {
        id: 4,
        image: "https://cdn.hoanghamobile.com/i/home/Uploads/2022/10/04/huawei-d14-banner-nho-01.jpg"
    },


]











function Home(props) {



    return (
        <div className='home-wrapper'>


            <div className="home__slider">
                <SliderImage dataSlider={dataSlider} />
            </div>

            <div className="home__sub-banner">
                <SubBanner listBanner={ListSubBanner} />
            </div>


            <div className="home__product">


                <Product headerTitle="TỔNG HỢP SẢN PHẨM " />
                {/* <Product headerTitle="SẢN PHẨM BÁN CHẠY" products={productsData} /> */}
            </div>

            <div className="home__about-us">
                <AboutUs />
            </div>

            <div className="home__contact">
                <Contact />
            </div>


        </div>
    );
}

export default Home;