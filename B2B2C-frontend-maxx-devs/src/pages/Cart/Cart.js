import OrderSummaryPrice from "../../components/OrderSummaryPrice/OrderSummaryPrice";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import "./Cart.scss"
import CartItem from "./CartItems/CartItem";
import ProductImg4 from "../../assets/images/product/product-1.jpg";
import { useLocation } from 'react-router-dom';
import { CHECKOUT } from "../../settings/constants";
import { close_p, open_p } from "../Checkout/Checkout";
import { removeItem } from "../../store/cartStore/cartSlice";

import emptyCart from "../../assets/svg/emptyCart.svg"

const Cart = () => {
    const dispatch = useDispatch()
    const [popupRemove, isPopupRemove] = useState(false)
    const [popupIndex, setPopupIndex] = useState(0)

    const cart = useSelector((state) => state.cart.cartItem)

    const handleRemoveConfirm = () => {
        setPopupIndex(1)
        let id = sessionStorage.getItem("item_id") ? sessionStorage.getItem("item_id") : 0;
        console.log(id)
        dispatch(removeItem(id))
    }

    const closePopup = () => {
        setPopupIndex(0)
        isPopupRemove(false)
    }

    const getTotal = () => {
        let totalQty = 0,
            totalPrice = 0;

        cart.forEach(item => {
            totalQty += item.quantity
            totalPrice += parseInt(item.price) * item.quantity
        })

        return { totalQty, totalPrice }
    }

    return (
        <div className="body_home">
            <div className="popup-remove-item"
                style={popupRemove ? open_p : close_p}>
                <div style={popupIndex == 0 ? open_p : close_p}
                    className="card-msg">
                    <p>
                        Are you sure you want to remove this product
                        from your cart ?
                    </p>
                    <div>
                        <button onClick={() => isPopupRemove(false)}> Cancel </button>
                        <button onClick={handleRemoveConfirm}> Remove </button>
                    </div>
                </div>
                <div style={popupIndex == 1 ? open_p : close_p}
                    className="card-msg">
                    <p>
                        Product remove successfuly from your cart !
                    </p>
                    <div>
                        <button onClick={closePopup}> ok </button>
                    </div>
                </div>
                <div style={popupIndex == 2 ? open_p : close_p}
                    className="card-msg">
                    <p>
                        item save succerfully !!!
                    </p>
                    <div>
                        <button onClick={closePopup}> ok </button>
                    </div>
                </div>
            </div>
            <div className="block-cart d-flex justify-content-between">
                <div className="div1-cart">
                    {
                    cart.length != 0 ? (
                        <>
                            <div className="head-cart d-flex align-items-center justify-content-between mb-3">
                                <h3>
                                    <input type="checkbox" name="" id="" />
                                    Select all items {cart.length}
                                </h3>
                            </div>
                            <CartItem actionPopup={isPopupRemove} listProduct={cart} actionPopup2={setPopupIndex} />
                        </>
                    ) : (
                        <div className="empty-cart d-flex align-items-center justify-content-center">
                            <div className="msg-empty text-center">
                                <img src={emptyCart} />
                                <p className="text-center"> Cart empty </p>
                            </div>
                        </div>
                    )
                    }
                </div>
                <div className="div2-cart">
                    <h4> Order Summary </h4>
                    <div className="order_div">
                        <h3 className="d-flex align-items-center"> YOUR ORDER </h3>
                        <OrderSummaryPrice totalPrice={getTotal().totalPrice} shipping={getTotal().totalPrice} />
                        <Link to={CHECKOUT}>
                            <button> Place order (${getTotal().totalPrice})  </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart