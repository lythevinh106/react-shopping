import React, { forwardRef, useRef } from 'react';
import PropTypes from 'prop-types';
import "./style.scss"


const InputField = forwardRef(({ type = "text", placeholder = "", onChange = () => { }, form = {}, name = "", }, ref) => {

    // const { register, handleSubmit, watch, formState: { errors } } = form


    return (
        <div className='input-wrapper'>

            <input
                {...form.register(name)}

                type={type} placeholder={placeholder}
                //  onChange={onChange}

                onChange={(e) => onChange(e)}


            />
        </div>
    );
});

export default InputField;