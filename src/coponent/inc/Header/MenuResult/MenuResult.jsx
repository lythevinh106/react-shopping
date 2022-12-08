import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import "./styles.scss";
import MenuResultItem from './MenuResultItem/MenuResultItem';
import { useNavigate } from 'react-router-dom';
MenuResult.propTypes = {

};

function MenuResult({ products, input }) {
    let navigate = useNavigate();
    console.log("products", products)

    const handleOnclick = (product) => {

        input.current.focus();
        input.current.value = product.name

        navigate(`product/${product.id}`);
    }

    return (
        <ul className='menu-result'>

            < MenuResultItem product={products} onClick={handleOnclick} />



            {/* { this is true code because  not have true Api 

                products.map((product) => {
                    < MenuResultItem product={product} />


                })
            } */}





        </ul>
    );
}

export default MenuResult;