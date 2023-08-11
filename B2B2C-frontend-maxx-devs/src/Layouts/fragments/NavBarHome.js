import {useEffect} from "react"
import { FaChevronDown } from "react-icons/fa"
import DropDownMenu from "../../components/DropDownMenu/DropDownMenu";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { PopupLanguage, PopupShip } from "../Popup/Popup";
import { menuHome } from "../../settings/SubMenuLink";
import { countries } from "../../components/listCountry/ListCountry"

export const NavBarHome = () => {

    let id_flag = 0
    useEffect (() => {
        id_flag = sessionStorage.getItem("id_flag") ? sessionStorage.getItem("id_flag") : 0
    },[id_flag])

    return (
        <div className="menu-list hide2 d-flex align-items-center justify-content-between">
            <span id="close-x"> &times; </span>
            <div className="d-flex nav" >
                <div className="d-flex first align-items-center cate-dropdown-menu">
                    <a href="#" className="m-2 ">
                        <AiOutlineUnorderedList />
                        Categories
                    </a>
                    <DropDownMenu />
                </div>
                {
                    menuHome.map(({ label, path, items }, index) => {
                        return (
                            <li className="link d-flex align-items-center"  key={index}>
                                <a className="d-flex align-items-center" href={path}> {label} </a>
                                {items.length != 0 ? <FaChevronDown /> : ""}
                                {items.length != 0 ?
                                    items && (
                                        <ul>
                                            {
                                                items.map(({ path, label }, index2) => {
                                                    return <li className="d-flex align-items-center" key={index2}>
                                                        <a href={path}> {label} </a>
                                                    </li>
                                                })
                                            }
                                        </ul>
                                    ) : ""
                                }
                            </li>
                        )
                    })
                }
            </div>
            <div className="right">
                <div className="d-flex align-items-center" id="div">
                    <span> Language: </span>
                    <span> </span>
                    <span> <FaChevronDown /> </span>
                    <PopupLanguage />
                </div>

                <div className="d-flex align-items-center" id="div">
                    <span>Ship&nbsp;to:</span> 
                    <span id="imgSelect">
                        <span className={`flag-icon flag-icon-${countries[id_flag].code.toLowerCase()}`}></span>
                    </span>
                    <span> <FaChevronDown /> </span>
                    <PopupShip />
                </div>
            </div>

        </div>
    )
}
