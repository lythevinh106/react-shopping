import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import "./style.scss"

import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Button from '../../Button/Button';
import PopperWrapper from '../../PopperWapper/PopperWrapper';
import FormatPrice from '../../../until/FormatPrice/FormatPrice';


import ModalBuyNow from '../../ModalBuyNow/ModalBuyNow';
import { useDispatch } from 'react-redux';

import { addToCart } from "./../../../features/Cart/CartSlice.js"
import { activeProgress } from "./../../../features/progress/progressSlice.js"



import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';



ProductInfoCenter.propTypes = {

};

function ProductInfoCenter({ productInfoCenter }) {


    // console.log(productInfoCenter);

    const [open, setOpen] = useState(false);




    const dispatch = useDispatch();

    const { originalPrice,
        salePrice,
        shortDescription, } = productInfoCenter

    const handleOnClickBtnBuy = () => {
        setOpen(true)
    }

    const handleModalClick = () => {
        setOpen(false)
    }

    const handleBtnAddCartOnClick = (e, product) => {

        // console.log(id);

        dispatch(activeProgress(true));
        dispatch(addToCart(product))

        setTimeout(() => {
            dispatch(activeProgress(false));
        }, 900);
        handlePopupClick(e);


    }



    ///*----------

    const [anchorEl, setAnchorEl] = React.useState(null)
    const open2 = Boolean(anchorEl);
    const handlePopupClick = (event) => {
        setAnchorEl(document.body);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };




    return (
        <PopperWrapper>
            <div className='info-center-wrapper'>
                <div className="info--price">
                    <span className="info--price__new">
                        {FormatPrice(salePrice)}
                    </span>
                    <span className="info--price__old">

                        {FormatPrice(originalPrice)}
                    </span>
                </div>


                <PopperWrapper>
                    <div className="info--banner">


                        <div className="info--banner--icon">
                            < AirplanemodeActiveIcon />
                        </div>
                        <div className="info--banner-title">
                            Miễn Phí Vận Chuyển Toàn Quốc
                        </div>

                    </div>
                </PopperWrapper>



                <div className="info--desc">
                    <div className="info--desc--title">
                        Mô Tả
                    </div>

                    <div className="info--desc--main">


                        {shortDescription}

                    </div>


                </div>


                <ModalBuyNow productInfoCenter={productInfoCenter} open={open} onClick={handleModalClick} />

                <div className="info--btn">





                    <div className="info--btn__buy">
                        <Button btnRed sizeBig onClick={handleOnClickBtnBuy}>



                            <div className='btn--title'>Mua Ngay</div>
                            <div className='btn--title'>Giao Tận Nhà (COD)

                            </div>
                            <div className='btn--title'>  hoặc   nhận tại cửa hàng</div>


                        </Button>
                    </div>
                    <div className="info--btn_cart"

                    >

                        <Button sizeBig
                            id="basic-button"
                            aria-controls={open2 ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open2 ? 'true' : undefined}

                            onClick={(e) => {
                                handleBtnAddCartOnClick(e, {


                                    id: productInfoCenter.id,
                                    product: {
                                        oldPrice: productInfoCenter.originalPrice
                                        ,
                                        newPrice: productInfoCenter.salePrice

                                        , image: "https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2022/04/08/image-removebg-preview-3.png",
                                        title: productInfoCenter.name
                                    },
                                    quantity: 1,




                                })
                            }}


                        >
                            <div className="btn-cart__icon">
                                <AddShoppingCartIcon />
                            </div>
                            <div className="btn-cart__title">


                                <div className="btn--title" >
                                    Thêm Giỏ Hàng
                                </div>
                            </div>
                        </Button>







                    </div>


                </div>

            </div>

            <div>
                <Button

                >
                    Dashboard
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open2}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}

                    transformOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}

                >
                    <PopperWrapper>
                        <div className="btn-cart-modal">

                            <div className="btn-cart-modal__title">
                                Thêm Giỏ Hàng Thành Công
                            </div>
                            <div className="btn-cart-modal__detail">
                                <Button to="/cart">
                                    Xem Chi Tiết
                                </Button>
                            </div>
                        </div>
                    </PopperWrapper>
                </Menu>
            </div>

        </PopperWrapper >
    );
}

export default ProductInfoCenter;