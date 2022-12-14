import React from 'react';
import PropTypes from 'prop-types';
import "./style.scss"

import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Button from '../../Button/Button';
import PopperWrapper from '../../PopperWapper/PopperWrapper';
import FormatPrice from '../../../until/FormatPrice/FormatPrice';
ProductInfoCenter.propTypes = {

};

function ProductInfoCenter(productInfoCenter) {

    const { originalPrice,
        salePrice,
        shortDescription, } = productInfoCenter.productInfoCenter




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


                <div className="info--btn">
                    <div className="info--btn__buy">
                        <Button btnRed sizeBig >

                            <div className='btn--title'>Mua Ngay</div>
                            <div className='btn--title'>Giao Tận Nhà (COD)

                            </div>
                            <div className='btn--title'>  hoặc   nhận tại cửa hàng</div>


                        </Button>
                    </div>
                    <div className="info--btn_cart">
                        <Button sizeBig >
                            <div className="btn-cart__icon">
                                <AddShoppingCartIcon />
                            </div>
                            <div className="btn-cart__title">


                                <div className="btn--title">
                                    Thêm Giỏ Hàng
                                </div>
                            </div>
                        </Button>


                    </div>
                </div>


            </div >
        </PopperWrapper>
    );
}

export default ProductInfoCenter;