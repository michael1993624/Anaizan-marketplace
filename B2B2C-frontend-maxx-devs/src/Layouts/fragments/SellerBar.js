import React from "react"
import { FaSearch } from "react-icons/fa"

export const SellerBar = () => {
    const [actives, setActives] = useState(
        sessionStorage.getItem("id_menu_seller") ?
        sessionStorage.getItem("id_menu_seller") : 0
        )

    const active = {
        background: "var(--blue-color)"
    }

    const no_active = {
        background: "none",
    }

    const clickMenu = (index) => {
        alert(index)
        sessionStorage.setItem("id_menu_seller", index)
    }


    return (
        <div className="hide">
            <div className="head_seller">
                <div className="back_img"
                    style={{
                        backgroundImage: "url(/assets/png/groups.png)",
                        backgroundSize: "100%",
                        paddingTop: "",
                        backgroundPositionY: "50%",
                        backgroundSize: "no-repeat"
                    }}>
                    <div>
                        <h1> Shenzhen Feiny  Co. Ltd </h1>
                        <li>
                            <img src="/assets/svg/Warehouse.svg" />
                            Manufacturer, Trading Company
                        </li>
                        <li> Main Products: Sport Dresses </li>
                        <li>
                            <img src="/assets/svg/verified.svg" alt="" />
                            Verified &nbsp; <b> Seller </b>
                        </li>
                    </div>
                    <div>
                        <h3>
                            <img src="/assets/svg/verified.svg" alt="" />
                            Verified by TUV Rheinland
                        </h3>
                        <button> Contact Supplier </button>
                        <button> Chat Now </button>
                        <button> <img src="/assets/svg/follow.svg" alt="" /> Follow </button>
                    </div>
                </div>
                <div className="nav_seller" >
                    <nav className="nav3">
                        <ul>
                            <li className="link"
                            style={actives === 0 ? active:no_active}
                            onClick={() => clickMenu(0)}>
                                <a href="/seller/home" >
                                    Home
                                </a>
                            </li>
                            <li className="link"
                            style={actives === 1 ? active:no_active}
                            onClick={() => clickMenu(1)}>
                                <a href="/seller/product">
                                    Products
                                </a>
                            </li>
                            <li className="link"
                            style={actives === 2 ? active:no_active}
                            onClick={() => clickMenu(2)}>
                                <a href="/seller/profile">
                                    Profile
                                </a>
                            </li>
                            <li className="link"
                            style={actives === 3 ? active:no_active}
                            onClick={() => clickMenu(3)}>
                                <a href="/seller/contact">
                                    Contacts
                                </a>
                            </li>
                            <li className="link"
                            style={actives === 4 ? active:no_active}
                            onClick={() => clickMenu(4)}>
                                <a href="/seller/product/promotion">
                                    Promotion
                                </a>
                            </li>
                            <li className="link"
                            style={actives === 5 ? active:no_active}
                            onClick={() => clickMenu(5)}>
                                <a href="/seller/product/feeds"> Feeds </a>
                            </li>
                        </ul>
                    </nav>
                    <form>
                        <button> <FaSearch /></button>
                        <input type="search" name="text" id="text" placeholder="Search in this store" />
                    </form>
                </div>
            </div>
        </div>
    )
}