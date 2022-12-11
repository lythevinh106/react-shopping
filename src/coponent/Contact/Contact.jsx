import React from 'react';
import PropTypes from 'prop-types';
import "./styles.scss"
import Image from '../Image/Image';
import Button from '../Button/Button';

import { Forum } from '@mui/icons-material';

Contact.propTypes = {

};

function Contact(props) {
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

            <div className="contact__form">

                <div className="contact__form__input">


                    <input type="text" />
                </div>
                <div className="contact__form__btn">

                    <Button>

                        <Forum />
                    </Button>

                </div>
            </div>
        </div>
    );
}

export default Contact;