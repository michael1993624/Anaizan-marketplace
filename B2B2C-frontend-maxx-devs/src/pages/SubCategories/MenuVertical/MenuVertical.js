import { useEffect, useState } from "react"
import { RiArrowDownSLine, RiArrowRightSLine } from "react-icons/ri"
import { FaChevronDown, FaChevronRight, FaSearch } from "react-icons/fa"

import "../DropDownMenu/DropDownMenu.scss"
import "flag-icon-css/css/flag-icons.min.css"

import { countries } from "../../../components/listCountry/ListCountry"

const MenuVertical = ({ title, stateLast, action, index, indice, listCategorie }) => {

    const [showItem, setShowItem] = useState()
    const [showSubItem, setShowSubItem] = useState()
    const [country, setCountry] = useState([])
    const [searchCountry, setSearchCountry] = useState({
        country1: "",
        country: ""
    })

    const handleChange = e => {
        setSearchCountry({
            ...searchCountry,
            [e.target.name] : e.target.value
        })
    }

    const [showItem2, setShowItem2] = useState(0)

    const funct = (index, indice) => {
        setShowItem(index)
    }


    const SuppliersType = [
        { type: "Trade Assurance" },
        { type: "Verified Supppiers" },
        { type: "<1h Response times" },
    ]

    const productType = [
        { type: "Ready To Ship" },
        { type: "Pald Samples" },
    ]

    const link = [
        {
            label: "Supply",
            items: [
                { label: "Supply" },
                { label: "Supply" },
                { label: "Supply" },
                { label: "Supply" },
            ]
        },
        {
            label: "Supply",
            items: [
                { label: "Supply" },
                { label: "Supply" },
                { label: "Supply" },
                { label: "Supply" },
            ]
        }, {
            label: "Supply",
            items: [
                { label: "Supply" },
                { label: "Supply" },
                { label: "Supply" },
                { label: "Supply" },
            ]
        },
        {
            label: "Supply",
            items: [
                { label: "Supply" },
                { label: "Supply" },
                { label: "Supply" },
                { label: "Supply" },
            ]
        },
        {
            label: "Supply",
            items: [
                { label: "Supply" },
                { label: "Supply" },
                { label: "Supply" },
                { label: "Supply" },
            ]
        },{}
    ]

    const openCloseSubMenu = (index) => {
        setShowItem2(index)
        let all = document.querySelectorAll(".sub-menu-lis");

        for (var i = 0; i < all.length; i++){
            all[i].classList.add("hide-sub-menu")
        }
        if (all[index].className.split(" ")[2] === "show-sub-menu") {
            all[index].classList.remove("show-sub-menu")
        } else {
            all[index].classList.add("show-sub-menu")
        }
    }

    const change = (text) => {
        const filter = country.map (item => {
            return item.name.includes(text) ? item : null 
        })

        console.log(filter.filter (item => { return item != null ?.item; }))
    }

    useEffect (() => {
    },[]);

    const element = () => {
        if (indice == 0) {
            return (
                <>
                    <h3 className={stateLast == index ? "bar" : "barb"}
                        onClick={() => action(index)} id="h">
                        {title}
                        <span> <RiArrowDownSLine /> </span>
                    </h3>
                    <div className="check_groups" >
                        <form>
                            <button> <FaSearch /> </button>
                            <input type="text" name="country1"
                            value={searchCountry.country1}
                            onChange={handleChange}
                            onKeyUp={() => change(searchCountry.country1)} />
                        </form>
                        <ul>
                        <h3> Suggestions </h3>
                            {
                                country && (
                                    country.map((list, index) => {
                                    return (
                                        <p key={index}>
                                            <input type="checkbox" name="opt1" id="opt1" />
                                            <span className={`flag-icon flag-icon-${list.code.toLowerCase()}`}></span>
                                            <label> {list.name} </label>
                                        </p>
                                    )
                                })
                                )
                            }

                            <h3> All Countries & Regions </h3>
                            {
                                countries.map((list, index) => {
                                    return (
                                        <p key={index}>
                                            <input type="checkbox" name="opt1" id="opt1" />
                                            <span className={`flag-icon flag-icon-${list.code.toLowerCase()}`}></span>
                                            <label> {list.name} </label>
                                        </p>
                                    )
                                })
                            }
                        </ul>

                        <h2> Past Export Country/Regions</h2>
                        <form>
                            <button> <FaSearch /> </button>
                            <input type="text" name="" />
                        </form>
                        <ul>
                            <h3> All Countries & Regions </h3>
                            {
                                country.map((list, index) => {
                                    return (
                                        <p key={index}>
                                            <input type="checkbox" name="opt1" id="opt1" />
                                            <span className={`flag-icon flag-icon-${list.code.toLowerCase()}`}></span>
                                            <label> {list.name} </label>
                                        </p>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </>
            )
        } else if (indice == 1) {
            return (
                <>
                    <h3 className={stateLast == index ? "bar" : "barb"}
                        onClick={() => action(index)} id="h">
                        {title}
                        <span> <RiArrowDownSLine /> </span>
                    </h3>
                    <div className="check_groups" >
                        <ul className="suppliers">
                            <div>
                                {
                                    SuppliersType.map((list, index) => {
                                        return (
                                            <p key={index}>
                                                <input type="checkbox" name="opt1" id="opt1" />
                                                <label> {list.type} </label>
                                            </p>
                                        )
                                    })
                                }
                            </div>

                            <div>
                                <h4> Product Types </h4>
                                {
                                    productType.map((list, index) => {
                                        return (
                                            <p key={index}>
                                                <input type="checkbox" name="opt1" id="opt1" />
                                                <label> {list.type} </label>
                                            </p>
                                        )
                                    })
                                }
                            </div>
                            <div>
                                <h4> Min Order </h4>
                                <p>
                                    <input type="text" name="" placeholder="Less than" />
                                    <button type="submit"> ok </button>
                                </p>
                            </div>

                            <div>
                                <h4> Price </h4>
                                <p>
                                    <input type="text" name="" placeholder="min" />
                                    <input type="text" name="" placeholder="max" />
                                    <button type="submit"> ok </button>
                                </p>
                            </div>
                        </ul>
                    </div>
                </>
            )
        } else if (indice == 2) {
            return (
                listCategorie.map(({ categorie, submenu }, index) => {
                    return (
                        <li className="category" key={index}>
                            <div className="namecat"
                                onClick={() => funct(index, 0)}>
                                <span className="arrow"> {showItem == index ? <FaChevronDown /> : <FaChevronRight />} </span>
                                <span id="nameCategory"> {categorie} </span>
                            </div>

                            <div className={`div-subcat  ${showItem == index ? "showItem" : "hideItem"}`}>
                                {
                                    submenu && (
                                        submenu.map(({ item, subItems }, index) => {
                                            return (
                                                <li className="sub" key={index}>
                                                    <div className="click-item" onClick={() => setShowSubItem(index)}>
                                                        <span className="arrow">  {showSubItem == index ? <FaChevronDown /> : <FaChevronRight />} </span>
                                                        <span> {item} </span>
                                                    </div>
                                                    <div className={`div-item ${showSubItem == index ? "showItem" : "hideItem"}`}>
                                                        {
                                                            subItems && (
                                                                subItems.map(({ item }, index) => {
                                                                    return <li key={index}> {item} </li>
                                                                })
                                                            )
                                                        }
                                                    </div>
                                                </li>
                                            )
                                        })
                                    )
                                }
                            </div>
                        </li>
                    )
                })

            )
        } else if (indice == 3) {
            return (
                <>
                    <div>
                        {
                            link.map(({ label, items }, index) => {
                                return (
                                    <ul className="ul-blocs" key={index}>
                                        <li onClick={() => openCloseSubMenu(index)} 
                                        className="li-title d-flex align-items-center justify-content-between">
                                            {label}
                                            <FaChevronDown />
                                        </li>
                                        <ul className="sub-menu-lis">
                                            {
                                                items && (
                                                    items.map(({ label }, index) => {
                                                        return (
                                                            <li key={index}> {label} </li>
                                                    )
                                                    })
                                                )
                                            }
                                        </ul>
                                    </ul>
                                )
                            })
                        }
                    </div>
                </>
            )
        }
    }
    return (
        <>
            {element()}
        </>
    )
}
export default MenuVertical