import React from 'react';
import PropTypes from 'prop-types';
import "./style.scss"
import Image from '../../../../Image/Image';
import { baseUrl } from '../../../../../constanst/UrlContanst';
MenuResultItem.propTypes = {

};

function MenuResultItem({ product, onClick }) {
    return (
        <li className='menu-result-item' onClick={() => {

            onClick(product);
        }
        }>
            <div className="img">

                <Image className="img_inner" src={`${baseUrl}${product?.thumbnail?.formats?.thumbnail?.url}`} alt="" />
            </div>
            <div className="info">
                <p className="info__desc">
                    {product.name}
                </p>

                <div className="info__price">


                    {new Intl.NumberFormat('vi', { style: 'currency', currency: 'VND' }).format(product.salePrice)}
                </div>
            </div>
        </li>
    );
}

export default MenuResultItem;