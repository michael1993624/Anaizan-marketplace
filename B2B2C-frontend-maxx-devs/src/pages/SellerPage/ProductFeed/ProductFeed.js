import React from "react"
import { Link } from "react-router-dom";

import "./ProductFeed.scss"

import ButtonPagination from "../../../components/ButtonPagination/ButtonPagination"

import prod1 from "../../../assets/images/product/1.jpg"
import prod2 from "../../../assets/images/product/2.jpg"
import prod3 from "../../../assets/images/product/3.jpg"
import prod4 from "../../../assets/images/product/4.jpg"
import prod5 from "../../../assets/images/product/5.jpg"
import prod6 from "../../../assets/images/product/6.jpg"
import prod7 from "../../../assets/images/product/7.jpg"


const ProductFeeds = () => {

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
        { img: prod5, desc: " Ready To Ship High Quality 3 Pieces Formal Suit with..." },
        { img: prod6, desc: " Ready To Ship High Quality 3 Pieces Formal Suit with..." },
    ]

    return (
        <div className="body_home product-feeds-page">
            <section>
                <div className="block-prod-feeds">
                    <h4 className="d-flex align-items-center"> Feeds Product </h4>
                    <div className="body-prod">
                        {product.map((list,index) => {
                            return (
                                <div className="card-prod" key={index}>
                                    <div className="head">
                                        <b> Mar 23, 2022 </b>
                                        <p>
                                            These are 2022 new mens suits , made
                                            ready to ship and high quality , MOQ is 1
                                        </p>
                                    </div>
                                    <div className="img d-flex align-items-center justify-content-center">
                                        <img src={list.img} alt="" />
                                        <div className="d-flex align-items-center justify-content-center"> <button> <img src="/assets/svg/play.svg" alt="" /></button></div>
                                    </div>
                                    <button id="btn"> <img src="/assets/svg/love.svg" alt="" /></button>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <ButtonPagination />
            </section>
        </div>
    )
}

export default ProductFeeds