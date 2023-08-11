import React from "react"

import "./SellerContact.scss"
import { FaComments } from "react-icons/fa"
import FormSupplier from "../../../components/FormSupplier/FormSupplier"

import person from "../../../assets/images/profile/p_5.jpg"

const SellerContact = () => {

    const contact = 
        {
            imgProfil: person,
            name: "Sonny Von",
            fonction: "CEO / General Manager, Sale Manager",
            phone: "+86 139 1099 8888",
            phone2: "+86 139 1099 8888",
            zip: "215000",
            country: "China",
            province: "Suzhou",
            city: "Mali",
            company: "Shenzhen Feiny  Co., Ltd",
            adress: "Room 1513-1515, West Seat, Building A, Flower Center, Suzhou, Jiangsu, China",
            website: "shenzhenfeiny.en.anaizan.com"
        }

    return (
        <div className="body_home seller-profil">
            <section>
                <div className="block1-info">
                    <h3 className="d-flex align-items-center"> Contact Information </h3>
                    <div className="div-block">
                        <div className="div1">
                            <div>
                                <img src={contact.imgProfil} alt="" />
                            </div>
                            <div>
                                <h4> {contact.name} </h4>
                                <p>
                                {contact.fonction}
                                </p>
                                <button> <FaComments />  Chat&nbsp;Now </button>
                            </div>
                        </div>
                        <div className="div2">
                            <p>
                                Telephone:
                                <b> {contact.phone} </b>
                            </p>
                            <p>
                                Mobile&nbsp;phone:
                                <b> {contact.phone2} </b>
                            </p>
                            <p>
                                Zip:
                                <b> {contact.zip} </b>
                            </p>
                            <p>
                                Country/Region:
                                <b> {contact.country} </b>
                            </p>
                            <p>
                                Province/State:
                                <b> {contact.province} </b>
                            </p>
                            <p>
                                City:
                                <b> {contact.city} </b>
                            </p>
                            <div className="btns">
                                <button> Start Order </button>
                                <button> Contact Supplier </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="block2-infos">
                    <h3  className="d-flex align-items-center"> Company Contact Information </h3>
                    <div className="texts">
                        <p>
                            Company Name:
                            <b> {contact.company} </b>
                        </p>
                        <p>
                            Operational Address:
                            <b> {contact.adress} </b>
                        </p>
                        <p>
                            Website on Anaizan:
                            <b> {contact.website} </b>
                        </p>
                    </div>
                </div>
                <FormSupplier />
            </section>
        </div>
    )
}


export default SellerContact