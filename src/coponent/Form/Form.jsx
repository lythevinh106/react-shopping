import React from 'react';
import PropTypes from 'prop-types';
import "./style.scss"
import InputField from './InputField/InputField';
Form.propTypes = {

};

function Form({ children, onSubmit = () => {

} }) {


    const handleOnsubmit = (e) => {
        onSubmit(e)
        e.preventDefault();

    }



    return (
        <form onSubmit={(e) => {
            handleOnsubmit(e)

        }}>
            {children}
        </form >
    );
}

export default Form;