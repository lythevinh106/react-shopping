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
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, setQuantity } from '../../features/Cart/CartSlice';
import { totalPrice, totalQuantity } from '../../features/Cart/selector'

import { activeProgress } from '../../features/progress/progressSlice';
Cart.propTypes = {

};



function Cart(props) {
    const navigate = useNavigate();

    const cartItems = useSelector((state) => state.cart.cartItems);
    // console.log(cartItems)

    const initValue = cartItems.map((product) => {

        return {
            id: product.id,
            number: product.quantity,
            salePrice: product.product.newPrice,
            originalPrice: product.product.oldPrice,
            thumbnail: product.product.image,
            name: product.product.title,
        }
    })

    const [valueOrders, setValueOrders] = useState(initValue)

    const dispatch = useDispatch();


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


        dispatch(removeItem(id));




    }


    const handleBtnLessOnClick = (productId) => {
        dispatch(activeProgress(true))
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

        const newItem = newValue.find((value) => value.id == productId)


        dispatch(setQuantity(newItem));


        setTimeout(() => {
            dispatch(activeProgress(false))

        }, 1000)


    }

    const handleBtnPlusOnClick = (productId) => {
        dispatch(activeProgress(true))

        const oldItemValue = valueOrders.find((value) => value.id == productId);

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

        const newItem = newValue.find((value) => value.id == productId)


        dispatch(setQuantity(newItem));

        setTimeout(() => {
            dispatch(activeProgress(false))

        }, 1000)




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
    const cartTotalQuantity = useSelector(totalQuantity);
    const cartTotalPrice = useSelector(totalPrice);


    return (
        <div className='cart-wrapper'>

            {/* {cartTotalPrice}; */}
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

                                FormatPrice(cartTotalPrice)

                            }</span>
                        </div>
                        <div className="cart-total--item">
                            Giảm Giá:0
                        </div>

                        <div className="cart-total--item">
                            Tổng Thanh Toán <span className='cart-total--item__price'>{FormatPrice(cartTotalPrice)}</span>
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