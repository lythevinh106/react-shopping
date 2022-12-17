import React from 'react';
import PropTypes from 'prop-types';
import "./style.scss"

import ProductItem from "../../coponent/Product/ProductItem/ProductItem"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';
Cart.propTypes = {

};

const fakeApi = [
    {
        id: 1,
        name: "Samsung Galaxy S22 Plus - 8GB/128GB - Chính hãng",
        thumbnail: "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2022/02/09/image-removebg-preview_637800437459949020.png",
        originalPrice: 16333332,
        salePrice: 26333333,

    },
    {
        id: 2,
        name: "Samsung Galaxy S22 Plus - 8GB/128GB - Chính hãng",
        thumbnail: "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2022/02/09/image-removebg-preview_637800437459949020.png",
        originalPrice: 16333332,
        salePrice: 26333333,

    }
]


function Cart(props) {
    const navigate = useNavigate();

    const handleCartBackClick = () => {
        navigate(-1);

    }
    return (
        <div className='cart-wrapper'>
            <div className="cart__back" onClick={handleCartBackClick}>
                <span className='cart__back__icon'>

                    <ArrowBackIosIcon />

                </span>

                <div className="cart__back__title">
                    Quay Lại
                </div>
            </div>
            <div className="cart__main">

                <div className="cart__main--info" >
                    <div className="cart-icon">
                        <CheckCircleIcon />
                    </div>
                    <div className="cart-item">




                        <div className="cart-item-product-wrapper">
                            <div className="cart-item__product">
                                <ProductItem
                                    oldPrice={fakeApi[0].salePrice}
                                    newPrice={fakeApi[0].originalPrice}

                                    image={fakeApi[0].thumbnail}
                                    title={fakeApi[0].name}
                                    id={fakeApi[0].id}
                                />
                            </div>
                            <div className="cart-item__control">

                            </div>
                        </div>






                    </div>
                </div>

            </div>

            <div className="cart__main--form" >


            </div>



        </div>
    );
}

export default Cart;