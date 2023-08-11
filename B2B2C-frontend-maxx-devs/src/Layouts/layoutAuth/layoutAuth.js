import React from "react"
import {
    FaFacebookSquare,
    FaInstagramSquare,
    FaLinkedin,
    FaTwitterSquare
} from "react-icons/fa"

import  "./layoutAuth.scss"
import logo from "../../assets/svg/logoAnaizan.svg"
import appStore from "../../assets/images/App.png"
import gplay from "../../assets/images/gPlay.png"

const LayoutAuth = ({ children }) => {

    return (
        <div className="layouth-auth-container">
            <header className="header-auth">
                <a href="/">
                    <img src={logo} alt="" />
                </a>
                <select name="" id="">
                    <option selected disabled> Select </option>
                    <option value="English"> English </option>
                </select>
            </header>

            <div className= "content_page">
                {children}
            </div>

            <footer className= "footer-auth">
                <div className= "div1-footer-auth">
                    <div className= "div1-child-auth">
                        <h3> Télecharger </h3>
                        <li>
                            <a href=""> <img src={gplay} /> </a>
                            <a href=""> <img src={appStore} /> </a>
                        </li>
                    </div>
                    <div className= "div2-child-auth">
                        <p>
                            Anaïzan.com Español - Português - Deutsch - Français -
                            Italiano -  Nederlands -
                            tiếng Việt - Indonesian
                        </p>
                        <p>
                            Anaizan Group | Anaizan Marketplace | Anaizancoud.com |
                            Anaizan Telecom | Anagopay | Lazada | Anaizan Security
                        </p>
                    </div>
                    <div className= "div3-child-auth">
                        <h3> Suivez-nous </h3>
                        <li>
                            <a href=""> <FaFacebookSquare /> </a>
                            <a href=""> <FaInstagramSquare /> </a>
                            <a href=""> <FaLinkedin /> </a>
                            <a href=""> <FaTwitterSquare /> </a>
                        </li>
                    </div>
                </div>
                <div className= "div2-footer-auth">
                    <p>
                        Copyright © 2021 Anaïzan. All rights reserved.
                    </p>
                    <p>
                        Privacy / Terms of use / Cookie preferences / Protect my personal data / AdChoices
                    </p>
                </div>
            </footer>
        </div>
    )
}
export default LayoutAuth