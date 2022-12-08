import React from 'react';
import PropTypes from 'prop-types';

import AxiosClient from "./AxiosClient"

const ApiProduct={
      
     getAllProduct(){

        return AxiosClient.get('/products');

     },
     getProduct(productId){
         
        return AxiosClient.get(`/products/${productId}`);

     }

}







export default ApiProduct;