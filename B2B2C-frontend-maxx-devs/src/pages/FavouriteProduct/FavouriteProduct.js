import React from "react";
import { useState } from "react";
import { FaComments } from "react-icons/fa"
import { useNavigate } from "react-router-dom";

import "./FavouriteProduct.scss"

import ContentGroupProd from "../../components/ContentGroupProd/ContentGroupProd"
import house from "../../assets/svg/house.svg"
import supplierShop1 from "../../assets/images/suppliers/a1.png"
import supplierShop2 from "../../assets/images/suppliers/a2.png"
import supplierShop3 from "../../assets/images/suppliers/a3.png"
import ButtonPagination from "../../components/ButtonPagination/ButtonPagination";
import { COMPARISON_PAGE } from "../../settings/constants";


const ProductFavourite = () => {
    const Navigate = useNavigate()
    const [tab, setTabs] = useState(0)

    const product = [
        { img: "/assets/product/pro1.png", desc: " Ready To Ship High Quality 3 Pieces Formal Suit with..." },
        { img: "/assets/product/pro1.png", desc: " Ready To Ship High Quality 3 Pieces Formal Suit with..." },
        { img: "/assets/product/pro1.png", desc: " Ready To Ship High Quality 3 Pieces Formal Suit with..." },
    ]

    const supplier = [
        {
            company: "Wenzhou Fa Bric Trade Co., Ltd.",
            items: [
                { img: supplierShop1, desc: "Wholesale super soft and breathable..." },
                { img: supplierShop2, desc: "Wholesale super soft and breathable..." },
                { img: supplierShop3, desc: "Wholesale super soft and breathable..." },
            ]
        },
        {
            desc: "Wholesale super soft and breathable...",
            items: [
                { img: supplierShop1, desc: "Wholesale super soft and breathable..." },
                { img: supplierShop2, desc: "Wholesale super soft and breathable..." },
                { img: supplierShop3, desc: "Wholesale super soft and breathable..." },
            ]
        }
    ]



    const active = {
        color: "white",
        background: "var(--blue-color)"
    }

    const no_active = {
        color: "var(--gray-400-color)",
        background: "var(--gray-100-color)"
    }

    const show = {
        display: "block"
    }

    const hide = {
        display: "none"
    }

    const selectItems = () => {
        let check = document.getElementById("checkAll"),
            checkAll = document.querySelector("#checkProd");

        if (tab == 0) {
            if(check.checked) {
                for( var i = 0; i < checkAll.clientHeight; i++) {
                    
                }
            }
        } else if ( tab ==1 ) {
            if (check.checked) {
                for( var i = 0; i < checkAll.clientHeight; i++) {
                    
                }
            }
        }
    }

    return (
        <div className="body_home favourite-product-page">
            <section className="section1-favourite-prod d-col">
                <div className="block1-section-fp">
                    <div className="tabs-content-fp">
                        <div className="head-tab-fp">
                            <button style={tab == 0 ? active : no_active}
                                onClick={() => setTabs(0)}
                                id="btn"> Products </button>
                            <button style={tab == 1 ? active : no_active}
                                onClick={() => setTabs(1)} id="btn"> Supplier </button>
                        </div>
                        <div className="tab-group-fp">
                            <div className="tab-content-head-fp d-flex align-items-center">
                                <span> All (3) </span>
                                <div>
                                    <input 
                                    type="checkbox" 
                                    name="" id="checkAll"
                                    onChange={selectItems} />
                                    <button> <FaComments /> Chat&nbsp;now </button>
                                    <button onClick={() => Navigate(COMPARISON_PAGE)}> Compare </button>
                                    <button> Delete </button>
                                </div>
                            </div>
                            <div style={tab == 0 ? show : hide} >
                                <div className="content-tab-fp">
                                    {product.map((list, index) => {
                                        return (
                                            <div className="div-card-fp" key={index}>
                                                <input type="checkbox" name="" id="checkProd" />
                                                <div className="imgs-fp">
                                                    <div className="img-fp d-flex align-items-center">
                                                        <img src={list.img} alt="" />
                                                    </div>
                                                    <div className="infos-div-fp">
                                                        <h3>
                                                            High Quality A AMI LEVEL 3 blue green Disposable steri...
                                                            <button className="btn-submit"> Contact Supplier </button>
                                                        </h3>
                                                        <h3>
                                                            <span>
                                                                <img src="/assets/svg/house.svg" alt="" />
                                                                Wenzhou Fa Bric Trade Co., Ltd.
                                                            </span>
                                                            <button id="btn2"> <FaComments /> Chat&nbsp;now</button>
                                                        </h3>
                                                        <b> $12.99 - 13.99 / Piece </b>
                                                        <p> 1 Piecs(MOQ) </p>
                                                        <p> 1-3 Days(Processing time) </p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}

                                </div>
                            </div>
                            <div style={tab == 1 ? show:hide}>
                                <div className="content-tab2-fp">
                                    {
                                        supplier.map((list, index) => {
                                            return (
                                                <div className="card-group-shop" key={index}>
                                                    <input type="checkbox" name="" id="" />
                                                    <div className="card-supplier-shop">
                                                        <h3>
                                                            <img src={house} alt="" />
                                                            {list.company}
                                                        </h3>
                                                        <div className="group-shop d-flex justify-content-between">
                                                            {
                                                                list.items && (
                                                                    list.items.map((list2, index2) => {
                                                                        return (
                                                                            <div key={index2}>
                                                                                <img src={list2.img} alt="" />
                                                                                <h4>
                                                                                    {list2.desc}
                                                                                </h4>
                                                                            </div>
                                                                        )
                                                                    })
                                                                )
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className="btn-group-right">
                                                        <button> Contact Supplier </button>
                                                        <button> <FaComments /> Chat Now </button>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <ButtonPagination />
                {/* 
                <ContentGroupProd label=" Related Products" listProduct={product} /> */}
            </section>
        </div>
    )
}

export default ProductFavourite