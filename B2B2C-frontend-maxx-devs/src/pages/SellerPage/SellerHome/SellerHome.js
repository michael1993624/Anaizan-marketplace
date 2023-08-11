import React from "react"
import { Link } from "react-router-dom"

import "./SellerHome.scss"
import ContentGroupProd from "../../../components/ContentGroupProd/ContentGroupProd"
import FormSupplier from "../../../components/FormSupplier/FormSupplier"

import prod1 from "../../../assets/images/product/1.jpg"
import prod2 from "../../../assets/images/product/2.jpg"
import prod3 from "../../../assets/images/product/3.jpg"
import prod4 from "../../../assets/images/product/4.jpg"
import prod5 from "../../../assets/images/product/5.jpg"
import prod6 from "../../../assets/images/product/6.jpg"
import prod7 from "../../../assets/images/product/7.jpg"

import icon_adv1 from "../../../assets/images/g1.png"
import icon_adv2 from "../../../assets/images/g2.png"
import icon_adv3 from "../../../assets/images/g3.png"
import icon_adv4 from "../../../assets/images/g4.png"

import certificate from "../../../assets/images/exp.png"

import icon_comp1 from "../../../assets/svg/c1.svg"
import icon_comp2 from "../../../assets/svg/c2.svg"
import icon_comp3 from "../../../assets/svg/c3.svg"
import icon_comp4 from "../../../assets/svg/c4.svg"
import icon_comp5 from "../../../assets/svg/c5.svg"
import icon_comp6 from "../../../assets/svg/c6.svg"


