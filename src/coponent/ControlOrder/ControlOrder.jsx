import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import "./style.scss";

import InputField from '../Form/InputField/InputField';
ControlOrder.propTypes = {

};

function ControlOrder({ name, form, type
    , onChange = () => { }


}) {




    const [valueInput, setValueInput] = useState(1);

    const propInput = {
        name,
        type,

        form,

    }


    const { setValue } = form;





    // console.log(setValue)

    const handelBtnLessClick = (e) => {
        if (valueInput <= 1) return;
        // console.log("nut -")


        setValueInput((prev) => {



            return prev - 1;
        })
        // handleChange();
        // setValue(name, valueInput);
        // handleChange(valueInput)

    }


    const handelBtnPlusClick = () => {
        if (valueInput >= 10) return;

        setValueInput((prev) => {


            return prev + 1;
        })
        // setValue(name, valueInput);
        // handleChange(valueInput)

        // console.log("bth")
    }

    useEffect(() => {
        const handleChange = () => {
            setValue(name, valueInput);

            onChange(valueInput)
        }

        handleChange();


    }, [valueInput]);



    return (
        <div className="control-oder-wrapper"

        >
            {/* {console.log("render")} */}
            <button className='control control--less' onClick={handelBtnLessClick}






            >-</button>
            <div className="control__input">

                {/* {children} */}
                <InputField {...propInput} value={valueInput}
                />

            </div>

            <button onClick={handelBtnPlusClick} className='control control--plus'>+</button>
        </div >
    );
}

export default ControlOrder;