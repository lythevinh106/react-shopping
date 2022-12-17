import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import "./style.scss"
import Image from '../../Image/Image';
import Button from '../../Button/Button';
import HeadphonesIcon from '@mui/icons-material/Headphones';

import InputField from "../../Form/InputField/InputField"
import PopperWrapper from '../../PopperWapper/PopperWrapper';
import ControlOrder from '../../ControlOrder/ControlOrder';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import FormatPrice from '../../../until/FormatPrice/FormatPrice';
ProductInfoPayment.propTypes = {

};

function ProductInfoPayment({ productInFo }) {



    // console.log(productInFo);


    const [orderNumber, setOrderNumber] = useState(1)


    yup.setLocale(
        {

            string: {
                required: ' ${path} không được bỏ trống',
            }
        }
    )

    const schema = yup.object({
        email: yup.string().email("vui lòng nhập đúng định dạng email").required("không được bỏ trống trường này"),
        name: yup.string().required("không được bỏ trống trường này"),
        phone: yup.string().required().matches(/(((\+|)84)|0)(3|5|7|8|9)+([0-9]{8})\b/, 'Số Điện Thoại không đúng định dạng'),
        address: yup.string().min(6, "địa chỉ quá ngắn").required("không được bỏ trống trường này"),
        note: yup.string().min(6, "ghi chú quá ngắn").required("không được bỏ trống trường này"),



    }).required();






    const form = useForm({

        defaultValues: {
            name: '',
            phone: '',
            email: '',
            address: '',
            note: ''



        },
        resolver: yupResolver(schema)

    });

    const { register, handleSubmit, watch, formState: { errors } } = form






    const onSubmit = (data) => {


        console.log(data)

        // notify();

    }
    const handleControlOrderChange = (data) => {
        setOrderNumber(data);

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



                    <ControlOrder
                        name="order" type="number"
                        form={form} value="1"
                        onChange={handleControlOrderChange}


                    />




                </div>



                <form
                    onSubmit={form.handleSubmit(onSubmit)}


                    className="product-main__form">
                    <div className="form-row w-12">
                        <div className="form-label">
                            Họ Và Tên
                        </div>
                        <div className="form-input">

                            <InputField bgGrey

                                name="name"
                                placeholder="Họ Và Tên" error={errors?.name?.message}
                                form={form}
                            />

                        </div>

                    </div>

                    <div className="form-row w-6">
                        <div className="form-label">
                            Điện Thoại
                        </div>
                        <div className="form-input ">

                            <InputField bgGrey
                                name="phone"
                                error={errors?.phone?.message}
                                form={form}
                                placeholder="Điện Thoại"
                            />

                        </div>

                    </div>



                    <div className="form-row w-6">
                        <div className="form-label">
                            Email
                        </div>
                        <div className="form-input ">

                            <InputField bgGrey

                                name="email"
                                placeholder="Email" error={errors?.email?.message}
                                form={form}

                            />

                        </div>

                    </div>


                    <div className="form-row w-12">
                        <div className="form-label">
                            Địa Chỉ Nhận Hàng
                        </div>
                        <div className="form-input ">

                            <InputField bgGrey
                                name="address"
                                error={errors?.address?.message}
                                form={form}

                                Comp="textarea"
                                placeholder="Địa Chỉ"
                            />

                        </div>

                    </div>

                    <div className="form-row w-12">
                        <div className="form-label">
                            Ghi CHú
                        </div>
                        <div className="form-input ">

                            <InputField bgGrey
                                name="note"
                                error={errors?.note?.message}
                                form={form}
                                Comp="textarea"
                                placeholder="Ghi Chú"
                            />

                        </div>

                    </div>

                    <div className="product-main__btn">

                        <Button type='submit'>  Tiến Hành Đặt Hàng</Button>


                    </div>
                </form>

            </div >



        </div >
    );
}

export default ProductInfoPayment;