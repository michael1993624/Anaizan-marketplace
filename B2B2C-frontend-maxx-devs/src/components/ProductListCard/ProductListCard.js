import React, { Suspense } from "react"
import "./ProductListCard.scss"

import favourite from "../../assets/svg/favourite.svg"
import chat_icon from "../../assets/images/chats.png"
import prime from "../../assets/svg/prime.svg"
import verified from "../../assets/svg/verified.svg"
import { FaRegCheckCircle } from "react-icons/fa"
import { Link } from "react-router-dom"


export const ProductListCard = ({ listProduct }) => {
    return (
        <>
            {
                listProduct.map((list, index) => {
                    return (
                        <Link to={""} key={index}>
                            <div className="product-list d-flex align-items-start">
                                <div className="product">
                                    <Suspense fallback={"..."}>
                                        <img className="prod-img" src={list.img} />
                                    </Suspense>
                                    <button className="favourite-icon"> <img src={favourite} /> </button>
                                </div>
                                <div className="info-product">
                                    <h2> {list.nameProduct} </h2>
                                    <p>
                                        <b> $ {list.priceInf} - $ {list.priceSup} </b><span> /Piece (FOB Price)</span>
                                    </p>
                                    <p className="d-flex align-items-center">
                                        <span> {list.nbPiece} Piece (MOQ)</span>
                                        <span className="d-flex align-items-center">
                                            <FaRegCheckCircle />
                                            In stocks
                                        </span>
                                    </p>
                                    <div className="div-child d-flex align-items-center">
                                        <div className="div-child1">
                                            <p>Gender : <span> {list.gender} </span> </p>
                                            <p>Case shap : <span> {list.caseShap} </span> </p>
                                            <p>Movement : <span> {list.Movement} </span> </p>
                                        </div>
                                        <div className="div-child2">
                                            <p>Feature : <span> {list.feature} </span> </p>
                                            <p>Clasp Type : <span> {list.clashType} </span> </p>
                                            <p>Surface Material : <span> {list.surfaceMaterial} </span> </p>
                                        </div>
                                    </div>
                                    <p className="d-flex align-items-center">
                                        <span> {list.company} </span>
                                        <span className="d-flex align-items-center">
                                            <img src={list.flagCountry} />
                                            CN
                                        </span>
                                        <span> {list.expYear} YRS</span>
                                        <span> <img src={prime} /> </span>
                                        <span className="d-flex align-items-center"> <img src={verified} /> Verified <b>Seller</b>  </span>
                                    </p>
                                    <p>
                                        <button> Contact Supplier </button>
                                        <button> Add To Cart </button>
                                        <button> <img src={chat_icon} /> Chat Now! </button>
                                    </p>
                                </div>
                            </div>
                        </Link>
                    )
                })
            }
        </>
    )
}