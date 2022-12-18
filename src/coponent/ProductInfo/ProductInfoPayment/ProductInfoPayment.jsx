import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import "./style.scss"
import Image from '../../Image/Image';
import Button from '../../Button/Button';
import HeadphonesIcon from '@mui/icons-material/Headphones';

import InputField from "../../Form/InputField/InputField"
import ControlOrder from '../../ControlOrder/ControlOrder';



import FormatPrice from '../../../until/FormatPrice/FormatPrice';
import FormPayment from '../../FormPayment/FormPayment';
ProductInfoPayment.propTypes = {

};

function ProductInfoPayment({ productInFo }) {



    // console.log(productInFo);


    const [orderNumber, setOrderNumber] = useState(1)

    const handleControlOrderChange = (data) => {
        setOrderNumber(data);

    }

    const [valueInput, setValueInput] = useState(1);
    const handleBtnLessOnClick = () => {

        if (valueInput <= 1) return;

        setValueInput((prev) => {


            return prev - 1;
        })
    }

    const handleBtnPlusOnClick = () => {

        if (valueInput >= 10) return;

        setValueInput((prev) => {


            return prev + 1;
        })
    }

    useEffect(() => {

        const handleChange = () => {
            // form.setValue("order", valueInput);

            handleControlOrderChange(valueInput)

        }
        handleChange();
    }, [valueInput]);




    const handleOnSubmit = (data) => {


        const newDataForm = {
            ...data,
            number: orderNumber
        }

        console.log(newDataForm);


    }


    return (
        <div className='product-info-payment'>
            <div className="product-info">
                <div className="product-info__img">
                    <Image src="asdd" />
                </div>
                <div className="product-info__name">
                    {productInFo.name}
                </div>
                <div className="product-info__price">
                    <div className="new-price">

                        {FormatPrice(productInFo.salePrice * orderNumber)}
                    </div>
                    <div className="old-price">
                        {FormatPrice(productInFo.originalPrice * orderNumber)}
                    </div>
                </div>
                <div className="product-info__hotline">
                    <Button sizeSmall >
                        <span className='product-info__hotline__icon' ><HeadphonesIcon /></span>
                        <span className='product-info__hotline__tittle'>HotLine</span>

                    </Button>
                </div>

                <div className="product-info__footer">
                    Phím 1 - HotLine bán hàng online
                </div>

            </div>
            <div className="product-main">

                <div className="product-main__header">
                    Đặt Hàng Sản Phẩm
                </div>

                <div className="product-main__number">



                    {/* <ControlOrder
                        name="order" type="number"
                        form={form} value="1"
                        onChange={handleControlOrderChange}


                    /> */}



                    <ControlOrder
                        btnLessOnClick={handleBtnLessOnClick}
                        btnPlusOnClick={handleBtnPlusOnClick}
                    >
                        <input
                            name="order"
                            // {...form?.register("order")}
                            value={valueInput}
                            readOnly
                        />
                    </ControlOrder>




                </div>



                <div className="product-main-form">
                    <FormPayment onSubmit={handleOnSubmit} />
                </div>

            </div >



        </div >
    );
}

export default ProductInfoPayment;