import React from 'react';
import PropTypes from 'prop-types';
import "./style.scss"
import Header from '../../coponent/inc/Header/Header';
import AboutUs from '../../coponent/AboutUs/AboutUs';
import Contact from '../../coponent/Contact/Contact';
import Footer from '../../coponent/inc/Footer/Footer';
CartLayout.propTypes = {

};

function CartLayout({ children }) {
    return (
        <div className='cart-layout'>



            <Header />







            <div className="content">
                {children}
            </div>






            <div className="cart-layout__about-us">
                <AboutUs />
            </div>

            <div className="cart-layout__contact">
                <Contact />
            </div>


            <Footer />
        </div>
    );
}

export default CartLayout;