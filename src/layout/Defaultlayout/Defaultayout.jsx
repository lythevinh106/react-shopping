import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../coponent/inc/Header/Header';
import Footer from '../../coponent/inc/Footer/Footer';
import "./style.scss";
Defaultayout.propTypes = {

};

function Defaultayout({ children }) {
    return (
        <>
            <Header />
            <div className="content">
                {children}
            </div>



            <Footer />
        </>
    );
}

export default Defaultayout;