import React from 'react';
import PropTypes from 'prop-types';
import "./style.scss"
import Image from '../Image/Image';

import cln from "classnames"
import PopperWrapper from '../PopperWapper/PopperWrapper';
SubBanner.propTypes = {

};

function SubBanner({ listBanner }) {

    const classes =
        cln(
            'sub-banner-wrapper', {



        }

        )




    return (
        <div className={classes}>
            {



                // listBanner && (

                listBanner.map((banner) => {
                    return (
                        <PopperWrapper key={banner.id}>
                            <div className='sub-banner__img'>


                                <Image src={banner.image} />



                            </div>
                        </PopperWrapper>
                    )



                })






                // )

            }




        </div >
    );
}

export default SubBanner;