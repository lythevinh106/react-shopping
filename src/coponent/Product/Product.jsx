import React, { useEffect, useState, useRef, useMemo } from 'react';
import PropTypes from 'prop-types';
import "./style.scss"

import ProductItem from './ProductItem/ProductItem';
import PopperWrapper from '../PopperWapper/PopperWrapper';
import ApiProduct from '../../ApiService/ApiProduct';
import Button from '../Button/Button';
import { baseUrl } from '../../constanst/UrlContanst';
import TitleCart from '../TitleCart/TitleCart';
import ProgressHeader from '../../ProgressHeader/ProgressHeader';
import { useDispatch } from 'react-redux';
import { activeProgress } from '../../features/progress/progressSlice';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

Product.propTypes = {

};

function Product({ TypeProducts = null, headerTitle, isPagination = false, limit = 30, limitLoad = 15 }) {


    const [offSetHeight, setOffSetHeight] = useState(window.scrollY)
    const [products, setProducts] = useState([]);

    const dispatch = useDispatch();


    const [loadMore, SetLoadMore] = useState({

        _start: 0,
        _limit: limit

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
        dispatch(activeProgress(true));




        try {
            const getAllProduct = (async () => {
                const response = await ApiProduct.getAllProduct(loadMore);

                setProducts(response.data.data);
                // console.log("ham chinh")
                if (dem.current > 0) {
                    setIsScroll(true);
                }

                dispatch(activeProgress(false));
            })();
        } catch (error) {

        }



        return () => {

            // setIsScroll(true);
            dem.current++;

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
                _limit: prev._limit + limitLoad
            }
        })


    }
    const handlePaginationChange = (event, value) => {


        console.log("handle  paginationchange", value)
    }




    return (


        <div className="product-wrapper">

            <div className="product-header">


                <TitleCart title={headerTitle} btnOrange />
            </div>

            <div className='product-main'>


                {products && (

                    products.map((product, index) => {

                        const productAtr = {
                            image: `${baseUrl}${product.thumbnail?.url}`,
                            title: product.name,
                            newPrice: product.salePrice,
                            oldPrice: product.originalPrice,
                            id: product.id


                        }
                        return (


                            <ProductItem key={product.id} {...productAtr} />
                        )
                    })

                )}




            </div >



            {
                isPagination == false ? <div className="product__load-more">
                    <Button btnWhite onClick={handleLoadMoreClick}>Xem thêm </Button>

                </div> :
                    <span className='product_pagination'> <Stack spacing={2}>

                        <Pagination page={1} count={10} defaultPage={1} color="primary" size='large' onChange={handlePaginationChange} />

                    </Stack>
                    </span>





            }


        </div >

    );
}

export default Product;