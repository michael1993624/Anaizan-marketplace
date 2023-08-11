import React from "react";
import { Link } from "react-router-dom";
import { FirstBar } from "./FirstBar";
import "./Header.scss";

import "../../global/global.scss";
import { FaList } from "react-icons/fa";

export const HeaderContent = ({ fragement1, fragement2, fragement3, fragement4 }) => {
    return (
        <>
            <FirstBar />
            <div className="two-bar">
                <div className="d-flex bar-section align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                    <FaList className="menu-icon-drop" />
                    <Link to="/" >
                        <div className="logo-section">
                            <img src="/assets/svg/logoAnaizan.svg" />
                        </div>
                    </Link>
                    </div>
                    {fragement1}
                    {fragement2}
                    {fragement4}
                </div>
            </div>
            <div id="nav-back">
                {fragement3}
            </div>
        </>
    )
}