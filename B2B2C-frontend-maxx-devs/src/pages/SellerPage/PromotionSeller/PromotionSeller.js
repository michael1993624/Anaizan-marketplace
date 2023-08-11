import React from "react"
import {Link} from "react-router-dom"
import "./PromotionSeller.scss"
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa"

import prod1 from "../../../assets/images/product/1.jpg"
import prod2 from "../../../assets/images/product/2.jpg"
import prod3 from "../../../assets/images/product/3.jpg"
import prod4 from "../../../assets/images/product/4.jpg"
import prod5 from "../../../assets/images/product/5.jpg"
import prod6 from "../../../assets/images/product/6.jpg"
import prod7 from "../../../assets/images/product/7.jpg"
import ButtonPagination from "../../../components/ButtonPagination/ButtonPagination"


const ProductPromotion = () => {

    const product = [
        { img: prod1, desc: " Ready To Ship High Quality 3 Pieces Formal Suit with..." },
        { img: prod2, desc: " Ready To Ship High Quality 3 Pieces Formal Suit with..." },
        { img: prod3, desc: " Ready To Ship High Quality 3 Pieces Formal Suit with..." },
        { img: prod4, desc: " Ready To Ship High Quality 3 Pieces Formal Suit with..." },
        { img: prod5, desc: " Ready To Ship High Quality 3 Pieces Formal Suit with..." },
        { img: prod6, desc: " Ready To Ship High Quality 3 Pieces Formal Suit with..." },
        { img: prod1, desc: " Ready To Ship High Quality 3 Pieces Formal Suit with..." },
        { img: prod2, desc: " Ready To Ship High Quality 3 Pieces Formal Suit with..." },
        { img: prod3, desc: " Ready To Ship High Quality 3 Pieces Formal Suit with..." },
        { img: prod4, desc: " Ready To Ship High Quality 3 Pieces Formal Suit with..." },
    ]

    return (
        <div className="body_home seller-promotion-product">
            <section className="section-prod-promo">
                <div className="div-prod-promo">
                    <h3 className="d-flex align-items-center"> Promotion Products </h3>
                    <div className="body-prod">
                        {product.map((list, index) => {
                            return (
                                <Link to={""} key={index}>
                                    <div className="card-prods">
                                        <div className="img d-flex align-items-center justify-content-center">
                                            <img src={list.img} alt="" />
                                            <div className="d-flex align-items-center justify-content-center"> 
                                                <button> 
                                                    <img src="/assets/svg/play.svg" alt="" /></button></div>
                                        </div>
                                        <h4>  {list.desc}  </h4>
                                        <p>
                                            <b> $215.00 - $245.00 <span> / Piece </span> </b>
                                            <b> $215.00 - $245.00 <span> / Piece </span> </b>
                                        </p>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
                <ButtonPagination />
            </section>
        </div>
    )
}

export default ProductPromotion