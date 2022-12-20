import React from 'react';
import PropTypes from 'prop-types';
import "./style.scss"
import Product from '../../coponent/Product/Product';
import PopperWrapper from '../../coponent/PopperWapper/PopperWrapper';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
Category.propTypes = {

};

function Category(props) {
    return (
        <div className='category-wrapper'>

            <div className="category-filter"
            >
                <PopperWrapper>
                    <div className="category-filter__main">
                        <div className="header-filter">
                            Lọc Danh Sách:
                        </div>
                        <div className='filter'>
                            <div className="filter-item">
                                <span className="filter-item__name">
                                    Sắp Xếp
                                </span>

                                <span className="filter-item__icon">
                                    < ExpandMoreIcon />
                                </span>


                            </div>
                            <div className="filter-item">
                                <span className="filter-item-name">
                                    Giá
                                </span>

                                <span className="filter-item-icon">
                                    < ExpandMoreIcon />
                                </span>


                            </div>
                        </div>
                    </div>
                </PopperWrapper>

                <div className="category-filter__result">

                </div>
            </div>
            <div className="category-product">
                <Product headerTitle="smartTV" />
            </div>




        </div>
    );
}

export default Category;