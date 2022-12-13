import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';


import "./style.scss";
import SubBanner from '../../coponent/SubBanner/SubBanner';

import AboutUs from '../../coponent/AboutUs/AboutUs';
import Contact from '../../coponent/Contact/Contact';
import ProductInfo from '../../coponent/ProductInfo/ProductInfo';

DetailProduct.propTypes = {

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






const bigBanner = [


    {
        id: 1,
        image: "https://cdn.hoanghamobile.com/i/home/Uploads/2022/12/08/1200x200-hotsale-galaxy-a-series-01-1.jpg"
    },




]











function DetailProduct(props) {






    return (
        <div className='detail-product-wrapper'>



            <div className="detail-product__sub-banner" >
                <SubBanner listBanner={bigBanner} col1 />
            </div>



            <div className="detail-product__main" >
                < ProductInfo />
            </div>



            <div className="detail-product__about-us">
                <AboutUs />
            </div>

            <div className="detail-product__contact">
                <Contact />
            </div>


        </div>
    );
}

export default DetailProduct;