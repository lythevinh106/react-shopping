import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import "./style.scss"

import ProductItem from './ProductItem/ProductItem';
import PopperWrapper from '../PopperWapper/PopperWrapper';
import ApiProduct from '../../ApiService/ApiProduct';
import Button from '../Button/Button';
import { baseUrl } from '../../constanst/UrlContanst';
Product.propTypes = {

};

function Product({ TypeProducts = null, headerTitle }) {


    const [offSetHeight, setOffSetHeight] = useState(0)


    const [products, setProducts] = useState([]);

    const [loadMore, SetLoadMore] = useState({

        _start: 0,
        _limit: 15

    });



    const handleLoadMoreClick = () => {
        SetLoadMore((prev) => {

            return {
                ...prev,
                _limit: prev._limit + 15
            }
        })


        window.scroll(0, offSetHeight);
        console.log(offSetHeight)

    }
    // const handleScroll = () => {
    //     console.log("ham scroll")
    //     window.scroll(0, 300)
    // }



    useEffect(() => {

        if (products.length < 0) {
            return
        }
        console.log("ham effect")

        try {
            const getAllProduct = (async () => {
                const response = await ApiProduct.getAllProduct(loadMore);

                setProducts(response.data.data);
                // console.log("productdata", response.data.data);





            })();
        } catch (error) {

        }




        const offset = (document.body.getBoundingClientRect().top * (-1)) + 800;
        setOffSetHeight(offset);





        // return () => {


        //     // console.log("day la do dep")
        //     // window.scroll(0, window.scrollY)







        // }



    }, [loadMore]);









    return (


        <div className="product-wrapper">

            <div className="product-header">
                {headerTitle}
            </div>

            <div className='product-main'>


                {products && (

                    products.map((product, index) => {

                        const productAtr = {
                            image: `${baseUrl}${product.thumbnail?.url}`,
                            title: product.name,
                            newPrice: product.salePrice,
                            oldPrice: product.originalPrice


                        }
                        return (


                            <ProductItem key={product.id} {...productAtr} />
                        )
                    })

                )}




            </div >


            <div className="product__load-more">
                <Button btnWhite onClick={handleLoadMoreClick}>
                    Xem thêm
                </Button>
            </div>
        </div>

    );
}

export default Product;