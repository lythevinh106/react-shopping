import React from 'react';
import PropTypes from 'prop-types';
import Home from '../pages/home/Home';
import DetailProduct from '../pages/DetailProduct/DetailProduct';
import DetailProductLayout from '../layout/DetailProductLayout/DetailProductLayout';
import Cart from '../pages/Cart/Cart';
import CartLayout from '../layout/CartLayout/CartLayout';
import Category from '../pages/Category/Category';
import CategoryLayout from '../layout/CategoryLayout/CategoryLayout';

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
    {
        path: "/cart",
        element: Cart,
        layout: CartLayout


    },

    {
        path: "/category/:categoryName",
        element: Category,
        layout: CategoryLayout


    },





]





