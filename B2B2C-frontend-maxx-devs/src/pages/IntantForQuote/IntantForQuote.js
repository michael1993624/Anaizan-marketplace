import React from "react"
import {Link} from "react-router-dom"
import { FaStar } from "react-icons/fa"

import icon1 from "../../assets/svg/gp1.svg"
import icon2 from "../../assets/svg/gp2.svg"
import icon3 from "../../assets/svg/gp3.svg"
import icon4 from "../../assets/svg/gp4.svg"
import icon5 from "../../assets/svg/gp5.svg"

import "./IntantForQuote.scss"

const InstantQuote = () => {

    const product = [
        { img: "/assets/png/small.png", text: "Apparel" },
        { img: "/assets/png/small.png", text: "Apparel" },
        { img: "/assets/png/small.png", text: "Apparel" },
        { img: "/assets/png/small.png", text: "Apparel" },
        { img: "/assets/png/small.png", text: "Apparel" },
        { img: "/assets/png/small.png", text: "Apparel" }
    ]

    const stats = [
        { icon: icon1, nb: "235000+", label: "RFQs" },
        { icon: icon2, nb: "235000+", label: "RFQs" },
        { icon: icon3, nb: "235000+", label: "RFQs" },
        { icon: icon4, nb: "235000+", label: "RFQs" },
        { icon: icon5, nb: "235000+", label: "RFQs" },
    ]

    return (
        <div className="body_home instant-for-quote-page">
            <section className="section1-instant-fq"
                style={{
                    backgroundImage: "url(/assets/png/imgs2.png)",
                    backgroundRepeat: "no-repeat",
                    background: "cover"
                }}>
                <div className="transparent_div">
                    <div>
                        <h2> Global Sourcing Marketplace </h2>
                        <p> Get quotations from the most suitable suppliers </p>
                        <button className="btn-submit"> Submit RFQ </button>
                    </div>
                </div>
                <div className="group-stats-ifq">
                    {
                        stats.map((list, index) => {
                            return (
                                <div key={index}>
                                    <img src={list.icon} alt="" />
                                    <b> {list.nb} </b>
                                    <span> {list.label} </span>
                                </div>
                            )
                        })
                    }
                </div>
            </section>

            <section className="section2-instant-fq">
                <div className="block1-section2-ifq">
                    <h3> RFQ User Guide </h3>
                    <div className="groups ">
                        <div className="div">
                            <span> 1 </span>
                            <b> Submit RFQ </b>
                        </div>
                        <div className="bar-center"></div>
                        <div className="div">
                            <span> 2 </span>
                            <b> Analyze Quotation </b>
                        </div>
                        <div className="bar-center"></div>
                        <div className="div">
                            <span> 3 </span>
                            <b> Finish Order </b>
                        </div>
                    </div>
                </div>

                <div className="block2-section-ifq">
                    <h3> Most Recent RFQs from Various Industries </h3>
                    <div className="div1-section">
                        <div className="div1-card">
                            <div>
                                <img src="/assets/png/lova.png" alt="" />
                            </div>
                            <b> Apparel </b>
                        </div>
                        {product.map((list, index) => {
                            return (
                                <div className="div1-card" key={index}>
                                    <div>
                                        <img src={list.img} alt="" />
                                    </div>
                                    <b> {list.text} </b>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="block3-section-ifq">
                    {product.map((list, index) => {
                        return (
                            <Link to={""} key={index}>
                                <div className="card-img">
                                    <div className="div1-card-ifq d-flex align-items-center justify-content-between">
                                        <div>
                                            <img src={list.img} alt="" /><br />
                                            {new Array(4).fill().map((_,index) => {
                                                return <span key={index}> <FaStar /> </span>
                                            })}
                                        </div>
                                        <div className="info">
                                            <p>
                                                <b className="d-flex align-items-center justify-content-center"> Wholesale </b>
                                                <span> Large Screen Print Shirt </span>
                                            </p>
                                            <div className="d-col">
                                                <h3>
                                                    Sourcing&nbsp;Type: <span> Total&nbsp;Solution </span>
                                                </h3>
                                                <h3>
                                                    Destination:
                                                    <span> <img src="/assets/svg/flags.svg" alt="" /> Total&nbsp;Solution </span>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="div-card-foots">
                                        <span> 11 minutes before </span>
                                        <b className="d-flex align-items-center">
                                            Quote&nbsp;Now <button> Try&nbsp;RFQ </button>
                                        </b>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}

                </div>
            </section>
        </div>
    )
}

export default InstantQuote