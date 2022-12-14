import React from 'react';
import PropTypes from 'prop-types';

import Slider from 'react-slick';
import Image from '../Image/Image';
import "./style.scss";
import TitleCart from '../TitleCart/TitleCart';
import FormatPrice from '../../until/FormatPrice/FormatPrice';
import PopperWrapper from '../PopperWapper/PopperWrapper';
import ProductItem from '../Product/ProductItem/ProductItem';


const sliderProductImage = [
    {
        id: 1,
        image: "https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2022/04/08/image-removebg-preview-1.png"
    },
    {
        id: 2,
        image: "https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2022/03/25/cam.png"
    },
    {
        id: 3,
        image: "https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2022/04/08/image-removebg-preview-3.png"
    },
    {
        id: 4,
        image: "https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2022/04/08/image-removebg-preview-1.png"
    },
    {
        id: 5,
        image: "https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2022/03/25/cam.png"
    },
    {
        id: 6,
        image: "https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2022/04/08/image-removebg-preview-3.png"
    },
    {
        id: 7,
        image: "https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2022/04/08/image-removebg-preview-1.png"
    },

]


function SubSlider(props) {



    const settingSlider = {


        slidesToShow: 5,
        swipeToSlide: true,
        focusOnSelect: true,

    }

    return (
        <div className='sub-slider-wrapper'>
            <div className="sub-slider--title">
                <TitleCart title='Gợi Ý Cho Bạn' btnOrange />
            </div>
            <Slider
                {...settingSlider}
            >

                {console.log("render slide")}
                {sliderProductImage.map((image) => {


                    return (
                        <div className="sub-slider-item-wrapper" key={image.id}>

                            <PopperWrapper>
                                <div className="sub-slider-item" >
                                    <div className="slider__img">
                                        <Image src={image.image} />
                                    </div>

                                    <div className="slider__title">
                                        Laptop GIGABYTE U4 UD-50VN823SO i5-1155G7/16GB/512GB SSD/14"
                                        FHD/UMA/Win11/Light Gray - Chính Hãng
                                    </div>
                                    <div key={image.id} className="slider__price">
                                        <div className="price--new">{FormatPrice(3000000)}</div>
                                        <div className="price--old">{FormatPrice(3000000)}</div>
                                    </div>
                                </div>


                            </PopperWrapper>
                        </div>

                    )
                })}
            </Slider>

        </div>
    );
}

export default SubSlider;