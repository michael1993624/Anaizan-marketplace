import React from "react"
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa"
import { TiSocialYoutubeCircular } from "react-icons/ti"

export const FirstBar = () => {
    return (
        <>
            <div className="blue-top-bar">
                <div className="top-left-description">
                    <span className="font-weight-bold"> BIENVENUE SUR VOTRE PLATEFORME DE COMMERCE EN LIGNE </span>

                </div>
                <div className="top-right-menu">
                    <a href=""> <FaInstagram /> </a>
                    <a href=""> <TiSocialYoutubeCircular /> </a>
                    <a href=""> <FaFacebook /> </a>
                    <a href=""> <FaLinkedinIn /> </a>
                </div>
            </div>
        </>
    )
}
