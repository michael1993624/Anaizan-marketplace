import React from "react"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "flag-icon-css/css/flag-icons.min.css"

import { FaChevronDown, FaFacebookF, FaFacebookSquare, FaGoogle, FaInstagramSquare, FaLinkedin, FaLinkedinIn, FaTwitterSquare } from "react-icons/fa";
import imgSlide from "../../../assets/images/Imgss.png"
import imgSlide2 from "../../../assets/images/loginImg.png"

import "./Auth.scss"
import { close_p, open_p } from "../../Checkout/Checkout";
import { errors, validInput } from "../../../components/validInput/ValidInput";
import { LOGIN } from "../../../settings/constants";
import { countries } from "../../../components/listCountry/ListCountry"

export const socialAuth = () => {
    return (
        <div className="last_div">
            <div className="bar">
                <div></div>
                <h3> OR CONNECT WITH </h3>
                <div></div>
            </div>
            <div className="reseaux">
                <button>
                    <FaFacebookF />
                    acebook
                </button>
                <button>
                    <FaLinkedin />
                    LinkedIn
                </button>
                <button>
                    <FaGoogle />
                    oogle
                </button>
            </div>
        </div>
    )
}


const Registration = () => {
    const dispatch = useDispatch()
    const Navigate = useNavigate()

    const [popup, isPopup] = useState(false)
    const [roll, setRoll] = useState("")
    const [remenber, isRemenber] = useState(false)
    const [agree, isAgree] = useState(false)
    const [country, setCountry] = useState("")
    const [value, setValue] = useState({
        fullname: "",
        country: "",
        tel: "",
        company: "",
        email: "",
        password: "",
        passwordC: ""
    })

    const handleChange = e => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    }

    const { loading, userInfo, error, succes } = useSelector(
        (state) => state.user
    )

    const handleSubmit = e => {
        e.preventDefault()
        isPopup(true)

        let pwdc = document.getElementById("pwdC-error")

        if (validInput(value.fullname, "fullname")
            && validInput(value.tel, "tel")
            && validInput(value.company, "company")
            && validInput(value.email, "email")
            && validInput(value.password, "password")
            && roll) {
            if (country == "") {
                if (value.password == value.passwordC) {

                } else {
                    pwdc.innerText = "Les mots de passe doivent identique"
                }
            } else {

            }
        }
    }

    const selectedCountry = (id) => {
        var allOpt = document.querySelectorAll(".option"),
            options = document.querySelector(".selected-item");
        alert (id)
        options.innerHtml = allOpt[id].innerHTML
    }


    return (
        <div className="register-login-page">
            <div className="popup-msg"
                style={popup ? open_p : close_p}>
                <div className="block-msg">
                    <h3>
                        Vérifications
                        <span onClick={() => isPopup(false)}>&times;</span>
                    </h3>
                    <div className="div_center">
                        <h4> Entré le code que nous vous avons envoyé par mail </h4>
                        <div>
                            <input type="text" name="" id=""
                                placeholder="Entrée le code " />
                            <button> Confirmer </button>
                        </div>
                        <button className="btn"> J'ai pas reçu le code </button>
                    </div>
                </div>
            </div>
            <div className="containers">
                <div className="block-content">
                    <div className="p2">
                        <div className="div_slide">
                            <h1> Welcome To <b> Anaizan </b> </h1>
                            <p>
                                If you have an account already available,
                            </p>
                            <div className="slider-auth">
                                <div id="circle"></div>
                                <Carousel className="engine" autoPlay={true} dynamicHeight={false}
                                    showThumbs={false} showIndicators={true} showStatus={false}
                                    interval={5000} showArrows={false} infiniteLoop={true}>
                                    <div>
                                        <img src={imgSlide} alt="" />
                                    </div>
                                    <div>
                                        <img src={imgSlide} alt="" />
                                    </div>
                                    <div>
                                        <img src={imgSlide} alt="" />
                                    </div>
                                </Carousel>
                            </div>
                        </div>
                    </div>
                    <div className="div-forms">
                        <form className="form1">
                            <h2> Create account </h2>
                            <p> Create your account </p>
                            <div className="d_form">
                                <label> I am a</label>
                                <div className="choice_box">
                                    <div id="rol"
                                        onClick={() => setRoll("buyer")}>
                                        Buyer
                                    </div>
                                    <div id="rol"
                                        onClick={() => setRoll("seller")}>
                                        Seller
                                    </div>
                                    <div id="rol"
                                        onClick={() => setRoll("both")}>
                                        Both
                                    </div>
                                </div>
                            </div>
                            <div className="d_form">
                                <label> Your Name </label>
                                <input type="text" name="fullname"
                                    id="fullname"
                                    placeholder="Full Name"
                                    value={value.fullname}
                                    onChange={handleChange}
                                    onKeyUp={() => validInput(value.fullname, "fullname")} />
                                <span id="fullname-error"> {errors && (errors.fullname)} </span>
                            </div>
                            <div className="d_form" id="d_form">
                                <div>
                                    <label> Country</label>
                                    <ul className="select-country">
                                        <li className="selected">
                                            <div className="selected-item">
                                                <span className="flag-icon flag-icon-us">
                                                </span>
                                                <span> USA</span>
                                            </div>
                                            <FaChevronDown className="arrow" />
                                        </li>
                                        <ul className="options-ul">
                                            {countries.map((list, index) => {
                                                return <span className="option"
                                                    onClick={() => selectedCountry(index)}
                                                    key={index}>
                                                    <span className={`flag-icon flag-icon-${list.code.toLowerCase()}`}></span>
                                                   <span>  {list.name} </span>
                                                </span>
                                            })}
                                        </ul>
                                    </ul>
                                    <span id="country-error"> </span>
                                </div>

                                <div>
                                    <label> Téléphone </label>
                                    <input type="text" name="tel"
                                        placeholder="Téléphone"
                                        value={value.tel}
                                        onChange={handleChange}
                                        onKeyUp={() => validInput(value.tel, "tel")} />
                                    <span id="tel-error"> {errors && (errors.tel)} </span>
                                </div>
                            </div>
                            <div className="d_form">
                                <label> Company Name </label>
                                <input type="text" name="company"
                                    placeholder="Your company"
                                    value={value.company}
                                    onChange={handleChange}
                                    onKeyUp={() => validInput(value.company, "company")} />
                                <span id="company-error"> {errors && (errors.company)} </span>
                            </div>
                            <div className="d_form">
                                <label> Address email </label>
                                <input type="email" name="email"
                                    placeholder="Your Address email"
                                    value={value.email}
                                    onChange={handleChange}
                                    onKeyUp={() => validInput(value.email, "email")} />
                                <span id="email-error"> {errors && (errors.email)} </span>
                            </div>
                            <div className="d_form" id="d_form">
                                <div>
                                    <label> Password </label>
                                    <input type="password" name="password"
                                        placeholder="Your password"
                                        value={value.password}
                                        onChange={handleChange}
                                        onKeyUp={() => validInput(value.password, "password")} />
                                    <span id="pwd-error"> {errors && (errors.password)} </span>
                                </div>
                                <div >
                                    <label> Confirm Password </label>
                                    <input type="password" name="passwordC"
                                        placeholder="Confirm your password"
                                        value={value.passwordC}
                                        onChange={handleChange} />
                                    <span id="pwdC-error"></span>
                                </div>
                            </div>
                            <p className="ps">
                                <input type="checkbox" name="remember" id="" />
                                <b> I remenber me
                                </b>
                            </p>
                            <p className="ps">
                                <input type="checkbox" name="agree" id="" />
                                <b>
                                    I have read and agree to the <a href="">Terms</a> and
                                    <a href=""> Conditions</a>
                                </b>
                            </p>
                            <div className="div-btn">
                                <button
                                    onClick={handleSubmit}
                                    className="join_btn"> Join Free
                                </button>
                            </div>
                            <div className="div_log">
                                <p> Don't have a account ? <a href={LOGIN}> Log in </a></p>
                            </div>
                            {socialAuth()}
                        </form>
                    </div>
                </div>
            </div >
        </div>
    )
}
export default Registration