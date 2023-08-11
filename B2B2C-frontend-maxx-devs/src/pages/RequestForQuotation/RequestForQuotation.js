import React, {useState} from "react"
import { FaPlus } from "react-icons/fa"
import { incrementDrecrementNumber } from "../../components/incrementDecrement/incrementDecrement"
import { close_p, open_p } from "../Checkout/Checkout"

import "./RequestForQuotation.scss"


const RequestForQuotation = () => {

    const [popupForm, isPopupForm] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        isPopupForm(true)
    }
    return (
        <div className="body_home request-quotation-page d-col">
            <div style={popupForm ? open_p : close_p}
                className="popup-form-addr-rq">
                <form className="form-popup-rq">
                    <h3> Unclocks Supplier Requirements 
                        <span onClick={() => isPopupForm(false)}>&times;</span> 
                    </h3>
                    <div>
                        <label> DUNS Number </label>
                        <input type="text" name="" id="" />
                        <span></span>
                    </div>
                    <div>
                        <label> Company Address </label>
                        <input type="text" name="" id="" />
                        <span></span>
                    </div>
                    <div>
                        <label> Business Email </label>
                        <input type="text" name="" id="" />
                        <span></span>
                    </div>
                    <div>
                        <label> Business Phone Number </label>
                        <input type="text" name="" id="" />
                        <span></span>
                    </div>
                    <button className="btn-submit"> Submit and Verify </button>
                </form>
            </div>
            <section className="section1-rq d-col">
                <h2> Tell Suppliers what you need </h2>
                <form className="form-rq d-col">
                    <div className="bloc-form-rq">
                        <h3> Product Information </h3>
                        <div className="form-rq-input d-col">
                            <label> Product Name </label>
                            <input type="text" name="" id="product-name" placeholder="Please enter the subject" />
                        </div>

                        <div className="form-rq-input d-col">
                            <h4> Category </h4>
                            <div>
                                <p>
                                    <label> Sourcing type </label>
                                    <select name="" id="">
                                        <option value={""}> Please select</option>
                                    </select>
                                </p>
                                <span></span>
                            </div>

                            <div>
                                <p>
                                    <label> Sourcing purpose </label>
                                    <select name="" id="">
                                        <option value={""}> Please select</option>
                                    </select>
                                </p>
                                <span></span>
                            </div>

                            <div>
                                <p>
                                    <label> Sourcing purpose </label>
                                    <button
                                        onClick={() => incrementDrecrementNumber("0", "inputs")}> - </button>
                                    <input type="text" name="" id="inputs" />
                                    <button
                                        onClick={() => incrementDrecrementNumber("1", "inputs")}> <FaPlus /> </button>
                                </p>
                                <span></span>
                            </div>
                        </div>

                        <div className="form-rq-input d-col">
                            <div>
                                <p>
                                    <label> Sourcing type </label>
                                    <select name="" id="">
                                        <option value={""}> Please select</option>
                                    </select>
                                </p>
                                <span></span>
                            </div>

                            <div>
                                <p>
                                    <label> Max budget </label>
                                    <select name="" id="">
                                        <option value={""}> Please select</option>
                                    </select>
                                    <select name="" id="">
                                        <option value={""}> Please select</option>
                                    </select>
                                </p>
                                <span></span>
                            </div>

                            <div>
                                <p>
                                    <label> Details </label>
                                    <textarea name="" id="" cols="30" rows="4">
                                    </textarea>
                                </p>
                                <span></span>
                            </div>

                            <div className="file-div-form-rq d-col">
                                <p>
                                    <label> Attachements </label>
                                    <button>
                                        <img src="/assets/svg/down.svg" alt="" />
                                        <input type="file" name="" id="" />
                                        <b> Sourcing <br /> Document</b>
                                    </button>
                                    <button>
                                        <img src="/assets/svg/plus.svg" alt="" />
                                        <input type="file" name="" id="" />
                                        <b> Upload</b>
                                    </button>
                                </p>
                                <span></span>
                                <span id="last"> Product images or files lead to more accurate quotes </span>
                            </div>
                        </div>
                    </div>

                    <div className="bloc-form-rq-center white-background">
                        <div className="d-flex align-items-center">
                            <img src="/assets/svg/plus.svg" alt="" />
                            <h3> Supplier capability requirements </h3>
                            <img src="/assets/svg/key.svg" alt="" />
                        </div>
                        <span> Get in touch with qualified, responsive, and reliable sellers. </span>
                    </div>

                    <div className="bloc-form-rq bl2">
                        <h3> Product Information </h3>
                        <div className="form-rq-input d-col">
                            <p>
                                <label> Shipping Method </label>
                                <select name="" id="">
                                    <option value={""}> Please select</option>
                                </select>
                            </p>
                            <span></span>
                        </div>

                        <div className="form-rq-input d-col">
                            <p>
                                <label> Destination </label>
                                <select name="" id="">
                                    <option value={""}> Please select</option>
                                </select>
                            </p>
                            <span></span>
                        </div>

                        <div className="form-rq-input d-col">
                            <p>
                                <label> Ship In </label>
                                <input type="text" name="" id="" />
                                <b> day(s) after supplier receives the initial payment </b>
                            </p>
                            <span></span>
                        </div>

                        <div className="form-rq-input d-col">
                            <p>
                                <label> Payment method </label>
                                <input type="text" name="" id="" />
                            </p>
                            <span></span>
                        </div>
                    </div>
                    <p id="check">
                        <input type="checkbox" name="" id="" />
                        <span> I agree to share my Business Card with quoted suppliers. </span>
                    </p>
                    <p id="check">
                        <input type="checkbox" name="" id="" />
                        <span> I have read, understood and agreed to abide by the Buying Request Posting Rules </span>
                    </p>
                    <button className="btn-submit" onClick={handleSubmit} id="btns" type="submit"> Submit </button>
                </form>
            </section>
        </div>
    )
}

export default RequestForQuotation