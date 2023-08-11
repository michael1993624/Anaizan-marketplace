import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import "../Register/Auth.scss"
import { socialAuth } from "../Register/Register";
import imgSlide from "../../../assets/images/Imgss.png"
import imgSlide2 from "../../../assets/images/loginImg.png"
import { REGISTER } from "../../../settings/constants";
import { errors, validInput } from "../../../components/validInput/ValidInput";


const Login = () => {
    const dispatch = useDispatch()
    const Navigate = useNavigate()

    const { loading, userInfo, error } = useSelector(
        (state) => state.user
    )

    const [value, setValue] = useState({
        email: "",
        password: ""
    })

    const handleChange = e => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (validInput(value.email, "email")
            && validInput(value.password, "password")) {
              alert ("traitement succerfully")
        }
    }

    return (
        <div className="register-login-page">
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
                                        <img src={imgSlide2} alt="" />
                                    </div>
                                    <div>
                                        <img src={imgSlide2} alt="" />
                                    </div>
                                    <div>
                                        <img src={imgSlide2} alt="" />
                                    </div>
                                </Carousel>
                            </div>
                        </div>
                    </div>
                    <div className="div-forms">
                        <form className="form1">
                            <h2> Sign in</h2>
                            <p> For business, band or celebrity. </p>
                            <div className="d_form">
                                <label> Address email ou Number phone </label>
                                <input type="email"
                                    name="email"
                                    placeholder="Your Address email"
                                    value={value.email}
                                    onChange={handleChange} 
                                    onKeyUp={() => validInput(value.email, "email")}/>
                                <span id="email-error"> {errors && (errors.email)} </span>
                            </div>
                            <div className="d_form">
                                <label> Password </label>
                                <input type="password"
                                    name="password"
                                    placeholder="Your password"
                                    value={value.password}
                                    onChange={handleChange}
                                    onKeyUp={() => validInput(value.password, "password")} />
                                <span id="password-error"> {errors && (errors.password)} </span>
                            </div>
                            <p className="ps">
                                <input type="checkbox" name="" id="" />
                                <b> Remenber me </b>
                                <li> <a href=""> Fogot password ?</a> </li>
                            </p>
                            <div className="div-btn">
                                <button onClick={handleSubmit}
                                    className="join_btn"> Join 
                                </button>
                            </div>
                            <div className="div_log">
                                <p> New to Anaizan ? <a href={REGISTER}> Join free </a></p>
                            </div>
                            {socialAuth()}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login