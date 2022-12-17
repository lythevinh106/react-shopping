import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import cln from "classnames";
import logo from "./Dự án mới.png"
import "./style.scss"

import SearchInput from './SearchInput/SearchInput';
import NavHeader from './NavHeader/NavHeader';
import CatHeader from './CatHeader/CatHeader';
import ProgressHeader from '../../../ProgressHeader/ProgressHeader';
import { useDispatch, useSelector } from 'react-redux';




Header.propTypes = {

};

function Header(props) {


    // const [isLoading, setIsLoading] = useState(false);
    const stateProgress = useSelector((state) => state.progress.value);










    return (
        <div className={cln("header-wrapper")}>
            <ProgressHeader active={stateProgress} />

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