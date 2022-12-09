import React from 'react';
import PropTypes from 'prop-types';
import "./style.scss"
import Image from '../Image/Image';
Product.propTypes = {

};

function Product(props) {
    return (
        <div className='product-wrapper'>

            <div className="product-item-wrapper">
                <div className='product-item'>
                    <div className="product-item__img">
                        <Image src="https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2022/08/02/combo-product-reno8-z-gold.png" />
                    </div>

                    <div className="product-item__title">
                        Sam Sung galaxy A13gb Chinhs hangg
                    </div>


                    <div className="product-item__price">
                        <div className="price--new">
                            8790000
                        </div>

                        <div className="price--old">
                            8560000
                        </div>
                    </div>
                </div>


            </div>

            <div className="product-item-wrapper">
                <div className='product-item'>
                    <div className="product-item__img">
                        <Image src="https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2022/09/26/image-removebg-preview-86.png" />
                    </div>

                    <div className="product-item__title">
                        Sam Sung galaxy A13gb Chinhs hangg
                    </div>


                    <div className="product-item__price">
                        <div className="price--new">
                            8790000
                        </div>

                        <div className="price--old">
                            8560000
                        </div>
                    </div>
                </div>

            </div>
            <div className="product-item-wrapper">
                <div className='product-item'>
                    <div className="product-item__img">
                        <Image src="https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2020/11/17/macmoi256.png" />
                    </div>

                    <div className="product-item__title">
                        Sam Sung galaxy A13gb Chinhs hangg
                    </div>


                    <div className="product-item__price">
                        <div className="price--new">
                            8790000
                        </div>

                        <div className="price--old">
                            8560000
                        </div>
                    </div>
                </div>

            </div>










        </div>
    );
}

export default Product;