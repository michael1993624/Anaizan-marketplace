import React from "react";

import "./RankingProduct.scss"
import BoxProductShipping from "../../components/BoxProductShipping/BoxProductShipping";
import { componentSort } from "../../components/SortedProduct/SortedProduct";
import ProductDisplay from "../ProductDisplay/ProductDisplay";

import RankImg1 from "../../assets/images/rank1.png"
import RankImg2 from "../../assets/images/rank2.png"
import RankImg3 from "../../assets/images/rank3.png"

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


const RankingProduct = () => {

    const product_cat2 = [
        { img: "/assets/png/habitss.png", price: "$ 15.00" },
        { img: "/assets/png/habitss.png", price: "$ 15.00" },
        { img: "/assets/png/habitss.png", price: "$ 15.00" },
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
        { img: "/assets/png/habitss.png", price: "$ 15.00" }
    ]


    return (
        <div className="body_home ranking-page d-col">
            <section className="section1-ranking d-col">
                <div className="div-child-ranking d-flex align-items-center justify-content-center">
                    <div className="d-col align-items-center">
                        <h3> Top Ranking Products </h3>
                        <p>
                            Product are automatically ranked
                            based on buyer inquiries. Updated daily.
                        </p>
                    </div>
                    <div className="d-flex align-items-end justify-content-center">
                        <img src={RankImg1} alt="" />
                        <img src={RankImg2} alt="" />
                        <img src={RankImg3} alt="" />
                    </div>
                </div>
            </section>
            <section className="section2-ranking">
                <BoxProductShipping label="Top Ranking Products"
                    listProduct={product_cat} link="" />
            </section>

            <section className="section3-ranking">
                <ProductDisplay listProduct={product1}
                    title="Categorie" sort={componentSort()} />
            </section>
        </div>
    )
}

export default RankingProduct