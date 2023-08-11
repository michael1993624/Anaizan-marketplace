import React from "react"
import "./SupplierCard.scss"

import prime from "../../assets/svg/prime.svg"
import favourite from "../../assets/svg/favourite.svg"
import verified from "../../assets/svg/verified.svg"
import vm from "../../assets/images/vm.png"
import chat_icon from "../../assets/images/chats.png"
import { FaStar } from "react-icons/fa"


export const SupplierCard = ({ listSupplier }) => {
    return (
        <>
            {
                listSupplier.map((list, index) => {
                    return (
                        <div className="supplier-div" key={index}>
                            <div className="div-child1 d-flex justify-content-between">
                                <div className="div1">
                                    <div className="div1-child1 d-flex">
                                        <img className="vm-img" src={vm} />
                                        <div className="info-entreprise">
                                            <h2> {list.company} </h2>
                                            <p className="d-flex">
                                                <span className="d-flex align-items-center">
                                                    <img src={list.flag} /> CN
                                                </span>
                                                <span>
                                                    {list.expYear} Yrs
                                                </span>
                                                <span>
                                                    <img src={prime} />
                                                </span>
                                                <span className="d-flex align-items-center">
                                                    <img src={verified} />
                                                    Verified&nbsp; <b>Seller</b>
                                                </span>
                                            </p>
                                            <p className="d-flex">
                                                <span className="d-flex align-items-center">
                                                    <FaStar />
                                                    {list.etoil}
                                                </span>
                                                <span className="d-flex align-items-center">
                                                    {list.reviews} Reviews
                                                </span>
                                                <span className="btn-follow d-flex align-items-center">
                                                    <img src={favourite} />
                                                    Follow
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="div1-child2 d-flex align-items-center justify-content-between">
                                        <div className="ps">
                                            <p> Businnes Type : <span> {list.businessType} </span> </p>
                                            <p> Main Product : <span> {list.mainProduct} </span> </p>
                                            <p> City/Province : <span> {list.city} , {list.province} </span> </p>
                                        </div>
                                        <div className="div1-child3 d-flex align-items-center">
                                            {
                                                list.product && (
                                                    list.product.map(({ img, price }, index2) => {
                                                        return (
                                                            <div className="d-col" key={index2}>
                                                                <img src={img} />
                                                                <h4> $ {price} </h4>
                                                            </div>
                                                        )
                                                    })
                                                )
                                            }
                                        </div>
                                    </div>
                                    <div className="div1-child4 d-flex">
                                        <button> Contact Suppliers </button>
                                        <button className="d-flex align-items-center justify-content-center"> <img src={chat_icon} /> Chat Now </button>
                                        <button> Visit Store </button>
                                    </div>
                                </div>
                                <div className="div2-d d-col">
                                    <img className="top-img" src={list.typeProduct} />
                                    <img className="shop" src={list.imgSupplier} />
                                    <div className="div2-child1 d-flex align-items-center justify-content-between">
                                        {
                                            list.product2 && (
                                                list.product2.map(({ img }, index3) => {
                                                    return (
                                                        <img src={img} key={index3} />
                                                    )
                                                })
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}