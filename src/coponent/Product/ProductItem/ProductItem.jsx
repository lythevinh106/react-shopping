import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Image from './../../Image/Image';
import Button from '../../Button/Button';
import { ShoppingCartOutlined } from '@mui/icons-material';
import PopperWrapper from "../../PopperWapper/PopperWrapper"
import "./style.scss"
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import ApiProduct from '../../../ApiService/ApiProduct';
import FormatPrice from '../../../until/FormatPrice/FormatPrice';
ProductItem.propTypes = {

};

function ProductItem({ image, title, oldPrice, newPrice, id }) {


    const navigate = useNavigate();








    const handleBtnCartOnClick = () => {
        notifyCart();
    }


    const handleNavigate = () => {
        navigate(`products/${id}`);

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
                    <div className="product-item__img" onClick={handleNavigate}>
                        <Image src={image} />
                    </div>

                    <div className="product-item__title">
                        {title}
                    </div>


                    <div className="product-item__price" onClick={handleNavigate}>
                        <div className="price--new">

                            {FormatPrice(newPrice)}

                        </div>

                        <div className="price--old">
                            {FormatPrice(oldPrice)}
                        </div>
                    </div>
                    <div className="product-item__btn">
                        <Button btnRed SizeNormal onClick={handleNavigate}>
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