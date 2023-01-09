import React, { useState } from 'react';
import PropTypes from 'prop-types';
import "./style.scss"
import Product from '../../coponent/Product/Product';
import PopperWrapper from '../../coponent/PopperWapper/PopperWrapper';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useParams } from 'react-router-dom';
Category.propTypes = {

};



const filterItem = [

    {
        name: "Giá",
        id: 1,
        filterWith:
            [
                {
                    name: "dưới 2 triệu",
                    id: 1,
                    idParent: 1
                },
                {
                    name: "2-3 triệu",
                    id: 2,
                    idParent: 1
                },
                {
                    name: "3-4 triệu",
                    id: 4,
                    idParent: 1
                }
                ,
                {
                    name: "4-5 triệu",
                    id: 5
                    ,
                    idParent: 1
                },
                {
                    name: "5-6 triệu",
                    id: 6
                    ,
                    idParent: 1
                },
                {
                    name: "6-7 triệu",
                    id: 7
                    ,
                    idParent: 1
                },
                {
                    name: "7-8 triệu",
                    id: 8
                    ,
                    idParent: 1
                },
                {
                    name: "8 triệu trở lên",
                    id: 9
                    ,
                    idParent: 1
                },
            ]



    },

    {

        name: "Sắp xếp",
        id: 2,
        filterWith:
            [
                {
                    name: "Thấp Tới Cao",
                    id: 1
                    ,
                    idParent: 2
                },
                {
                    name: "Cao Tới Thấp",
                    id: 2
                    ,
                    idParent: 2
                },


            ]



    }
]

function Category(props) {

    const [resultItem, setResultItem] = useState([]);


    const linkParam = useParams();


    console.log(linkParam.category);


    const handleOnHoverItem = (id) => {


        const filter = filterItem.find((item) => {

            return item.id === id

        })

        setResultItem(filter.filterWith);
    }


    const handleOnMouseLeave = () => {
        setResultItem([]);
    }

    return (
        <div className='category-wrapper' onMouseLeave={() => {
            handleOnMouseLeave()
        }}>

            <div className="category-filter"
            >
                <PopperWrapper>
                    <div className="category-filter__main">
                        <div className="header-filter">
                            Lọc Danh Sách:
                        </div>
                        <div className='filter'>

                            {filterItem.map((item) => {
                                return (
                                    <div key={item.id} className="filter-item"

                                        onMouseEnter={() => handleOnHoverItem(item.id)}>
                                        <span className="filter-item__name">
                                            {item.name}
                                        </span>

                                        <span className="filter-item__icon">
                                            < ExpandMoreIcon />
                                        </span>


                                    </div>)

                            })}



                            {/* <div className="filter-item">
                                <span className="filter-item-name">
                                    Giá
                                </span>

                                <span className="filter-item-icon">
                                    < ExpandMoreIcon />
                                </span>


                            </div> */}
                        </div>



                        <div className="category-filter__result">
                            <PopperWrapper bigShadow>
                                <div className="filter-result-main">
                                    {resultItem && resultItem.map((item) => {
                                        return (
                                            <div key={item.id} className="result-item"
                                                onMouseEnter={() => handleOnHoverItem(item.idParent)}>


                                                {item.name}
                                            </div>
                                        )


                                    })}
                                </div>
                            </PopperWrapper>
                        </div>
                    </div>
                </PopperWrapper>

            </div >
            <div className="category-product">
                <Product categorySlug={linkParam.category} headerTitle="smartTV" isPagination limit={10} />
            </div>




        </div >
    );
}

export default Category;