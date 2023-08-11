import React from "react"
import { FaSearch } from "react-icons/fa"
import { SELLER_CONTACT, 
    SELLER_HOME, 
    SELLER_PRODUCT_FEEDS, 
    SELLER_PRODUIT, 
    SELLER_PROFILE, 
    SELLER_PROMOTION } from "../../../settings/constants"

import verified from "../../../assets/svg/verified.svg"
import fond from "../../../assets/images/groups.png"
import warehouse from "../../../assets/svg/Warehouse.svg"
import follow from "../../../assets/svg/follow.svg"


export const NavBar = () => {
    return (
        <div className="head-seller-shop">
            <div className="back-img-div"
                style={{
                    backgroundImage: "url("+fond+")",
                    backgroundSize: "cover",
                    paddingTop: "",
                    backgroundPositionY: "50%",
                    backgroundSize: "no-repeat"
                }}>
                <div>
                    <h1> Shenzhen Feiny  Co., Ltd </h1>
                    <li>
                        <img src={warehouse} />
                        Manufacturer, Trading Company
                    </li>
                    <li> Main Products: Sport Dresses </li>
                    <li>
                        <img src={verified} alt="" />
                        Verified &nbsp; <b> Seller </b>
                    </li>
                </div>
                <div>
                    <h3>
                        <img src={verified} alt="" />
                        Verified by TUV Rheinland
                    </h3>
                    <button> Contact Supplier </button>
                    <button> Chat Now </button>
                    <button> <img src={follow} alt="" /> Follow </button>
                </div>
            </div>
            <div className="navbar-seller-shop" >
                <nav className="nav-bar-ss">
                    <ul>
                        <li className="link">
                            <a href={SELLER_HOME} >
                                Home
                            </a>
                        </li>
                        <li className="link">
                            <a href={SELLER_PRODUIT}>
                                Products
                            </a>
                        </li>
                        <li className="link">
                            <a href={SELLER_PROFILE}>
                                Profile
                            </a>
                        </li>
                        <li className="link">
                            <a href={SELLER_CONTACT}>
                                Contacts
                            </a>
                        </li>
                        <li className="link">
                            <a href={SELLER_PROMOTION}>
                                Promotion
                            </a>
                        </li>
                        <li className="link">
                            <a href={SELLER_PRODUCT_FEEDS}> Feeds </a>
                        </li>
                    </ul>
                </nav>
                <form>
                    <button> <FaSearch /></button>
                    <input type="search" name="text" id="text" placeholder="Search in this store" />
                </form>
            </div>
        </div>
    )
}