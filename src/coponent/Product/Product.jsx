import React, { useEffect, useState, useRef, useMemo } from 'react';
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


    const [offSetHeight, setOffSetHeight] = useState(window.scrollY)
    const [products, setProducts] = useState([]);


    const [loadMore, SetLoadMore] = useState({

        _start: 0,
        _limit: 30

    });
    const [isScroll, setIsScroll] = useState(false);
    useEffect(() => {

        const handleScroll = () => {


            setOffSetHeight(window.scrollY);


        }

        window.addEventListener("scroll", handleScroll);


        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])




    let dem = useRef(0);

    useEffect(() => {


        if (products.length < 0) {
            return
        }


        try {
            const getAllProduct = (async () => {
                const response = await ApiProduct.getAllProduct(loadMore);

                setProducts(response.data.data);
                // console.log("ham chinh")
                if (dem.current > 0) {
                    setIsScroll(true);
                }
            })();
        } catch (error) {

        }

        return () => {

            // setIsScroll(true);
            dem.current++
        }




    }, [loadMore]);

    // console.log("dât la render của load moare")
    useEffect(() => {

        if (isScroll === false) return;

        // console.log("day la scroll")
        window.scrollTo({

            top: (offSetHeight + 800),
            behavior: "smooth"
        })
        setIsScroll(false)



    }, [isScroll])











    const handleLoadMoreClick = () => {


        SetLoadMore((prev) => {

            return {
                ...prev,
                _limit: prev._limit + 15
            }
        })


    }





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