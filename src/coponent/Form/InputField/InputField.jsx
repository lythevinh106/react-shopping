import React, { forwardRef, useRef } from 'react';
import PropTypes from 'prop-types';
import "./style.scss"

import cln from "classnames";


const InputField = forwardRef((
    { type = "text", placeholder = "", onChange = () => { }, form = {}, name = "", error = "" }, ref) => {

    // const { register, handleSubmit, watch, formState: { errors } } = form


    const classes = cln("input-wrapper", {
        error

    })

    return (



        <div className={classes}>

            <input


                {...form.register(name)}

                type={type} placeholder={placeholder}
                //  onChange={onChange}

                onChange={(e) => onChange(e)}


            />

            {error && (
                <div className="input-error">
                    {error}
                </div>
            )}

        </div >
    );
});

export default InputField;