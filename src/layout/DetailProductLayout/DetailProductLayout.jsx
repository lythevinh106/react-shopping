import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../coponent/inc/Header/Header';
import Footer from '../../coponent/inc/Footer/Footer';
import "./style.scss"
import SubBanner from '../../coponent/SubBanner/SubBanner';
import AboutUs from '../../coponent/AboutUs/AboutUs';
import Contact from '../../coponent/Contact/Contact';
import SubSlider from '../../coponent/SubSlider/SubSlider';

const dataSlider = [{
    id: 1,
    image: "https://cdn.hoanghamobile.com/i/home/Uploads/2022/12/08/galaxy-z-fold4-z-flip4-noel-1200x3821111111111111111.jpg",
    title: "slide1"

},
{
    id: 2,
    image: "https://cdn.hoanghamobile.com/i/home/Uploads/2022/12/07/ipad-apple-web.jpg"
    , title: "slide2"


},

{
    id: 3,
    image: "https://cdn.hoanghamobile.com/i/home/Uploads/2022/11/30/amazfit-gts-2-mini-1200x382-1.jpg"
    , title: "slide3"


},
{
    id: 4,
    image: "https://cdn.hoanghamobile.com/i/home/Uploads/2022/11/30/xiaomi-tong-t12-1200x382.jpg"
    , title: "slide4"


},



]






const bigBanner = [


    {
        id: 1,
        image: "https://cdn.hoanghamobile.com/i/home/Uploads/2022/12/08/1200x200-hotsale-galaxy-a-series-01-1.jpg"
    },




]


const suggestionProduct =


    [
        {
            "id": 31397093,
            "productId": null,


            "name": "ÁO SƠ MI NỮ",
            "shortDescription": "quý khách vui lòng đăng nhập tài khoản tài khoản sendo có chứng thực số điện thoại, va phải trùng số đt nhận hàng , mỗi tháng không quá 3 lần miễn phí va 1 ngày cho đơn hàng đầu tiên  đặt hàng thành công sẻ được miễn phí vận chuyển tối đa 30k  nhé, á...",
            "originalPrice": 199000,
            "salePrice": 165000,
            "isPromotion": true,

        },
        {
            "id": 13761499,
            "productId": null,
            "title": null,

            "name": "ÁO SƠ MI NỮ",
            "originalPrice": 179000,
            "salePrice": 149000,

        },
        {
            "id": 31265547,
            "productId": null,
            "title": null,
            "created_by": null,
            "updated_by": null,
            "created_at": "2020-10-18T06:08:27.769Z",
            "updated_at": "2020-10-18T06:08:27.769Z",
            "name": "Áo sơ mi nữ",
            "originalPrice": 209000,
            "salePrice": 209000,

        },
        {
            "id": 16716114,
            "productId": null,
            "title": null,
            "created_by": null,
            "updated_by": null,
            "created_at": "2020-10-18T06:08:27.769Z",
            "updated_at": "2020-10-18T06:08:27.769Z",
            "name": "Áo sơ mi nữ",
            "originalPrice": 160000,
            "salePrice": 97020,

        },
        {
            "id": 17139573,
            "productId": null,
            "title": null,

            "name": "ÁO SƠ MI NỮ",
            "originalPrice": 179000,
            "salePrice": 99000,
            "isPromotion": true,
            "promotionPercent": 45,
            "isFreeShip": false,
            "category": {
                "id": 1,
                "name": "Thời trang",
                "searchTerm": "ao so mi nu",
                "created_by": null,
                "updated_by": null,
                "created_at": "2020-10-18T06:06:55.456Z",
                "updated_at": "2020-10-18T06:06:55.456Z"
            },
            "thumbnail": {
                "id": 4,
                "name": "ao-so-mi-nu.jpg",
                "alternativeText": "",
                "caption": "",
                "width": 444,
                "height": 444,
                "formats": {
                    "thumbnail": {
                        "ext": ".jpg",
                        "url": "/uploads/thumbnail_9ff7d29c2ebad4fd802685eb770d9452_417240087a.jpg",
                        "hash": "thumbnail_9ff7d29c2ebad4fd802685eb770d9452_417240087a",
                        "mime": "image/jpeg",
                        "name": "thumbnail_9ff7d29c2ebad4fd802685eb770d9452.jpg",
                        "path": null,
                        "size": 5.83,
                        "width": 156,
                        "height": 156
                    }
                }
            }
        },
        {
            "id": 19190675,
            "productId": null,
            "title": null,
            "name": "ao so mi nu",
            "shortDescription": "Áo sơ mi nữ!Khởi động tuần mới cực hot cùng sơ mi viền cổ dài tay.Post yêu thích dành riêng cho các tín đồ của sơ mi.Đa dạng mẫu mã cho mọi phong cáchChất liệu vải Voan Lụa đẹp, thiết kế siêu chất, kiểu dáng siêu xinh.Bảo đảm chất mềm, mịn, mát, khôn...",
            "originalPrice": 285000,
            "salePrice": 159000,
            "isPromotion": true,
            "promotionPercent": 45,



        },
        {
            "id": 18874017,
            "productId": null,
            "title": null,

            "originalPrice": 49000,
            "salePrice": 49000,
            "isPromotion": false,
            "promotionPercent": 0,
            "isFreeShip": false


        },


    ];

DetailProductLayout.propTypes = {

};

function DetailProductLayout({ children }) {
    return (
        <div className='detail-product-layout'>



            <Header />
            {children}


            <div className="detail-product-layout__sub-banner" >
                <SubBanner listBanner={bigBanner} col1 />
            </div>

            <div className="detail-product-layout__suggestion">
                <SubSlider otherProducts={suggestionProduct} />
            </div>

            <div className="detail-product-layout__about-us">
                <AboutUs />
            </div>

            <div className="detail-product-layout__contact">
                <Contact />
            </div>



            <Footer />
        </div>
    );
}

export default DetailProductLayout;