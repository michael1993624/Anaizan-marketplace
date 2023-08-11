import React from "react";

import "./DropShipping.scss"

import BoxProductShipping from "../../components/BoxProductShipping/BoxProductShipping";
import ProductDisplay from "../ProductDisplay/ProductDisplay";
import { componentSort } from "../../components/SortedProduct/SortedProduct";


const product_cat = [
    { img: "/assets/png/prod1.png", title: "Apparel" },
    { img: "/assets/png/prod2.png", title: "Fabric & Textile" },
    { img: "/assets/png/prod3.png", title: "Electronics" },
    { img: "/assets/png/prod4.png", title: "Phones" },
    { img: "/assets/png/prod4.png", title: "Phones" },
    { img: "/assets/png/prod5.png", title: "Jewelry & Watches" },
]

const product_cat2 = [
    { img: "/assets/png/prod1.png", title: "Apparel" },
    { img: "/assets/png/prod2.png", title: "Fabric & Textile" },
    { img: "/assets/png/prod3.png", title: "Electronics" },
]


const DropShipping = () => {
    const product1 = [
        { img: "/assets/png/habitss.png", price: "$ 15.00" },
        { img: "/assets/png/habitss.png", price: "$ 15.00" },
        { img: "/assets/png/habitss.png", price: "$ 15.00" },
        { img: "/assets/png/habitss.png", price: "$ 15.00" },
        { img: "/assets/png/habitss.png", price: "$ 15.00" },
        { img: "/assets/png/habitss.png", price: "$ 15.00" },
        { img: "/assets/png/habitss.png", price: "$ 15.00" },
        { img: "/assets/png/habitss.png", price: "$ 15.00" },
        { img: "/assets/png/habitss.png", price: "$ 15.00" },
        { img: "/assets/png/habitss.png", price: "$ 15.00" },
        { img: "/assets/png/habitss.png", price: "$ 15.00" },
        { img: "/assets/png/habitss.png", price: "$ 15.00" },
        { img: "/assets/png/habitss.png", price: "$ 15.00" },
        { img: "/assets/png/habitss.png", price: "$ 15.00" },
        { img: "/assets/png/habitss.png", price: "$ 15.00" },
    ]


    return (
        <div className="body_home shipping-page d-col">
            <section className="section1-shipping">
                <div className="block-section1">
                    <div className="slider">
                        <img src="/assets/png/lots.png" alt="" />
                    </div>
                    <div className="right_div">
                        <p> This season </p>
                        <h3> Get hot selling products
                            with competitive
                            price
                        </h3>
                    </div>
                </div>
            </section>
            <section className="section2-shipping">
                <BoxProductShipping
                    label="DropShipping Products" listProduct={product_cat}
                    link="" className="block22" />
            </section>
            <section className="section3-shipping">
                <BoxProductShipping listProduct={product_cat2}
                    link="" label="Featured Products" />

                <BoxProductShipping listProduct={product_cat2}
                    link="" label="Featured Products" />
            </section>
            <section>
                <ProductDisplay listProduct={product1}
                    title="Categorie" sort={componentSort()} />
            </section>
        </div>
    )
}

export default DropShipping