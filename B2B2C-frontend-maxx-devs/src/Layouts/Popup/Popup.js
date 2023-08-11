import React from "react"
import { FaChevronDown } from "react-icons/fa"
import { AiOutlineUser } from "react-icons/ai"
import { MdOutlineFavoriteBorder } from "react-icons/md"

import "./Popup.scss"
import "flag-icon-css/css/flag-icons.min.css"

import { countries } from "../../components/listCountry/ListCountry"
import { REGISTER, 
    LOGIN,
    FAVOURITE_PRODUCT_PAGE } from "../../settings/constants"

import emptycart from "../../assets/svg/emptyCart.svg"
import emptyMsg from "../../assets/svg/emptyMsg.svg"


/* popup sign in */
export const PopupAccount = () => {
    return (
        <ul className="popup_account">
            <li>
                <AiOutlineUser />
                <a id="a" href=""> My&nbsp;account</a>
            </li>
            <li>

                <img src="/assets/svg/order.svg" />
                <a id="a" href=""> Orders</a>
            </li>
            <li>
                <MdOutlineFavoriteBorder />
                <a id="a" href={FAVOURITE_PRODUCT_PAGE}> Favourites</a>
            </li>
            <button> <a id="btn_a" href={REGISTER}>  Sign up </a> </button>
            <button> <a id="btn_a" href={LOGIN}> Login </a> </button>
        </ul>
    )
}

/* popup message */
export const PopupMessage = () => {
    return (
        <div className="popup_msg">
            <div>
                <img id="img" src={emptyMsg} alt="" />
                <h3> No Messages </h3>
                <p> Please Login to view your messages </p>
            </div>
            <button> login </button>
        </div>
    )
}

/* popup cart */

export const PopupCart = ({ cartItem }) => {
    return (
        <div className="popup_cart">
            {
                cartItem.length === 0 ? (
                    <div className="empty_cart">
                        <img id="img" src={emptyMsg} alt="" />
                        <h3> Cart is empty </h3>
                        <p> Looks like you have no items in
                            your shopping cart. </p>
                    </div>
                ) : (

                    <div className="d-flex" id="cart">
                        <h2> Your Cart </h2>
                        {cartItem.map(({ author, title, image, color, size, price }, index) => {
                            return (
                                <div className="item-div"  key={index}>
                                    <h4> {author} </h4>
                                    <div id="cart_prod">
                                        <div id="prod">
                                            <img src={image} alt="" />
                                        </div>
                                        <div id="infos">
                                            <h3>
                                                {title}
                                            </h3>
                                            <p> Color: &nbsp;
                                                <select>
                                                    {color && (
                                                        color.map((color, index) => {
                                                            return <option value={color} key={index}>
                                                                {color}
                                                            </option>
                                                        })
                                                    )
                                                    }
                                                </select>
                                            </p>
                                            <p> Size: &nbsp;
                                                <select>
                                                    {size && (
                                                        size.map((size, index) => {
                                                            return <option value={size} key={index}>
                                                                {size}
                                                            </option>
                                                        })
                                                    )
                                                    }
                                                </select>
                                            </p>
                                            <h5> ${price} </h5>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                        }
                    </div>

                )
            }
        </div>
    )
}

/* popup Shipping */
export const PopupShip = () => {
    return (
        <div className="popup_Ship" id="ship1">
            <div className="ship-box">
                <label> Set your shipping location </label>
                <p>
                    Choose your country/region and we’ll
                    show items that will ship to you.
                </p>
                <li className="lis d-flex align-items-center justify-content-center">
                    <a href=""> Sign in to see your address </a>
                </li>
                <div className="bars d-flex align-items-center justify-content-between">
                    <div></div>
                    OR
                    <div></div>
                </div>
                <ul className="ship-ul d-flex align-items-center">
                    <li className="flag-country d-flex align-items-center">
                        <span className="flag-icon flag-icon-us"></span>
                        <span> ENG </span>
                    </li>
                    <FaChevronDown className="chevron" />
                    <ul>
                        {countries.map((list, index) => {
                            return (
                                <li className="item d-flex align-items-center" onClick={() => changeShip(index)} key={index}>
                                    <span className={`flag-icon flag-icon-${list.code.toLowerCase()}`}></span>
                                    <span> {list.name} </span>
                                </li>
                            )
                        })}
                    </ul>
                </ul>
                <input type="text" name=""
                    id="" placeholder="Enter city or Zip" />
                <button> Save </button>
            </div>
        </div>
    )
}

const changeShip = (id) => {
    sessionStorage.setItem("id_flag", id)

    var allLi = document.querySelectorAll(".item"),
        li = document.querySelector(".flag-country");
    li.innerHTML = allLi[id].innerHTML
}

const saveShip = (id) => {
    sessionStorage.setItem("id_flag", id)
    //alert (li.children.item(1))
}

const saveLanguage = (id) => {
    sessionStorage.setItem("id_lang", id)
}

/* popup language */
export const PopupLanguage = () => {
    return (
        <div className="popup_Ship" id="form2">
            <form>
                <label> Change Language </label>
                <select name="" id="" className="select">
                    {countries.map ((list, index) => {
                        return <option value={list.name} key={index}> {list.name} </option>
                    })}
                </select>
                <label> Change Currency </label>
                <select name="" id="" className="select">
                    <option disabled> Select </option>
                </select>
                <button> Save </button>
            </form>
        </div>
    )
}

