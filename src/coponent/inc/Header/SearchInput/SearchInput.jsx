import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import "./style.scss"
import { SearchOutlined } from '@ant-design/icons';
import Button from '../../../Button/Button';

import { Popover, Spin, Tooltip } from 'antd';

import MenuResult from '../MenuResult/MenuResult';


SearchInput.propTypes = {

};

function SearchInput(props) {

    const [InputValue, setInputValue] = useState("");
    const [loadSpin, setLoadSpin] = useState(false);
    const [opentResult, setOpentResult] = useState(false);






    useEffect(() => {
        if (!InputValue.trim()) {
            setOpentResult(false);
            return
        }
        setOpentResult(true);


    }, [InputValue]);

    const handleOnChange = (value) => {
        setInputValue(value);

    }

    return (


        <div className="header-search" >


            <span className="header-search__input">

                <Popover

                    overlayClassName='header-search__result'
                    content={() => {

                        return (

                            <MenuResult />

                        )

                    }}

                    trigger="click"
                    open={opentResult}
                // open={open}
                // onOpenChange={handleOpenChange}
                >
                    <input placeholder='Hôm nay bạn cần tìm gì?'

                        onChange={(e) => {
                            handleOnChange(e.target.value)
                        }}


                    />


                </Popover>






            </span >








            <Button >
                <SearchOutlined />
            </Button>
            <Spin spinning={loadSpin} className='header-search__spin' />



        </div >


    );
}

export default SearchInput;