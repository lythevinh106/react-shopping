import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import "./style.scss"

import ProductItem from "../../coponent/Product/ProductItem/ProductItem"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';
import Button from "../../coponent/Button/Button"
import ControlOrder from "../../coponent/ControlOrder/ControlOrder"
import CloseIcon from '@mui/icons-material/Close';
import cln from "classnames"
import { number } from 'yup/lib/locale';
import PopperWrapper from '../../coponent/PopperWapper/PopperWrapper';
import FormatPrice from '../../until/FormatPrice/FormatPrice';
import FormPayment from '../../coponent/FormPayment/FormPayment';

Cart.propTypes = {

};

const fakeApi = [
    {
        id: 1,
        name: "Samsung Galaxy S24 Plus - 8GB/128GB - Chính hãng",
        thumbnail: "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2022/02/09/image-removebg-preview_637800437459949020.png",
        originalPrice: 20000,
        salePrice: 10000,
        number: 2

    },
    {
        id: 2,
        name: "Samsung Galaxy S23 Plus - 8GB/128GB - Chính hãng",
        thumbnail: "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2022/02/09/image-removebg-preview_637800437459949020.png",
        originalPrice: 12000,
        salePrice: 11000,
        number: 1

    },
    {
        id: 3,
        name: "Samsung Galaxy S23 Plus - 8GB/128GB - Chính hãng",
        thumbnail: "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2022/02/09/image-removebg-preview_637800437459949020.png",
        originalPrice: 1999000,
        salePrice: 213000,
        number: 4

    }
]


function Cart(props) {
    const navigate = useNavigate();

    // const [close, setOpenProduct] = useState(true);
    const initValue = fakeApi.map((product) => {

        return {
            id: product.id,
            number: product.number,
            salePrice: product.salePrice,
            originalPrice: product.originalPrice,
            thumbnail: product.thumbnail,
            name: product.name,
        }
    })

    const [valueOrders, setValueOrders] = useState(initValue)


    // console.log(valueOrders);
    const handleCartBackClick = () => {
        navigate(-1);

    }


    const handleBtnCloseOnClick = (id) => {

        const newValue = valueOrders.filter((value) => {
            return value.id !== id
        })

        setValueOrders((prev) => {
            return [

                ...newValue
            ]
        })




    }


    const handleBtnLessOnClick = (productId) => {
        const oldItemValue = valueOrders.find((value) => value.id == productId);
        // console.log(oldItemValue);
        if (oldItemValue.number <= 1)
            return;

        const newValue = [...valueOrders];


        newValue.forEach((value, index) => {

            if (value.id == productId) {
                value.number -= 1;
            }
        })

        setValueOrders(
            [...newValue]
        )


    }

    const handleBtnPlusOnClick = (productId) => {

        const oldItemValue = valueOrders.find((value) => value.id == productId);
        // console.log(oldItemValue);
        if (oldItemValue.number >= 10)
            return;

        const newValue = [...valueOrders];


        newValue.forEach((value, index) => {

            if (value.id == productId) {
                value.number += 1;
            }
        })

        setValueOrders(
            [...newValue]
        )

    }


    const TotalPrice = useMemo(() => {

        let total = 0;

        valueOrders.forEach((value) => {

            total += value.number * value.salePrice;

        })
        return total;
    }, [valueOrders])



    const handleOnSubmit = (data) => {

        console.log(data)


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








                    {valueOrders.map((product) => {

                        return (
                            <div className={cln(
                                "cart-item", {
                                // "hidden": !openProduct
                            }
                            )}
                                key={product.id}
                            >

                                <div className="cart__btn-close">
                                    <Button rounded btnRed
                                        onClick={() => { handleBtnCloseOnClick(product.id) }}
                                    >
                                        <CloseIcon />
                                    </Button>


                                </div>








                                <div className="cart-item-product-wrapper">
                                    <div className="cart-item__product">






                                        <ProductItem cartStyle
                                            oldPrice={product.originalPrice * product.number}


                                            newPrice={
                                                product.salePrice * product.number

                                            }

                                            image={product.thumbnail}
                                            title={product.name}
                                            id={product.id}
                                        />
                                    </div>
                                    <div className="cart-item__control">
                                        <ControlOrder
                                            btnLessOnClick={() => handleBtnLessOnClick(product.id)}
                                            btnPlusOnClick={() => handleBtnPlusOnClick(product.id)}

                                        >

                                            <input
                                                readOnly

                                                value={product.number}



                                            />
                                        </ControlOrder>
                                    </div>
                                </div>



                            </div>
                        )
                    })}




                    <div className="cart-total">
                        <div className="cart-total--item">

                            Tổng giá Trị:  <span className='cart-total--item__price'>  {

                                FormatPrice(TotalPrice)

                            }</span>
                        </div>
                        <div className="cart-total--item">
                            Giảm Giá:0
                        </div>

                        <div className="cart-total--item">
                            Tổng Thanh Toán <span className='cart-total--item__price'>{FormatPrice(TotalPrice)}</span>
                        </div>
                    </div>



                </div>

            </div>

            <div className="cart__main--form" >
                <div className="cart__main--form__title">

                    Thông Tin Đặt Hàng
                </div>
                <div className="cart__main--form__info"> <FormPayment onSubmit={handleOnSubmit} /></div>

            </div>



        </div>
    );
}

export default Cart;