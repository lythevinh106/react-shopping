import React from 'react';
import PropTypes from 'prop-types';

import AxiosMain from "./AxiosMain"

const AuthApi = {


    register(data) {

        return AxiosMain.post(`/auth/register`, data);



    },



}







export default AuthApi;