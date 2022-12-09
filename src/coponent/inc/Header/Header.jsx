import React from 'react';
import PropTypes from 'prop-types';
import cln from "classnames";
import logo from "./Dự án mới.png"
import "./style.scss"

import SearchInput from './SearchInput/SearchInput';
import NavHeader from './NavHeader/NavHeader';
import CatHeader from './CatHeader/CatHeader';




Header.propTypes = {

};

function Header(props) {
    <img src="./poster-sony-web-03.jpg" alt="" />
    return (
        <div className={cln("header-wrapper")}>

            <div className={cln("header-main")}  >
                <div className="header-logo">

                    <img src={logo} alt="" />

                </div>


                <SearchInput />



                <NavHeader />

                <div className="header-cat">
                    <CatHeader />
                </div>

            </div>



        </div>
    );
}

export default Header;