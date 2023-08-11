import React from "react";
import { AiOutlineMenu, AiOutlineDown, AiFillLock } from "react-icons/ai";
import { GoGlobe } from "react-icons/go"
import { 
  ADVERTISSEMENT_PRODUCT_PAGE,
  B2B_ECOMMERCE_PAGE,
  FULFILLEMENT_PAGE,
  ONLINE_STORE_PAGE, 
  PlATEFORM_PAGE, 
  PRICING_PAGE, 
  SELL_WORD_WIDE_PAGE, 
  SUCCESS_STORY_PAGE, 
  WHOLESALE_PAGE, 
  WHY_ANAIZAN_PAGE } from "../../../../../settings/constants";
import logo from "../../assets/img/logoAnaizan.png"

import HeaderStyle from "./Header.module.css"
import "../../assets/styles/globals.css"

const Header = () => {

  const Platform = [
    { path: WHY_ANAIZAN_PAGE, label: "Why anaizan" },
    { path: PlATEFORM_PAGE, label: "How To Sell" },
    { path: ONLINE_STORE_PAGE, label: "Build Online Store" },
  ]

  const Solutions = [
    { path: B2B_ECOMMERCE_PAGE, label: "B2B e-commerce" },
    { path: WHOLESALE_PAGE, label: "Wholesale e-commerce" },
    { path: SELL_WORD_WIDE_PAGE, label: "International Trade" },
    { path: ADVERTISSEMENT_PRODUCT_PAGE, label: "Advertise Your Product" },
    { path: FULFILLEMENT_PAGE, label: "Fulfillment By Anaizan" },
  ]

  const showMenu = (action) => {
    let menu = document.getElementById("mobile");

    if (action == "open") {
      menu.classList.add(HeaderStyle.show)
    } else {
      menu.classList.remove(HeaderStyle.show)
    }
  }
  return (
    <>
      <div className={HeaderStyle.firstNav}>
        <div className={HeaderStyle.colored}>
          <p>
            Start an e-commerce business in 2020
            <span>8 steps to get started</span>
          </p>
        </div>
        <div className={HeaderStyle.plain}>
          <div>
            <GoGlobe />
            <p>English</p>
          </div>
          <div>
            <AiFillLock />
            <p>Login</p>
          </div>
        </div>
      </div>
      <div className={HeaderStyle.second_nav}>
        <div className={HeaderStyle.mobile_style}>
          <AiOutlineMenu onClick={() => showMenu("open")} />
        </div>

        <a className={HeaderStyle.logo} href="/" > <img src={logo} /> </a>
        <div className={HeaderStyle.mobiles} id = "mobile">
          <div className={HeaderStyle.nav}>
            <span onClick={() => showMenu("close")} className={HeaderStyle.close}>&times;</span>
            <ul>
              <li>
                Platform <AiOutlineDown />
                <ul id={HeaderStyle.submenu}>
                  {
                    Platform.map(({ path, label }, i) => {
                      return <li key={i}> <a href={path}> {label} </a> </li>
                    })
                  }
                </ul>
              </li>
              <li>
                Solutions <AiOutlineDown />
                <ul id={HeaderStyle.submenu}>
                  {
                    Solutions.map(({ path, label }, i) => {
                      return <li key={i}> <a href={path}> {label} </a> </li>
                    })
                  }
                </ul>
              </li>
              <li>
                <a href={PRICING_PAGE}> Pricing </a>
              </li>
              <li>
                <a href={SUCCESS_STORY_PAGE}>Success stories</a>
              </li>
              <li>
                Resources <AiOutlineDown />
              </li>
            </ul>
            <button action={() => window.location.href = ("/register")}>
              Start Selling
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;