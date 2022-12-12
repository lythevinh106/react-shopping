import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import "./styles.scss"
import Image from '../Image/Image';
import Button from '../Button/Button';

import { Forum } from '@mui/icons-material';
import Form from '../Form/Form';
import InputField from '../Form/InputField/InputField';
import PopperWrapper from '../PopperWapper/PopperWrapper';
import { useForm } from 'react-hook-form';

Contact.propTypes = {

};

function Contact(props) {

    // let inputRef = useRef();
    // const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const form = useForm({

        defaultValues: {
            email: '',

        },

    });

    const onSubmit = (data) => {
        console.log("du klieu frm", data);
    }
    console.log(form.watch("example"));

    return (
        <div className='contact-wrapper'>
            <div className="contact__icon">
                <Image src="https://hoanghamobile.com/Content/web/img/sub-logo.png" />
            </div>

            <div className="contact__subscribe">
                <div className="contact__subscribe__title">
                    Đăng ký nhận tin
                </div>
                <div className="contact__subscribe__des">
                    Đăng ký để nhận những chương trình khuyến mại hot nhất của Hoàng Hà Mobile
                </div>
            </div>


            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="contact__form">

                    <div className="contact__form__input">

                        <PopperWrapper>
                            {/* <input  {...form.register("email")} /> */}
                            {/* register={form.register("email")} */}
                            <InputField name="email"
                                form={form}
                                type='text' placeholder='nhập Emal của bạn' />
                        </PopperWrapper>
                    </div>
                    <div className="contact__form__btn">

                        <Button type="submit">
                            <Forum />
                        </Button>

                    </div>

                </div>
            </form>

        </div>
    );
}

export default Contact;