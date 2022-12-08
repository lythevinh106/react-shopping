import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../coponent/inc/Header/Header';
import Footer from '../../coponent/inc/Footer/Footer';

Defaultayout.propTypes = {

};

function Defaultayout({ children }) {
    return (
        <>
            <Header />
            {children}

            <Footer />
        </>
    );
}

export default Defaultayout;