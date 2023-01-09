import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import "./style.scss"
import ProductInfoSlider from './ProductInfoSlider/ProductInfoSlider';
import ProductInfoCenter from './ProductInfoCenter/ProductInfoCenter';
import PopperWrapper from '../PopperWapper/PopperWrapper';
import cln from "classnames"
import ApiProduct from '../../ApiService/ApiProduct';
ProductInfo.propTypes = {

};

function ProductInfo({ product, productImages }) {



    // console.log(productImages);
    // const { name, originalPrice, salePrice, shortDescription, description, thumbnail, id


    // } = product.product;


    // const productInfoCenter = {
    //     originalPrice,
    //     salePrice,
    //     shortDescription



    // }

    // console.log(productInfoCenter.salePrice)









    const [showReadMore, setShowReadMore] = useState(false);




    const handleDesOnClick = () => {

        setShowReadMore(!showReadMore);
    }


    return (
        <div className='product-info-wrapper'>

            <div className="product__title">
                {product.name}
            </div>
            <div className="product__main">


                <div className="product__main__slider">

                    <ProductInfoSlider images={productImages} />

                </div>

                <div className="product__main__center">
                    <ProductInfoCenter


                        product={product}

                    // originalPrice={originalPrice} salePrice={salePrice}
                    // shortDescription={shortDescription}


                    />
                </div>
            </div>



            <div className="product__des-wrapper">
                <PopperWrapper>
                    <div className="product__des">




                        <div className={cln("product__des__content", { active: showReadMore })}
                            dangerouslySetInnerHTML={{ __html: product.description }}
                        >


                        </div>

                        <div className={cln("product__des__btn", {
                            active: showReadMore
                        })}

                            onClick={handleDesOnClick}>
                            <span>  {showReadMore ?

                                "Thu Gọn" : "Xem Thêm"}</span>


                        </div>
                    </div>
                </PopperWrapper>
            </div >
        </div >
    );
}

export default ProductInfo;