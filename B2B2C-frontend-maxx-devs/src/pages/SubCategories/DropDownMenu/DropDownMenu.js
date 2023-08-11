import { useState } from "react"
import { FaChevronDown, FaChevronRight } from "react-icons/fa"
import { RiArrowRightSLine } from "react-icons/ri"

import "./DropDownMenu.scss"

export const DropDownMenu = ({ title, listCategorie }) => {

    const [showItem, setShowItem] = useState()
    const [showSubItem, setShowSubItem] = useState()

    const funct = (index, indice) => {
        setShowItem(index)
    }
    
    return (
        <div className="drop-block">
            <h3>
                {title}
                <span> <RiArrowRightSLine /> </span>
            </h3>
            {
                listCategorie.map(({ categorie, submenu }, index) => {
                    return (
                        <ul className="category" key={index}>
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
                                                <ul className="sub" key={index}>
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
                                                </ul>
                                            )
                                        })
                                    )
                                }
                            </div>
                        </ul>
                    )
                })
            }
        </div>
    )
}