import "./ContentGroupProd.scss"
import { RiArrowRightSLine } from "react-icons/ri"
import Slider from "react-slick"

import { Link } from "react-router-dom"

const ContentGroupProd = ({ label, listProduct, nb }) => {

    const settings = {
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: nb ? nb:4,
        slidesToScroll: 1,
        arrows: false
    };

    return (
        <div className="list-prod-slide">
            <div className="heads">
                <h4>
                    {label}
                </h4>
                <span>
                    See all
                    <RiArrowRightSLine />
                </span>
            </div>
            <div className="body-prods">
                <Slider {...settings} className="sliders-prod">
                    {listProduct.map((list, index) => {
                        return (
                            <Link to={""}   key={index}>
                                <div className="product">
                                    <div>
                                        <img src={list.img} alt="" />
                                    </div>
                                    <h4>  {list.desc}  </h4>
                                    <p>
                                        <b> {list.price_variant} <span> / Piece </span> </b>
                                        <b> 1 Piece <span> (Min-order) </span> </b>
                                    </p>
                                </div>
                            </Link>
                        )
                    })}
                    <Link to={""}>
                        <div className="product">
                            <div>
                                <img src={listProduct[0].img} alt="" />
                            </div>
                            <h4>  {listProduct[0].desc}  </h4>
                            <p>
                                <b> {listProduct[0].price_variant} <span> / Piece </span> </b>
                                <b> {listProduct[0].price_variant} <span> / Piece </span> </b>
                            </p>
                        </div>
                    </Link>
                </Slider>
            </div>
        </div>
    )
}

export default ContentGroupProd