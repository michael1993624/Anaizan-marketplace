import React from "react"

import { FaChevronDown, FaPlusCircle } from "react-icons/fa"
import CardProductLike from "../../components/CardProductLike/CardProductLike"
import CardProductShop from "../../components/CardProductShop/CardProductShop"
import ProductDisplay from "../ProductDisplay/ProductDisplay"

import "./OfficialShop.scss"


const OfficialShop = () => {

    const listProduct = [
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
        { img: "/assets/png/habitss.png", price: "$ 15.00" },
    ]

    const product = [
        { img: "/assets/png/sac2.png", year: "2" },
        { img: "/assets/png/sac2.png", year: "2" },
        { img: "/assets/png/sac2.png", year: "2" },
        { img: "/assets/png/sac2.png", year: "2" },
        { img: "/assets/png/sac2.png", year: "2" },
        { img: "/assets/png/sac2.png", year: "2" },
        { img: "/assets/png/sac2.png", year: "2" },
        { img: "/assets/png/sac2.png", year: "2" },
    ]

    return (
        <div className="body_home official-shop">
            <div className="backImage" style={{
                backgroundImage: "url(/assets/png/back_img.png)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            }}>
                <div>
                    <h4> Official Shops </h4>
                    <p> Get to meet our Official Shops from al
                        around the Globe </p>
                </div>
            </div>

            <section className="official-section1 d-col">
                <div className="block1">
                    <div className="head d-flex align-items-center justify-content-between">
                        <div></div>
                        <h4> Leading Partners and Exhibitors </h4>
                        <div></div>
                    </div>
                    <div className="bloc">
                        <CardProductShop listProduct={product} />
                    </div>
                    <button> See more </button>
                </div>
                <ProductDisplay listProduct={listProduct} />
            </section>
        </div>
    )
}

export default OfficialShop