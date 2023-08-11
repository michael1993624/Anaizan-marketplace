import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import CompareBox from "./compareBox/CompareBox";
import CompareBox2 from "./compareBox/CompareBox2";

import "./Comparison.scss"

import vue from "../../assets/svg/oeil.svg"
import star from "../../assets/svg/star.svg"
import clock from "../../assets/svg/hour.svg"
import flag from "../../assets/images/flag/fr.png"
import prod_comp1 from "../../assets/images/product/2.jpg"
import prod_comp2 from "../../assets/images/product/3.jpg"
import comments_icon from "../../assets/svg/comments.svg"
import SwitchBox from "../../components/SwitchBox/SwitchBox";

const Comparison = () => {

    const [tabs, setTabs] = useState(0)

    //function qui de charger l'index d'une onglet
    const changeIndex = (index) => {
        setTabs(index)
    }

    const productInfos = [
        {
            img: prod_comp1,
            descProd: " Ready To Ship High Quality 3 Pieces Formal Suit with...",
            vue: 200,
            hour: "24h",
            nbStar: "4.9",
            nbPiece: 2,
            price: "US $ 6.5-6.7/Piece",
            companyName: "Jiangsu Mofisi Weaving Co., Ltd.",
            businessType: "Manufacturer, Trading Company",
            paymentTerms: "Western Unions",
            supplierLocation: "China",
            flagsCountry: flag,
            CountryName: "China",
            mainProduct: "Bathrobe Towel",
            totalAnnuel: "US$2.5 Million - US$5 Million",
            expYear: 3,
        },
        {
            img: prod_comp2,
            descProd: " Ready To Ship High Quality 3 Pieces Formal Suit with...",
            vue: 200,
            hour: "24h",
            nbStar: "4.9",
            nbPiece: 2,
            price: "US $ 6.5-6.7/Piece",
            companyName: "Jiangsu Mofisi Weaving Co., Ltd.",
            businessType: "Manufacturer, Trading Company",
            paymentTerms: "Western Unions",
            supplierLocation: "China",
            flagsCountry: flag,
            CountryName: "China",
            mainProduct: "Bathrobe Towel",
            totalAnnuel: "US$2.5 Million - US$5 Million",
            expYear: 3,
        },
        {
            img: prod_comp1,
            descProd: " Ready To Ship High Quality 3 Pieces Formal Suit with...",
            vue: 200,
            hour: "24h",
            nbStar: "4.9",
            nbPiece: 2,
            price: "US $ 6.5-6.7/Piece",
            companyName: "Jiangsu Mofisi Weaving Co., Ltd.",
            businessType: "Manufacturer, Trading Company",
            paymentTerms: "Western Unions",
            supplierLocation: "China",
            flagsCountry: flag,
            CountryName: "China",
            mainProduct: "Bathrobe Towel",
            totalAnnuel: "US$2.5 Million - US$5 Million",
            expYear: 3,
            transactionHistory: "-"
        },
    ]

    //function qui permet d'afficher les onglets
    const showTabs = () => {

        if (tabs == 0) {
            return (
                <>
                    <div className="tabs-content-mb">
                        <CompareBox listProductInfos={productInfos}
                            compareText="Min.Order Quantity" compareText2="FOB Price" />
                    </div>
                </>
            )
        }
        else if (tabs == 1) {
            return (
                <div className="tabs-content-mb">
                    <CompareBox2 listProduct={productInfos} />
                </div>
            )
        }
        else if (tabs == 2) {
            return (
                <div className="tabs-content-mb">
                    <CompareBox listProductInfos={productInfos}
                        compareText="No. of years with Anaizan.com"
                        compareText2="Transaction History" />
                </div>
            )
        }
    }
    const active = {
        color: "white",
        background: "var(--blue-color)"
    }

    const no_active = {
        color: "var(--gray-400-color)",
        background: "none"
    }

    useEffect(() => {
    }, [])

    return (
        <div className="body_home compare-product-page">
            <section className="section1-compare-box">
                <h3> Compare Box </h3>
                <p className="p-first" > <input type="checkbox" name="" id="" /> Selected 3/3  </p>
                <div className="group-img-compare d-flex align-items-center justify-content-between">
                    {
                        productInfos.map((list, index) => {
                            return (
                                <div key={index}>
                                    <span> &times;</span>
                                    <img src={list.img} alt="" />
                                </div>
                            )
                        })
                    }
                </div>

                <div className="compare_box">
                    <div className="head-compare">
                        <label> Compare result </label>
                        <p>
                            <label> View:</label>
                            <select name="" id="">
                                <option> All Features </option>
                            </select>
                        </p>
                        <p>
                            <input type="checkbox" name="" id="" />
                            <span> Hide the same </span>
                        </p>
                        <p>
                            <input type="checkbox" name="" id="" />
                            <span> Highlight the Difference </span>
                        </p>
                    </div>

                    <table border="1px" className="compare-box-prod">
                        <tbody>
                            <tr>
                                <td></td>
                                {
                                    productInfos.map((list, index) => {
                                        return (
                                            <td key={index}>
                                                <div className="div-img-table">
                                                    <div>
                                                        <img src={list.img} alt="" />
                                                    </div>
                                                    <div>
                                                        <h4> {list.descProd} </h4>
                                                        <button className=""> Contact Supplier </button>
                                                    </div>
                                                </div>
                                                <div className="foot d-flex align-items-center">
                                                    <span>
                                                        <img src={vue} alt="" />
                                                        {list.vue}
                                                    </span>

                                                    <span>
                                                        <img src={star} alt="" />
                                                        {list.nbStar}/5
                                                    </span>

                                                    <span>
                                                        <img src={clock} alt="" />
                                                        {list.hour}
                                                    </span>
                                                </div>
                                            </td>
                                        )
                                    })
                                }
                            </tr>

                            <tr className="row-title">
                                <td colspan={(productInfos.length + 1)}> Product Features </td>
                            </tr>

                            <tr>
                                <td> Min.Order Quantity </td>
                                {
                                    productInfos.map((list, index) => {
                                        return (
                                            <td key={index}> {list.nbPiece} </td>
                                        )
                                    })
                                }
                            </tr>

                            <tr>
                                <td> FOB Price </td>
                                {
                                    productInfos.map((list, index) => {
                                        return (
                                            <td key={index}> {list.price} </td>
                                        )
                                    })
                                }
                            </tr>

                            <tr className="row-title" >
                                <td colSpan={(productInfos.length + 1)}> Supplier Features </td>
                            </tr>

                            <tr>
                                <td> Company Name </td>
                                {
                                    productInfos.map((list, index) => {
                                        return (
                                            <td key={index}> {list.companyName} </td>
                                        )
                                    })
                                }
                            </tr>

                            <tr>
                                <td> Business Type </td>
                                {
                                    productInfos.map((list, index) => {
                                        return (
                                            <td key={index}> {list.businessType} </td>
                                        )
                                    })
                                }
                            </tr>

                            <tr>
                                <td> Payment Terms </td>
                                {
                                    productInfos.map((list, index) => {
                                        return (
                                            <td key={index}> {list.paymentTerms} </td>
                                        )
                                    })
                                }
                            </tr>

                            <tr>
                                <td> Supplier Location </td>
                                {
                                    productInfos.map((list, index) => {
                                        return (
                                            <td key={index}> <img src={list.flagsCountry} alt="" /> China </td>
                                        )
                                    })
                                }
                            </tr>

                            <tr>
                                <td> Main Products </td>
                                {
                                    productInfos.map((list, index) => {
                                        return (
                                            <td key={index}> {list.mainProduct} </td>
                                        )
                                    })
                                }
                            </tr>

                            <tr>
                                <td> Total Annual Sales Volume </td>
                                {
                                    productInfos.map((list, index) => {
                                        return (
                                            <td key={index}> {list.totalAnnuel} </td>
                                        )
                                    })
                                }
                            </tr>

                            <tr className="row-title">
                                <td colSpan={(productInfos.length + 1)}> Online Performance </td>
                            </tr>

                            <tr>
                                <td> No. of years with Anaizan.com </td>
                                {
                                    productInfos.map((list, index) => {
                                        return (
                                            <td key={index}> {list.expYear} </td>
                                        )
                                    })
                                }
                            </tr>

                            <tr>
                                <td> Transaction History </td>
                                {
                                    productInfos.map((list, index) => {
                                        return (
                                            <td key={index}> {list.transactionHistory} </td>
                                        )
                                    })
                                }
                            </tr>

                            <tr className="row-title">
                                <td colSpan={(productInfos.length + 1)}> Trade Capability </td>
                            </tr>

                            <tr>
                                <td> Chat with Supplier </td>
                                {
                                    productInfos.map((_, index) => {
                                        return (
                                            <td key={index}>
                                                <button className="chat">
                                                    <img src={comments_icon} alt="" />
                                                    Chat Now !
                                                </button>
                                            </td>
                                        )
                                    })
                                }
                            </tr>

                            <tr>
                                <td> Select to contact </td>
                                {
                                    productInfos.map((_, index) => {
                                        return (
                                            <td key={index}> <SwitchBox /> </td>
                                        )
                                    })
                                }
                            </tr>

                            <tr>
                                <td>
                                    <span className="spans">
                                        <input type="checkbox" name="" id="" />
                                        Select All
                                    </span>
                                </td>
                                <td colSpan={productInfos.length}>
                                    <button className="btn-submit btn-contact"> Supplier </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section className="section2-compare-box">
                <div className="div1-compare-mobile">
                    <p>
                        <label> View:</label>
                        <select name="" id="">
                            <option> Select </option>
                        </select>
                    </p>
                    <div className="div2-child">
                        <p>
                            <input type="checkbox" name="" id="" />
                            <label> Hide the sam </label>
                        </p>
                        <p>
                            <input type="checkbox" name="" id="" />
                            <label> Highlight the Difference </label>
                        </p>
                    </div>

                    <div className="content-tabs-mobile">
                        <div className="heads-mb">
                            <button style={tabs == 0 ? active : no_active} onClick={() => changeIndex(0)}> Product Features </button>
                            <button style={tabs == 1 ? active : no_active} onClick={() => changeIndex(1)}> Supplier Features </button>
                            <button style={tabs == 2 ? active : no_active} onClick={() => changeIndex(2)}> Online Performance </button>
                        </div>
                        <div className="tabs-group-mb">
                            {showTabs()}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Comparison