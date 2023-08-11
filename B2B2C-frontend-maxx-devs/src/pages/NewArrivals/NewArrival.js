import React from "react"

import "./NewArrivals.scss"
import { FaArrowRight, FaChevronDown } from "react-icons/fa";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri"
import ProductDisplay from "../ProductDisplay/ProductDisplay";
import { componentSort } from "../../components/SortedProduct/SortedProduct";
import BoxProductShipping from "../../components/BoxProductShipping/BoxProductShipping";

const NewArrvials = () => {

    const product_cat2 = [
        { img: "/assets/png/prod1.png", title: "Apparel" },
        { img: "/assets/png/prod2.png", title: "Fabric & Textile" },
        { img: "/assets/png/prod3.png", title: "Electronics" }
    ]

    const product_cat = [
        { img: "/assets/png/prod1.png", title: "Apparel" },
        { img: "/assets/png/prod2.png", title: "Fabric & Textile" },
        { img: "/assets/png/prod3.png", title: "Electronics" },
        { img: "/assets/png/prod4.png", title: "Phones" },
        { img: "/assets/png/prod5.png", title: "Jewelry & Watches" },
        { img: "/assets/png/prod1.png", title: "Apparel" },
        { img: "/assets/png/prod2.png", title: "Fabric & Textile" },
        { img: "/assets/png/prod3.png", title: "Electronics" },
        { img: "/assets/png/prod4.png", title: "Phones" },
        { img: "/assets/png/prod5.png", title: "Jewelry & Watches" }
    ]

    const imgs = [
        { img: "/assets/png/a1.png", text: "15 Years of experience of filling and labeling..." },
        { img: "/assets/png/a1.png", text: "15 Years of experience of filling and labeling..." },
        { img: "/assets/png/a1.png", text: "15 Years of experience of filling and labeling..." }
    ]


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
        { img: "/assets/png/habitss.png", price: "$ 15.00" }
    ]

    return (
        <div className="body_home">
            <section className="section1">
                <BoxProductShipping
                    label="New Products" listProduct={product_cat}
                    link="" />

                <div className="block3">
                    <div className="b3">
                        <BoxProductShipping
                            label="Expert Suppliers" listProduct={product_cat2}
                            link="" />
                    </div>

                    <div className="b3">
                        <div className="headShop">
                            <h3> 360 Shops </h3>
                        </div>
                        <div className="shopStore">
                            {imgs.map((list, i) => {
                                return (
                                    <div className="bloc_prod">
                                        <img src={list.img} />
                                        <h4> {list.text} <b>Showroom</b> </h4>
                                    </div>
                                )
                            })}
                        </div>
                    </div>


                </div>


                <ProductDisplay listProduct={product1}
                    title="Categorie" sort={componentSort()} />
            </section>
        </div>
    )
}

export default NewArrvials