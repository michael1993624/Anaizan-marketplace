import React from "react";
import "./HomeCategories.scss";
import { RiArrowRightSLine } from "react-icons/ri"
import { FaChevronRight } from "react-icons/fa";
import {
    Machinery1,categorie, consumer
} from "../../settings/SubMenuLink";
import { s_link } from "../boxSubMenu/boxSubMenu";
import logoCat from "../../assets/images/png8.png"
import DropDownMenu from "../DropDownMenu/DropDownMenu";

const HomeCategories = () => {

    return (
        <>
            <div className="card-categorie border-radius-6">
                <h2> MY MARKETS </h2>
                <ul className="ul">
                    {
                        consumer.map(({ categorie, logo, subMenu }, index) => {
                             return (
                                <li key={index}>
                                    <img src={logo} />
                                    <span>
                                        <a href="/categories"> {categorie} </a>
                                        <RiArrowRightSLine />
                                    </span>
                                    <ul className="uls" id="uls">
                                        {subMenu &&
                                            (
                                                subMenu.map(({ title, items }, index2) => {
                                                    return (
                                                        <div key={index2}>
                                                            <h3> {title} </h3>
                                                            {
                                                                items &&
                                                                (
                                                                    items.map(({ path, label }, index3) => {
                                                                        return (
                                                                            <li key={index3}>
                                                                                <a href={path}> {label} </a>
                                                                            </li>
                                                                        )
                                                                    })
                                                                )
                                                            }
                                                        </div>
                                                    )
                                                })
                                            )
                                        }
                                    </ul>
                                </li>
                            )
                        })
                    }
                    <li className="categorie">
                        <img src={logoCat} />
                        <span>
                            <a href="/categories"> All Categories </a>
                            <RiArrowRightSLine />
                        </span>
                        <DropDownMenu />
                    </li>
                </ul>
            </div>
        </>
    )
}

export default HomeCategories