import { useState, useEffect } from "react"
import CartIcon from "../../assets/svg/carts.svg";
import MsgIcon from "../../assets/svg/message.svg";
import OrderIcon from "../../assets/svg/orders.svg";
import UserIcon from "../../assets/svg/User.svg";
import { Link } from "react-router-dom";
import { PopupAccount, PopupCart, PopupMessage } from "../Popup/Popup";
import { useSelector } from "react-redux"
import { LOGIN } from "../../settings/constants";

export const RightTopBar = () => {

  /* cart item */
  const cart = useSelector ((state) => state.cart.cartItem)
  

  return (
    <div className="menu-button-list hide2">
      <div className="text-center div">
        <Link to={LOGIN}>
          <img src={UserIcon} alt="user icon" />
          <p className="m-0"> Sign&nbsp;In</p>
        </Link>
        <div className="popup">
          <PopupAccount />
        </div>
      </div>

      <div className="text-center div " id="msg-hide">
        <img src={MsgIcon} alt="message icon" />
        <p className="m-0">Message</p>
        <div className="popup">
          <PopupMessage />
        </div>
      </div>
      <div className="text-center div order-hide" id="order-hide">
        <img src={OrderIcon} alt="order icon" />
        <p className="m-0">Orders</p>
      </div>
      <div className="text-center div">
        <Link to="/shopping/cart">
          <img src={CartIcon} alt="cart icon" />
          <p className="m-0">Cart</p>
          <div className="counter d-flex align-items-center justify-content-center">
            <span> {cart.length} </span>
          </div>
        </Link>
        <div className="popup">
          <PopupCart cartItem={cart} />
        </div>
      </div>
    </div>
  )
}