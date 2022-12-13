import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import "./style.scss"
import ProductInfoSlider from './ProductInfoSlider/ProductInfoSlider';
import ProductInfoCenter from './ProductInfoCenter/ProductInfoCenter';

ProductInfo.propTypes = {

};

function ProductInfo(props) {




    return (
        <div className='product-info-wrapper'>

            <div className="product__title">
                Điện thoại di động Samsung Galaxy A13 4GB/128GB - Chính hãng
            </div>
            <div className="product__main">
                <div className="product__main__slider">

                    <ProductInfoSlider />

                </div>

                <div className="product__main__center">
                    <ProductInfoCenter />
                </div>
            </div>



            <div className="product__des">

            </div>
        </div >
    );
}

export default ProductInfo;