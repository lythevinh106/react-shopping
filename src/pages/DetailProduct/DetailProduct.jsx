import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';


import "./style.scss";




import ProductInfo from '../../coponent/ProductInfo/ProductInfo';
import { useParams } from 'react-router-dom';
import ApiProduct from '../../ApiService/ApiProduct';

DetailProduct.propTypes = {

};














function DetailProduct(props) {
    const [product, setProduct] = useState({});

    const linkParam = useParams();

    const { productId } = linkParam;


    useEffect(() => {


        const getApi = (async () => {

            try {

                const response = await ApiProduct.getProduct(productId);

                setProduct(response.data);

                // window.scrollTo({
                //     top: 0,
                //     behavior: "smooth"
                // })


            } catch (error) {

                // }
            }


        })();



    }, [productId]);


    return (
        <div className='detail-product-wrapper'>







            <div className="detail-product__main" >
                <ProductInfo product={product} />
            </div>



        </div>
    );
}

export default DetailProduct;