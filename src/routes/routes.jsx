import React from 'react';
import PropTypes from 'prop-types';
import Home from '../pages/home/Home';
import DetailProduct from '../pages/DetailProduct/DetailProduct';
import DetailProductLayout from '../layout/DetailProductLayout/DetailProductLayout';

export const publicRoutes = [
    {
        path: "/",
        element: Home,
        // layout: null


    },


    {
        path: "/products",
        element: Home,
        // layout: null


    },

    {
        path: "/products/:productId",
        element: DetailProduct,
        layout: DetailProductLayout


    },





]





