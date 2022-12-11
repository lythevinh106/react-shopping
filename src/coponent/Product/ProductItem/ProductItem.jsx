import React from 'react';
import PropTypes from 'prop-types';
import Image from './../../Image/Image';
import Button from '../../Button/Button';
import { ShoppingCartOutlined } from '@mui/icons-material';
import PopperWrapper from "../../PopperWapper/PopperWrapper"
import "./style.scss"
ProductItem.propTypes = {

};

function ProductItem({ image, title, oldPrice, newPrice, }) {
    return (
        <div className="product-item-wrapper">
            <PopperWrapper>
                <div className='product-item'>
                    <div className="product-item__img">
                        <Image src={image} />
                    </div>

                    <div className="product-item__title">
                        {title}
                    </div>


                    <div className="product-item__price">
                        <div className="price--new">
                            {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(newPrice)}
                        </div>

                        <div className="price--old">
                            {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(oldPrice)}
                        </div>
                    </div>
                    <div className="product-item__btn">
                        <Button btnRed SizeNormal  >
                            <span> Mua Ngay</span>
                        </Button>

                        <Button btnRed SizeNormal >
                            Giỏ Hàng


                        </Button>

                    </div>


                </div>

            </PopperWrapper>
        </div>
    );
}

export default ProductItem;