import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import "./style.scss"
import { SearchOutlined } from '@ant-design/icons';
import Button from '../../../Button/Button';

import { Popover, Spin, Tooltip } from 'antd';

import MenuResult from '../MenuResult/MenuResult';
import ApiProduct from '../../../../ApiService/ApiProduct';
import PopperWrapper from '../../../PopperWapper/PopperWrapper';



SearchInput.propTypes = {

};

function SearchInput(props) {

    const [InputValue, setInputValue] = useState("");
    const [loadSpin, setLoadSpin] = useState(false);
    const [opentResult, setOpentResult] = useState(false);

    const [searchResult, setSearchResult] = useState([])


    const InputRef = useRef();



    useEffect(() => {


        if (!InputValue.trim()) {
            setOpentResult(false);
            return
        }
        setLoadSpin(true);


        const getAllApi = (async () => {
            ////17139573

            ///12753356

            try {
                const response = await ApiProduct.getProduct(InputValue);
                if (response.data) {
                    let Product = response.data;



                    setOpentResult(true);
                    console.log(Product)
                    setSearchResult(Product);
                }







            } catch (error) {
                setLoadSpin(false);
                setOpentResult(false);
                console.log("k tim thay du lieu")

            }
            setLoadSpin(false);







        })();




    }, [InputValue]);
    console.log(loadSpin)

    const handleOnChange = (value) => {
        setInputValue(value);


    }

    return (


        <div className="header-search" >


            <span className="header-search__input">
                <PopperWrapper>
                    <Popover

                        overlayClassName='header-search__result'
                        content={() => {

                            return (



                                <MenuResult input={InputRef} products={searchResult} />







                            )

                        }}

                        trigger="click"
                        open={opentResult}
                    // open={open}
                    // onOpenChange={handleOpenChange}
                    >



                        <input ref={InputRef} placeholder='Hôm nay bạn cần tìm gì?'

                            onChange={(e) => {
                                handleOnChange(e.target.value)
                            }}


                        />





                    </Popover>
                </PopperWrapper>






            </span >






            <PopperWrapper>

                <Button >
                    <SearchOutlined />
                </Button>

            </PopperWrapper>


            <Spin spinning={loadSpin} className='header-search__spin' />



        </div >


    );
}

export default SearchInput;