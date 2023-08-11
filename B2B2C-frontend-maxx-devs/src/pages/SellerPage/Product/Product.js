import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Product.scss"
import { FaPlusCircle } from "react-icons/fa"
import ButtonPagination from "../../../components/ButtonPagination/ButtonPagination";

import prod1 from "../../../assets/images/product/1.jpg"
import prod2 from "../../../assets/images/product/2.jpg"
import prod3 from "../../../assets/images/product/3.jpg"
import prod4 from "../../../assets/images/product/4.jpg"
import prod5 from "../../../assets/images/product/5.jpg"
import prod6 from "../../../assets/images/product/6.jpg"
import prod7 from "../../../assets/images/product/7.jpg"

import follow from "../../../assets/svg/follow.svg"

import { close_p, open_p } from "../../Checkout/Checkout";


const ProductsSeller = () => {

    const [tabs, setTabs] = useState(0);

    const product = [
        { img: prod1, price: "$ 15.00" },
        { img: prod2, price: "$ 15.00" },
        { img: prod3, price: "$ 15.00" },
        { img: prod4, price: "$ 15.00" },
        { img: prod5, price: "$ 15.00" },
        { img: prod1, price: "$ 15.00" },
        { img: prod2, price: "$ 15.00" },
        { img: prod3, price: "$ 15.00" }
    ]

    const listCat = [
        { label: "Top picks" },
        { label: "New Arrivals" },
        { label: "Hot Items" },
        { label: "Sports Accessories" },
        { label: "Sports Clothing RTS" },
        { label: "Sports Wear" },
        { label: "Beauty Care" },
        { label: "On Sale" },
        { label: "Ungrouped" },
    ]

    const active = {
        background: "var(--blue-color)",
        color: "white",
        borderTopLeftRadius: "5px",
        borderTopRightRadius: "5px",
    }

    const no_active =  {
        background: "none",
        color: "var(--gray-400-color)"
    }

    return (
        <div className="body_home seller-product-page">
            <section className="section1-seller-product">
                <div className="div-categorie">
                    <nav>
                        <h4 className="d-flex align-items-center"> Categories </h4>
                        <ul className="d-col">
                            {
                                listCat.map((list, index) => {
                                    return <li key={index}> {list.label} </li>
                                })
                            }
                        </ul>
                    </nav>

                    <div className="bloc-prod-left">
                        {product.map((list, index) => {
                            if (index < 4) {
                                return (
                                    <Link to={""} key={index}>
                                        <div className="card-prod-lefts">
                                            <div className="img d-flex align-items-center justify-content-center">
                                                    <img src={list.img} alt="" />
                                            </div>
                                            <div className="infos">
                                                <h4> High Quality A AMILevel 3 blue... </h4>
                                                <b> {list.price} </b>
                                                <p>
                                                    <span> +9.90(Shipping) </span>
                                                    <span> 1 Piecs(MOQ) </span>
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            }
                        })}
                    </div>
                </div>

                <div className="div-products">
                    <div className="group-tabs">
                        <div className="head-tabs">
                            <button style={tabs == 0 ? active : no_active}
                                onClick={() => setTabs(0)}>
                                All Products
                            </button>
                            <button style={tabs === 1 ? active : no_active}
                                onClick={() => setTabs(1)}>
                                Customization
                            </button>
                            <button style={tabs === 2 ? active : no_active}
                                onClick={() => setTabs(2)}>
                                Ready to Ship
                            </button>
                            <button style={tabs === 3 ? active : no_active}
                                onClick={() => setTabs(3)}>
                                Dropshipping
                            </button>
                        </div>
                        <div className="tabs-content-prod">
                            <div style={tabs == 0 ? open_p : close_p}>
                                <div className="tab1-div1">
                                    <h4> All Products </h4>
                                    <div className="d1">
                                        <label > Sort by </label>
                                        <select name="sort" id="sort">
                                            <option> Select </option>
                                        </select>
                                        <span> Selected Products (0/20) </span>
                                    </div>
                                    <div className="d2 d-flex align-items-center">
                                        <label> Click </label>
                                        <button> <FaPlusCircle /> to select and contact the supplier </button>
                                    </div>
                                </div>
                                <div className="div-prod-tab1">
                                    {product.map((list, index) => {
                                        return (
                                            <Link to={""} key={index}>
                                                <div className="card-prod" >
                                                    <div className="img">
                                                        <button> <img src={follow} /> </button>
                                                        <img src={list.img} />
                                                    </div>
                                                    <div className="foots">
                                                        <h4> High Quality A AMI LEVEL 3 blue
                                                            green Disposable steri...
                                                        </h4>
                                                        <b> {list.price} </b>
                                                        <p>
                                                            <span> 1 Piecs(MOQ) </span>
                                                            <span> 1 Piecs(MOQ) </span>
                                                            <span> 1-3 Days(Processing time) </span>
                                                        </p>
                                                        <button> <FaPlusCircle /> </button>
                                                    </div>
                                                </div>
                                            </Link>
                                        )
                                    })}

                                </div>
                            </div>
                            <div style={tabs == 1 ? open_p : close_p}>
                                <h4> Salut </h4>
                            </div>
                            <div style={tabs == 2 ? open_p : close_p}>
                                <h4> Hello </h4>
                            </div>
                            <div style={tabs == 3 ? open_p : close_p}>
                                <h4> Salut max </h4>
                            </div>
                        </div>
                    </div>
                    <ButtonPagination />
                </div>
            </section>
        </div>
    )
}

export default ProductsSeller