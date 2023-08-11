import { useState } from "react"
import { Link } from "react-router-dom"
import { RiArrowDownSFill } from "react-icons/ri"
import "./SaleProduct.scss"


const SaleProducts = ({ backImage, backColor, listProduct, param, colors, tabIndex }) => {
    const [categories, setCategories] = useState("Consumer")

    const [tab, setTab] = useState(tabIndex)

    const active = {
        background: colors,
        color: "white",
        borderTopLeftRadius: "4px",
        borderTopRightRadius: "4px"
    }

    const no_active = {
        background: "white",
        color: colors,
        borderTopLeftRadius: "0px",
        borderTopRightRadius: "0px"
    }

    const showProdCat = (index2) => {
        setTab(index2)
    }

    const showProduct = () => {
        return (
            listProduct.map((list, index) => {
                if (categories == list.categorie)
                    return (
                        <Link to={""} key={index} className="link-prod">
                            <div className="img_product">
                                <img src={list.img} />
                                <h4> {list.nam} </h4>
                            </div>
                        </Link>
                    )
            })
        )
    }
    const image = backImage

    return (
        <div className="sale-product-group">
            <div className="sale-div-child1"
                style={{
                    backgroundImage: image,
                    backgroundSize: "cover", backgroundRepeat: "no-repeat",
                    backgroundColor: tabIndex >= 12 ? " #b6d887" : "",
                    backgroundPositionY: tabIndex >= 12 ? "80%" : "0%",

                }}>
                <p>
                    Shopping Guide for trending
                    styles
                </p>
                <button style={{ background: colors }}> Sources Now </button>
            </div>
            <div className="sale-div-child2">
                <div style={{ borderBottom: "2px solid" + colors }} className="btn_groups_tab" id="btns_tab">
                    <button
                        style={tab == tabIndex ? { ...active } : { ...no_active }}
                        onClick={() => showProdCat(tabIndex /* param[0].label, param[0].idBtn[0], param[0].index,param[0].back */)}>
                        Consumer Electronics
                        {tab == tabIndex ? <RiArrowDownSFill style={{ color: colors }} /> : ""}
                    </button>
                    <button style={tab == (tabIndex + 1) ? { ...active } : { ...no_active }}
                        onClick={() => showProdCat((tabIndex + 1)/* "Mobile", "#btn", 1, "#76A4D8" */)}>
                        Mobile Electronics
                        {tab == (tabIndex + 1) ? <RiArrowDownSFill style={{ color: colors }} /> : ""}
                    </button>
                    <button
                        style={tab == (tabIndex + 2) ? { ...active } : { ...no_active }}
                        onClick={() => showProdCat((tabIndex + 2)/* "Smart", "#btn", 2, "#76A4D8" */)}>
                        Smart Home Appliances
                        {tab == (tabIndex + 2) ? <RiArrowDownSFill style={{ color: colors }} /> : ""}
                    </button>
                    <button
                        style={tab == (tabIndex + 3) ? { ...active } : { ...no_active }}
                        onClick={() => showProdCat((tabIndex + 3)/* "Home", "#btn", 3, "#76A4D8" */)}>
                        Home & Kitchen
                        {tab == (tabIndex + 3) ? <RiArrowDownSFill style={{ color: colors }} /> : ""}
                    </button>
                </div>
                <div className="tabs_group">
                    <div className="tabs">
                        {showProduct()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SaleProducts