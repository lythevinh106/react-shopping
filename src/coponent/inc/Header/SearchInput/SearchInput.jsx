import React from 'react';
import PropTypes from 'prop-types';
import "./style.scss"
import { SearchOutlined } from '@ant-design/icons';
SearchInput.propTypes = {

};

function SearchInput(props) {
    return (

        <div className="header-search">

            <input placeholder='Hôm nay bạn cần tìm gì?'
            />

            <button>
                <SearchOutlined />
            </button>


        </div>


    );
}

export default SearchInput;