const HomeSeller = () => {

    const company = [
        { icon: icon_comp1, label: "Country, Region", label2: "Jiangsu, China" },
        { icon: icon_comp2, label: "Year Established", label2: "2019" },
        { icon: icon_comp3, label: "Business Type", label2: "Trading Company" },
        { icon: icon_comp4, label: "Recent Transactions", label2: "$2500" },
        { icon: icon_comp5, label: "Main Products", label2: "Sportswear and Beauty..." },
        { icon: icon_comp6, label: "Accepted Payment Method", label2: "Werstern Union" },
    ]
    const product = [
        {
            img: prod6,
            desc: " Ready T Ship High Quality 3 Pieces Formal Suit with...",
            price_variant: "$ 2.00 - $ 5.12"
        },
        {
            img: prod7,
            desc: " Ready To Ship High Quality 3 Pieces Formal Suit with...",
            price_variant: "$ 2.00 - $ 5.12"
        },
        {
            img: prod3,
            desc: " Ready To Ship High Quality 3 Pieces Formal Suit with...",
            price_variant: "$ 2.00 - $ 5.12"
        },
        {
            img: prod4,
            desc: " Ready To Ship High Quality 3 Pieces Formal Suit with...",
            price_variant: "$ 2.00 - $ 5.12"
        },
        {
            img: prod5,
            desc: " Ready To Ship High Quality 3 Pieces Formal Suit with...",
            price_variant: "$ 2.00 - $ 5.12"
        }
    ]

    const product1 = [
        { img: "/assets/png/habitss.png" },
        { img: "/assets/png/habitss.png" },
        { img: "/assets/png/habitss.png" },
        { img: "/assets/png/habitss.png" },
        { img: "/assets/png/habitss.png" },
        { img: "/assets/png/habitss.png" },
        { img: "/assets/png/habitss.png" },
        { img: "/assets/png/habitss.png" },
    ]

    const head = (title) => {
        return (
            <div className="head-section-seller">
                <div></div>
                <h4> {title} </h4>
                <div></div>
            </div>
        )
    }


    return (
        <div className="body_home seller-home-page">
            <section className="section1-seller-home"
                style={{
                    backgroundImage: "url(/assets/png/backSport.png)",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat"
                }}>

                <div className="card-text">
                    <h4> Sports Fashion </h4>
                    <p> We have more products to meet your needs </p>
                    <div>
                        <button> Buy Now </button>
                        <button> View More </button>
                    </div>
                </div>
            </section>

            <section className="section2-seller-home">
                {head("Product Category")}
                <div className="div1-section">
                    <div className="bloc-img-section">
                        <div className="imgs" style={{
                            backgroundImage: "url(/assets/png/sp1.png)",
                            backgroundRepeat: "no-repeat"
                        }}>
                            <div>
                                <h4> Sports </h4>
                                <p> Sport bags, accessories, wears </p>
                            </div>

                        </div>
                        <div className="imgs" style={{
                            backgroundImage: "url(/assets/png/sp2.png)",
                            backgroundRepeat: "no-repeat"
                        }}>
                            <div>
                                <h4> Cycling </h4>
                                <p> Bags, accessories, wears </p>
                            </div>

                        </div>
                        <div className="imgs" style={{
                            backgroundImage: "url(/assets/png/sp3.png)",
                            backgroundRepeat: "no-repeat"
                        }}>
                            <div>
                                <h4> Cycling </h4>
                                <p> Bags, accessories, wears </p>
                            </div>
                        </div>
                        <div className="last">
                            <div className="vertical">
                                <div className="imgs" style={{
                                    backgroundImage: "url(/assets/png/sp4.png)",
                                    backgroundRepeat: "no-repeat"
                                }}>
                                    <div>
                                        <h4> Cycling </h4>
                                        <p> Bags, accessories, wears </p>
                                    </div>
                                </div>

                                <div className="imgs" style={{
                                    backgroundImage: "url(/assets/png/sp4.png)",
                                    backgroundRepeat: "no-repeat"
                                }}>
                                    <div>
                                        <h4> Cycling </h4>
                                        <p> Bags, accessories, wears </p>
                                    </div>
                                </div>
                            </div>
                            <div className="imgs last2" style={{
                                backgroundImage: "url(/assets/png/sp6.png)",
                                backgroundRepeat: "no-repeat"
                            }}>
                                <div>
                                    <h4> Cycling </h4>
                                    <p> Bags, accessories, wears </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ContentGroupProd nb={5} listProduct={product} label="You may also product" />
            </section>
            <section className="section3-seller-home">
                {head("Hot Products")}
                <div className="div-section">
                    <div className="group-prod">
                        {product1.map((list, index) => {
                            return (
                                <Link to={""} key={index}>
                                    <div className="card-prod d-flex align-items-center justify-content-center">
                                        <img src={list.img} alt="" />
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </section>

            <section className="section4-seller-home">
                {head("About Us")}
                <div className="div-section">
                    <div className="div-child d-flex justify-content-between">
                        <div className="img">
                            <img src="/assets/png/home.png" />
                        </div>
                        <div className="text">
                            <h4>
                                Explore & meet The Leading
                                Marketplace for Trading
                            </h4>
                            <p>
                                Shanzhan Fainy  Co., Ltd Factory is a professional manufacturer of Sports wear,
                                located in Suzhou, Jiangsu Province of China. Our company has been in the wedding
                                business for over 10 years. Now, we have our clients in more than 30 countries and
                                regions including the United States, Britain, Germany, Greece, France, Spain, Italy,
                                Turkey, Ireland, Belarus, Poland, Iran, Lebanon, Malaysia, Singapore and so on. Our
                                dresses are all made of high quality materials with reasonable prices and various
                                styles. We have very professional and high efficient employees of 150 people in the
                                development and design. We have the monthly output of 3000pcs.
                            </p>
                            <button> Learn More </button>
                        </div>
                    </div>
                </div>

            </section>

            <section className="section5-seller-home">
                {head("Our advantage")}
                <div className="div-section">
                    <div className="img-group">
                        <img src={icon_adv1} alt="" />
                        <img src={icon_adv2} alt="" />
                        <img src={icon_adv3} alt="" />
                        <img src={icon_adv4} alt="" />
                    </div>
                </div>
            </section>
            <section className="section6-seller-home">
                {head(" Our certificate")}
                <div className="div-section">
                    <div className="img-group">
                        <img src={certificate} alt="" />
                        <img src={certificate} alt="" />
                        <img src={certificate} alt="" />
                        <img src={certificate} alt="" />
                    </div>
                </div>
            </section>

            <section className="section7-seller-home">
                {head("Company Introduction")}
                <div className="div-section">
                    <div className="group-company">
                        {
                            company.map((list, index) => {
                                return (
                                    <div className="card-comp" key={index}>
                                        <img src={list.icon} alt="" />
                                        <div>
                                            <b> {list.label} </b>
                                            <p> {list.label2} </p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
            <section className="section8-seller-home">
                <FormSupplier />
            </section>
        </div>
    )
}

export default HomeSeller