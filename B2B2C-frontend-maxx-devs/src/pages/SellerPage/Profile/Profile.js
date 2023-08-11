import React, { useState, useEffect } from "react"

import "./Profile.scss"
import { FaCheckCircle, FaDownload } from "react-icons/fa"
import ContentGroupProd from "../../../components/ContentGroupProd/ContentGroupProd"
import FormSupplier from "../../../components/FormSupplier/FormSupplier"

import prod1 from "../../../assets/images/product/1.jpg"
import prod2 from "../../../assets/images/product/2.jpg"
import prod3 from "../../../assets/images/product/3.jpg"
import prod4 from "../../../assets/images/product/4.jpg"

import room1 from "../../../assets/images/suppliers/a1.png"
import room2 from "../../../assets/images/suppliers/a2.png"
import room3 from "../../../assets/images/suppliers/a3.png"

const ProfileSeller = () => {

    const [tab, setTab] = useState(0);

    const product = [
        { img: prod1, desc: " Ready To Ship High Quality 3 Pieces Formal Suit with..." },
        { img: prod2, desc: " Ready To Ship High Quality 3 Pieces Formal Suit with..." },
        { img: prod3, desc: " Ready To Ship High Quality 3 Pieces Formal Suit with..." },
        { img: prod4, desc: " Ready To Ship High Quality 3 Pieces Formal Suit with..." }
    ]

    const active = {
        borderTopLeftRadius: "4px",
        borderBottomLeftRadius: "4px",
        borderLeft: "3px solid var(--blue-color)",
        background: "var(--blue-hover-transparent-color)"
    }

    const no_active = {
        borderLeft: "none",
        background: "white"
    }

    const infosCompany =
    {
        desc: `Shenzhen Feiny  Co., Ltd Factory is a professional manufacturer of Sports
            wear, located in Suzhou, Jiangsu Province of China. Our company has been
            in the wedding business for over 10 years. Now, we have our clients in more
            than 30 countries and regions including the United States, Britain, Germany,
            Greece, France, Spain, Italy.`
    }

    const productCapacity = [
        { name: "Drum Winder", num: "", qty: "2" },
        { name: "Drum Winder", num: "", qty: "5" },
        { name: "Drum Winder", num: "", qty: "5" },
    ]
    const tradeCapacity = [
        { name: "Drum Winder", num: "", qty: "2" },
        { name: "Drum Winder", num: "", qty: "5" },
        { name: "Drum Winder", num: "", qty: "5" },
    ]

    const overview =
    {
        transaction: "24,000+",
        rating: "4.5",
        reviews: "48",
        positiveFeedBack: "98.04%",
        responseTime: "3h",
        businesType: "Trading Company",
        country: "China",
        mainProduct: "Sportswear, Beauty wear",
        ownership: "Private Owner",
        nbEmploye: "51 - 100",
        revenueAnnuel: "$160,000",
        yearEstablished: "2019",
        patents: "$160,000",
        certfications: "",
        mainMarket: " North America 35.00%,Oceania 35.00%, Southeast Asia 10.00%",
    }

    const positionActive = { position: "fixed", top: "0%"}

    useEffect (() => {
        let y = window.scrollY,
            bloc = document.querySelector(".bloc-nav-menu");

        if (y > 500) {
            bloc.style.position = "fixed"
            bloc.style.top = "0"
        }
    })

    return (
        <div className="body_home seller-profile-page">
            <section className="section1-profile-page">
                <div className="bloc-nav-menu">
                    <ul>
                        <li style={tab == 0 ? active : no_active}>
                            <a href="#1"> Company Overview </a>      
                        </li>
                        <li style={tab == 1 ? active : no_active}> 
                            <a href="#2"> Production Capacity </a>     
                        </li>
                        <li style={tab == 2 ? active : no_active}> 
                            <a href="#3"> Trade Capacity </a>
                        </li>
                        <li style={tab == 3 ? active : no_active}> 
                            <a href="#4"> Quality Control </a>
                        </li>
                    </ul>
                </div>
                <div className="tab-content-profil">
                    <div className="head-tab-profil">
                        <h3>
                            Shenzhen Feiny  Co., Ltd
                            <span> 4 yr </span>
                        </h3>
                        <div>
                            <button>
                                <img src="/assets/svg/chat.svg" alt="" />
                                Chat&nbsp;Now
                            </button>
                            <button>
                                Contact&nbsp;Supplier
                            </button>
                        </div>
                    </div>
                    <div className="container-tab-profil">
                        <div className="tab1-profil" id="1">
                            <h3> Company Overview </h3>
                            <p id="p">
                                <span> Photos </span>
                                <span> Videos <img src="/assets/svg/plays.svg" alt="" /> </span>
                            </p>
                            <div className="block-div-overview">
                                <div className="group-sale">
                                    <img src={room1} />
                                    <img src={room2} />
                                    <img src={room3} />
                                </div>
                                <div className="infos-sale">
                                    <div>
                                        <h3> Company Information </h3>
                                        <p>
                                            {infosCompany.desc}
                                        </p>
                                    </div>
                                    <div>
                                        <p>
                                            <label> Transaction </label>
                                            <b> {overview.transaction} </b>
                                        </p>
                                        <p>
                                            <label> Rating </label>
                                            <b> {overview.rating}/5 </b>
                                        </p>
                                        <p>
                                            <label> Reviews </label>
                                            <b> {overview.reviews} Reviews </b>
                                        </p>
                                        <p>
                                            <label> Positive Feedback </label>
                                            <b> {overview.positiveFeedBack} </b>
                                        </p>
                                        <p>
                                            <label> Response Time </label>
                                            <b> {overview.responseTime} </b>
                                        </p>
                                    </div>
                                </div>

                                <table border="1" className="table-profil">
                                    <tbody>
                                        <tr>
                                            <td> Business Type </td>
                                            <td> <b>{overview.businesType}</b> </td>
                                            <td> Country/Region </td>
                                            <td> <b> {overview.country} </b> </td>
                                        </tr>
                                        <tr>
                                            <td> Main Products </td>
                                            <td> <b>{overview.mainProduct}</b> </td>
                                            <td> Ownership </td>
                                            <td> <b> {overview.ownership} </b> </td>
                                        </tr>
                                        <tr>
                                            <td> Total Employees </td>
                                            <td> <b> {overview.nbEmploye} People </b> </td>
                                            <td> Total Annual Revenue </td>
                                            <td> <b> {overview.revenueAnnuel} </b> </td>
                                        </tr>
                                        <tr>
                                            <td> Year Established </td>
                                            <td> <b> {overview.yearEstablished} </b> </td>
                                            <td> Patents </td>
                                            <td> <b> {overview.patents} </b> </td>
                                        </tr>
                                        <tr>
                                            <td> Certifications </td>
                                            <td> <b> {overview.certfications} </b> </td>
                                            <td> Main Markets </td>
                                            <td> <b>
                                                {overview.mainMarket}
                                            </b> </td>
                                        </tr>
                                        <tr>
                                            <td> Trademarks(1) </td>
                                            <td> <b>  </b> </td>
                                            <td>  </td>
                                            <td> <b>  </b> </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="bloc2" id="2">
                            <h3> Product Capacity </h3>
                            <h4> Production Equipment </h4>
                            <table border="1" className="table-profil">
                                <thead>
                                    <tr>
                                        <th> Name </th>
                                        <th> No </th>
                                        <th> Quantity </th>
                                        <th> Verified </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {productCapacity.map((list, index) => {
                                        return (
                                            <tr key={index}>
                                                <td> {list.name} </td>
                                                <td> {list.num} </td>
                                                <td> {list.qty} </td>
                                                <td> <FaCheckCircle /> </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>

                        <div className="bloc2" id="3">
                            <h3> Trade Capacity </h3>
                            <h4> Main Markets & Product(s) </h4>

                            <table border="1" className="table-profil">
                                <thead>
                                    <tr>
                                        <th> Name </th>
                                        <th> No </th>
                                        <th> Quantity </th>
                                        <th> Verified </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {productCapacity.map((list, index) => {
                                        return (
                                            <tr key={index}>
                                                <td> {list.name} </td>
                                                <td> {list.num} </td>
                                                <td> {list.qty} </td>
                                                <td> <FaCheckCircle /> </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                        <div className="box-slide">
                            <ContentGroupProd label="You may also like" listProduct={product} />
                        </div>
                        <div className="bloc3">
                            <h3> Inspection Reports by TUV Rheinland <FaCheckCircle /> </h3>
                            <h4>Supplier Assessment </h4>
                            <div className="pdfs">
                                <div className="pdf">
                                    <div>
                                        <a href=""> <FaDownload /> </a>
                                        <b> PDF </b>
                                    </div>
                                    <p> Report 1 </p>
                                </div>
                                <div className="pdf">
                                    <div>
                                        <a href=""> <FaDownload /> </a>
                                        <b> PDF </b>
                                    </div>
                                    <p> Report 2 </p>
                                </div>
                            </div>
                        </div>
                        <FormSupplier />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProfileSeller