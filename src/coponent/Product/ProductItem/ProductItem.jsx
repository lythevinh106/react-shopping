import React from 'react';
import PropTypes from 'prop-types';
import Image from './../../Image/Image';
import Button from '../../Button/Button';
import { ShoppingCartOutlined } from '@mui/icons-material';
import PopperWrapper from "../../PopperWapper/PopperWrapper"
import "./style.scss"
import { toast } from 'react-toastify';
ProductItem.propTypes = {

};

function ProductItem({ image, title, oldPrice, newPrice, }) {


    const handleBtnCartOnClick = () => {
        notifyCart();
    }



    const notifyCart = () => toast.success('thêm giỏ hàng thành công!', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

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
                        <Button btnRed SizeNormal >
                            Mua Ngay
                        </Button>

                        <Button btnRed SizeNormal onClick={handleBtnCartOnClick}>
                            Giỏ Hàng
                        </Button>

                    </div>


                </div>

            </PopperWrapper>
        </div>
    );
}

export default ProductItem;