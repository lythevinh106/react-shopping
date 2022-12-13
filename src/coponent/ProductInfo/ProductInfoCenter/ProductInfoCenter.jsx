import React from 'react';
import PropTypes from 'prop-types';
import "./style.scss"

import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Button from '../../Button/Button';
ProductInfoCenter.propTypes = {

};

function ProductInfoCenter(props) {
    return (
        <div className='info-center-wrapper'>
            <div className="info--price">
                <span className="info--price__new">
                    3,790,000 ₫
                </span>
                <span className="info--price__old">
                    3,690,000 ₫
                </span>
            </div>

            <div className="info--banner">
                <div className="info--banner--icon">
                    < AirplanemodeActiveIcon />
                </div>
                <div className="info--banner-title">
                    Miễn Phí Vận Chuyển Toàn Quốc
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


        </div>
    );
}

export default ProductInfoCenter;