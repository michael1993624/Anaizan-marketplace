import React, { useState, useEffect } from "react";
import { useModal } from "react-hooks-use-modal"
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom";

import "./checkout.scss"

import { FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import CardOrder from "./CardOrder/CardOrder";
import OrderSummaryPrice from "../../components/OrderSummaryPrice/OrderSummaryPrice";

import dhlImg from "../../assets/svg/dhl.svg"
import fedImg from "../../assets/svg/fed.svg"
import VisImg from "../../assets/svg/Visa.svg"
import DisImg from "../../assets/svg/Discover.svg"
import maeImg from "../../assets/svg/maestro.svg"
import masterImg from "../../assets/svg/mastercards.svg"
import payImg from "../../assets/svg/paypal.svg"
import orderSuccess from "../../assets/svg/order-success.svg"

import ProductImg4 from "../../assets/images/product/product-1.jpg";
import { SUB_CATEGORIE_PAGE } from "../../settings/constants";

//style open and close popup 
export const open_p = {
    display: "block"
}

export const close_p = {
    display: "none"
}

const CheckoutPage = () => {
    const dispatch = useDispatch()
    const Navigate = useNavigate()
    const location = useLocation();

    const [popupAddr, isPopupAddr] = useState(false)
    const [popupSuccess, isPopupSuccess] = useState(false)
    const [formAdr, setFormAdr] = useState ({
        firstname: "",
        lastname: "",
        tel: "+220",
        adresse1: "",
        adresse2: "",
        country: "",
        province: "",
        city: "",
        zip: ""
    })

    const cart = useSelector((state) => state.cart.cartItem)

    const getTotal = () => {
        let totalPrice = 0,
            totalQty = 0;

        cart.forEach ((item) => {
            totalQty += item.quantity
            totalPrice += item.quantity * item.price
        })

        return {totalPrice, totalQty}
    }

    const handleChange = e => {
        setFormAdr({
            ...formAdr,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmitAddr = e => {
        e.preventDefault();
    }

    const handleCancel = e => {
        e.preventDefault()
        isPopupAddr(false)
    }

    const handleSubmitPay = e => {
        e.preventDefault()
        isPopupSuccess(true)
    }

    return (
        <div className="body_home checkout-page">
            <div className="popup-success-order"
                style={popupSuccess ? open_p : close_p}>
                <div className="msg d-col align-items-center justify-content-center">
                    <img src={orderSuccess} alt="" />
                    <h2> Thanks for Your Order </h2>
                    <p>
                        You have successfuly placed the orders. You will receive an order confirmation
                        e-mail with details of your order and a link to track its progress.
                    </p>
                    <button onClick={() => Navigate(SUB_CATEGORIE_PAGE)}> Continue Shopping </button>
                </div>
            </div>
            <div className="popup-checkout"
                style={popupAddr ? open_p : close_p}>
                <form className="form-address">
                    <h3 className="d-flex align-items-center justify-content-between">
                        Edit Address
                        <span onClick={() => isPopupAddr(false)}>&times;</span>
                    </h3>
                    <div className="div-form-address">
                        <div className="inputs">
                            <label> FirstName </label>
                            <input type="text" name="firstname" 
                            placeholder="Firstname..."
                            value={formAdr.firstname}
                            onChange={handleChange} />
                            <span></span>
                        </div>
                        <div className="inputs">
                            <label> LastName </label>
                            <input type="text" 
                            name="lastname"
                            placeholder="lastname"
                            value={formAdr.lastname}
                            onChange={handleChange} />
                            <span></span>
                        </div>
                    </div>
                    <div className="div-form-address">
                        <div className="inputs">
                            <label> Phone Number </label>
                            <input type="tel" 
                            name="tel" 
                            placeholder="Enter your phone number"
                            value={formAdr.tel}
                            onChange={handleChange} />
                            <span></span>
                        </div>
                    </div>
                    <div className="div-form-address">
                        <div className="inputs">
                            <label> Address Line1 </label>
                            <textarea name="adresse1" id="ad1"
                            placeholder="Address line1" 
                            cols="30" rows="2"
                            value={formAdr.adresse1}
                            onChange={handleChange}></textarea>
                            <span></span>
                        </div>
                        <div className="inputs">
                            <label> Address Line2 </label>
                            <textarea name="adresse2" id="ad2" 
                            cols="30" rows="2"
                            placeholder="Adresse line2"
                            value={formAdr.adresse2}
                            onChange={handleChange}></textarea>
                            <span></span>
                        </div>
                    </div>
                    <div className="div-form-address">
                        <div className="inputs">
                            <label> Country/Region </label>
                            <select name="country" 
                            id="country"
                            value={formAdr.country}
                            onChange={handleChange}>
                                <option disabled> Please Select </option>
                            </select>
                            <span></span>
                        </div>
                        <div className="inputs">
                            <label> State/Province </label>
                            <select name="province" id="province"
                            value={formAdr.province}
                            onChange={handleChange}>
                                <option disabled> Please Select </option>
                            </select>
                            <span></span>
                        </div>
                    </div>
                    <div className="div-form-address">
                        <div className="inputs">
                            <label> City </label>
                            <input type="text" name="city" 
                            placeholder="Enter a City"
                            value={formAdr.city}
                            onChange={handleChange} />
                            <span></span>
                        </div>
                        <div className="inputs">
                            <label> Zip code </label>
                            <input type="text" name="zip" 
                            placeholder="Enter a Zip/Postal code"
                            value={formAdr.zip}
                            onChange={handleChange} />
                            <span></span>
                        </div>
                    </div>

                    <div className="btns">
                        <button onClick={handleSubmitAddr}> Submit </button>
                        <button onClick={handleCancel}> Cancel </button>
                    </div>
                </form>
            </div>
            <div className="block-checkout-content">
                <div className="split-div">
                    <div className="div1-checkout">
                        <h2> Checkout </h2>
                        <div className="add-details-block">
                            <div className="heads-section d-flex align-items-center justify-content-between">
                                <h5>
                                    <FaCheckCircle />
                                    1.&nbsp;ADDRESS&nbsp;DETAILS
                                </h5>
                                <button> CHANGE </button>
                            </div>
                            <div className="addBtn d-flex align-items-center justify-content-center">
                                <button onClick={() => isPopupAddr(true)} className="d-flex align-items-center">
                                    <FaPlusCircle />
                                    Add Address
                                </button>
                            </div>
                        </div>
                        <div className="shipping">
                            <div className="heads-section d-flex align-items-center justify-content-between">
                                <h5>
                                    <FaCheckCircle />
                                    2. SHIPPING METHOD
                                </h5>
                            </div>
                            <div className="mode-paie">
                                <input type="radio" name="md" id="" />
                                <div>
                                    <h4> Express  <img src={dhlImg} alt="" /></h4>
                                    <p> Delivered between <b>5</b> to <b>7</b> days after order for <b>$10</b> </p>
                                </div>
                            </div>
                            <div className="mode-paie">
                                <input type="radio" name="md" id="" />
                                <div>
                                    <h4> Express  <img src={fedImg} alt="" /></h4>
                                    <p> Delivered between <b>5</b> to <b>7</b> days after order for <b>$10</b> </p>
                                </div>
                            </div>
                        </div>
                        <div className="method-paie">
                            <div className="heads-section d-flex align-items-center justify-content-between">
                                <h5>
                                    <FaCheckCircle />
                                    PAYMENT METHOD
                                </h5>
                            </div>
                            <div className="mode1">
                                <div className="mode-pay d-flex align-items-center">
                                    <div className="d-flex align-items-center">
                                        <input type="radio" name="card" id="card" />
                                        <span> Pay with Credit Card  </span>
                                    </div>
                                    <div className="d-flex">
                                        <img src={VisImg} alt="" />
                                        <img src={DisImg} alt="" />
                                        <img src={maeImg} alt="" />
                                        <img src={masterImg} alt="" />
                                    </div>
                                </div>
                                <form className="form-card-id">
                                    <div className="div-input-card">
                                        <div className="inputs">
                                            <label> Card Number </label>
                                            <input type="text" name="nb" id="" placeholder="XXXX XXXX XXXX XXXX" />
                                            <span></span>
                                        </div>
                                        <div className="inputs">
                                            <label> Card Name </label>
                                            <input type="text" name="nb" id="" placeholder="XXXX XXXX XXXX XXXX" />
                                            <span></span>
                                        </div>
                                    </div>
                                    <div className="div-input-card">
                                        <div>
                                            <label> Expiry Date </label>
                                            <input type="date" name="date" id="date" />
                                            <span></span>
                                        </div>
                                        <div>
                                            <label> CVC </label>
                                            <input type="text" name="data" id="data" placeholder="XXX" />
                                            <span></span>
                                        </div>
                                    </div>
                                    <p className="checkbox d-flex align-items-center">
                                        <input type="checkbox" name="check" id="check" />
                                        <span> Save credit card information for the next time. </span>
                                    </p>
                                    <p className="checkbox" >
                                        <b> Note: </b>
                                        <span>
                                            Your card is secure with us, we promise to never
                                            share this information to any third parties.
                                        </span>
                                    </p>
                                </form>
                            </div>
                            <div className="mode1">
                                <div className="mode-pay d-flex align-items-center">
                                    <input type="radio" name="card" id="" />
                                    <span> Paypal </span>
                                    <img src={payImg} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="opt">
                            <div className="heads-section d-flex align-items-center justify-content-between">
                                <h5> ADDITIONAL NOTES (OPTIONAL) </h5>
                            </div>
                            <form>
                                <label> Order note </label>
                                <textarea name="msg" id="msg" cols="30" rows="6">
                                </textarea>
                                <span></span>
                                <button onClick={handleSubmitPay}> Submit </button>
                            </form>
                        </div>
                    </div>
                    <div className="div2-checkout">
                        <h2> Order Summary </h2>
                        <div className="order_div">
                            <h5 className="d-flex align-items-center"> YOUR ORDER </h5>
                            <CardOrder listProduct={cart} />
                            <OrderSummaryPrice 
                                totalPrice={getTotal().totalPrice} 
                                shipping={getTotal().totalPrice}  />
                            {/*  <button className="btn-check"> Place order (0)  </button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckoutPage