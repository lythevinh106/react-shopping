import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import "./style.scss"
import { ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';

import NavHeaderItem from '../NavHeaderItem/NavHeaderItem';
import PopperWrapper from '../../../PopperWapper/PopperWrapper';
import { Link } from 'react-router-dom';
import Image from '../../../Image/Image';
import Button from '../../../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { RemoveAll, ToggleCart } from '../../../../features/Cart/CartSlice';
import FormatPrice from '../../../../until/FormatPrice/FormatPrice';

import emptyCart from "./../../../../storage/images/istockphoto-861576608-612x612.jpg"
import { totalPrice, totalQuantity } from '../../../../features/Cart/selector';

import ModalWrapper from '../../../Modal/ModalWrapper';
import FormRegister from '../../../Form/FormRegister/FormRegister';
import FormLogin from '../../../Form/FormLogin/FormLogin';
import AuthApi from '../../../../Service/Auth';
import { toast } from 'react-toastify';

NavHeader.propTypes = {

};

function NavHeader(props) {



    // const modalRef = useRef();

    const isMiniCart = useSelector((state) => state.cart.showMiniCart);
    const cartItems = useSelector((state) => state.cart.cartItems);


    const [showCart, setShowCart] = useState(isMiniCart);
    const [listItem, setListItem] = useState(cartItems);
    const cartTotalQuantity = useSelector(totalQuantity);
    const cartTotalPrice = useSelector(totalPrice);


    // console.log(cartItems);

    useEffect(() => {

        setListItem(cartItems);


    }, [cartItems])


    const dispatch = useDispatch();
    const handleOnMouseEnter = () => {

        dispatch(ToggleCart(true))
        setShowCart(true)

    }
    const handleOnBlur = () => {
        dispatch(ToggleCart(false))
        setShowCart(false)

    }

    const handleRemoveOnClick = () => {
        dispatch(RemoveAll());
    }


    const [isOpenModal, setIsOpenModal] = useState(false);

    const [isFormLogin, setFormLogin] = useState(true);

    const handleOpenModal = () => {
        setIsOpenModal(true);

    }

    const onCloseModal = () => {
        setIsOpenModal(false);

    }


    const handleChangeFormRegister = () => {

        setFormLogin(false);
    }


    const handleChangeFormLogin = () => {

        setFormLogin(true);
    }

    const notify = () => toast.success(' đăng kí thành công - hãy kiểm tra email của bạn!', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        style: {
            fontSize: 10,
            fontWeight: "bold",
            color: "#00483d",


        }
    });


    const notify2 = () => toast.error(' email của bạn đã có trong hệ thống vui lòng chọn email khác!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        style: {
            fontSize: 10,
            fontWeight: "bold",
            color: "#00483d",


        }

    });
    const handleRegisterSubmit = async (data) => {


        const response = await AuthApi.register(data);

        if (response.original.status == 203) {
            notify2();
            return;
        }
        if (response.original.status == 200) {
            notify();

            onCloseModal();
        }

        // if (response == 205) {

        // }

    }





    return (
        <ul className="header-nav">

            <ModalWrapper open={isOpenModal} onClose={onCloseModal}
                component={



                    isFormLogin ? <FormLogin onChangeForm={handleChangeFormRegister} ></FormLogin>
                        : <FormRegister onChangeForm={handleChangeFormLogin} onSubmit={handleRegisterSubmit} />





                }

            />




            <div className="header-nav__item" onClick={handleOpenModal}>
                <span > <PopperWrapper>
                    <NavHeaderItem icon={<UserOutlined />} title="Đăng Nhập" /></PopperWrapper>
                </span>


            </div>

            <div className="header-nav__item item--cart" onMouseLeave={handleOnBlur} onMouseEnter={handleOnMouseEnter}>
                <div className="item--cart-number">
                    <span>  {cartTotalQuantity}</span>
                </div>
                <Link to="/cart" > <PopperWrapper> <NavHeaderItem notSlug icon={<ShoppingCartOutlined />} title="Giỏ Hàng" /></PopperWrapper></Link>
                <div className="header-sub-cart" style={{
                    display: showCart === false ? "none" : ""
                }}>



                    {listItem.length > 0 && (
                        <PopperWrapper bubble >
                            <div className="header-sub-cart-wrapper">
                                <div className="cart-main">


                                    {listItem && (

                                        listItem.map((item) => {


                                            return (<div className="cart-item" key={item.id}>
                                                <div className="item__image">
                                                    <Image src={item.product.image} />
                                                </div>
                                                <div className="item__title">
                                                    {item.product.title}
                                                </div>

                                                <div className="item-info">
                                                    <div className="item__info--price">
                                                        {FormatPrice(item.product.oldPrice)}
                                                    </div>
                                                    <div className="item__info--quantity">
                                                        x{item.quantity}
                                                    </div>
                                                </div>
                                            </div>)
                                        })
                                    )}






                                </div>

                                <div className="cart-total">
                                    <div className="cart-total__quantity">
                                        Số Lượng: <span>{cartTotalQuantity}</span>
                                    </div>
                                    <div className="cart-total__price" >
                                        Tổng Tiền: <span>{FormatPrice(cartTotalPrice)}</span>
                                    </div>
                                </div>


                                <div className="cart-btn">

                                    <div className="cart-btn--detail">
                                        <Button to={"/cart"}>
                                            Xem Chi Tiết
                                        </Button>
                                    </div>
                                    <div className="cart-btn-remove">
                                        <Button onClick={handleRemoveOnClick}>
                                            Xóa Toàn Bộ
                                        </Button>
                                    </div>


                                </div>








                            </div>
                        </PopperWrapper>

                    )}

                    {listItem.length <= 0 && (

                        <div className='empty-cart'>
                            <Image src={emptyCart} />
                            <div className="empty-cart__title">
                                Giỏ Hàng Trống
                            </div>

                        </div>

                    )}

                </div>
            </div>








        </ul >
    );
}

export default NavHeader;