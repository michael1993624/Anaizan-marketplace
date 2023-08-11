import React from "react"
import { FaChevronDown, FaPhoneAlt, FaUserCircle } from "react-icons/fa"


export const HeadCartBar = () => {
    return (
        <div className="header-cart d-flex align-items-center justify-content-between">
            <h2> Shopping Cart </h2>
            <div className="d-flex align-items-center">
                <button>
                    <FaPhoneAlt />
                    Need help ?, Contact Us
                </button>
                <p>
                    <FaUserCircle />
                    Hi Marx
                    <button>
                        <FaChevronDown />
                    </button>
                </p>
            </div>
        </div>
    )
}