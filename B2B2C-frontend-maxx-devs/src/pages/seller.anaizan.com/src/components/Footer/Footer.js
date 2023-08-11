import React, { useEffect } from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";

import FooterStyle from "./Footer.module.css"

const Footer = () => {

  const arrayLink = [
    {
      label: "Sell With Anaizon",
      items: [
        { path: "#", label: "How much does it cost ?" },
        { path: "#", label: "Beginner's Guide" },
        { path: "#", label: "Intro to ecommerce" },
        { path: "#", label: "Inventory Management" },
      ]
    },
    {
      label: "Swlling Programs",
      items: [
        { path: "#", label: "Fulfillment by Anaizon" },
        { path: "#", label: "Anaizon Advertising" },
        { path: "#", label: "Anaizon Worlwide" },
        { path: "#", label: "Anaizon Business" },
        { path: "#", label: "More Programs" }
      ]
    },
    {
      label: "Anaizon for Brands",
      items: [
        { path: "#", label: "Build an online store" },
        { path: "#", label: "Tips for Brands on Anaizon" },
        { path: "#", label: "Brand case studies" },
        { path: "#", label: "Anaizon Brand Registry" }
      ]
    },
    {
      label: "Ecommerce Resource",
      items: [
        { path: "#", label: "Seller University" },
        { path: "#", label: "Anaizon" },
        { path: "#", label: "Service Partner Network" },
        { path: "#", label: "Anaizon Seller Events" },
        { path: "#", label: "Seller Central Help" }
      ]
    }
  ]

  /* fonctionnalité pour la version mobile */
  const showLink = async (id) => {
    let allBlock = document.querySelectorAll(".block_ul")

    for (var i = 0; i < allBlock.length; i++) {
      allBlock[i].classList.add(FooterStyle.hide)
    }

    if (allBlock[id].className.includes("hide")) {
      allBlock[id].classList.remove(FooterStyle.hide)
    } else if (!allBlock[id].className.includes("hide")) {
      allBlock[id].classList.add(FooterStyle.hide)
    }
  }

  useEffect(() => {
    showLink(0)
  })

  return (
    <>
      <div className={FooterStyle.top_style}>
        <div className={FooterStyle.links}>
          {
            arrayLink.map(({ label, items }, index) => {
              return <div className="block_ul" key={index}>
                <h4 onClick={() => showLink(index)}> {label} </h4>
                {
                  items &&
                  items.map(({ path, label }, index) => {
                    return <a href={path} key={index}> {label} </a>
                  })
                }
              </div>
            })
          }
        </div>
        <div className={FooterStyle.separator}></div>
        <div className={FooterStyle.social}>
          <div className={FooterStyle.form}>
            <h4> News Letter Hebdomadaire </h4>
            <form>
              <input type="text" name="" placeholder="Enter your address email" />
              <button> Subscribe </button>
            </form>
          </div>
          <div className={FooterStyle.links_social}>
            <h4>Suivez nous sur:</h4>
            <div>
              <a href="#"><AiFillFacebook /></a>
              <a href="#"><AiFillInstagram /></a>
              <a href="#"><AiFillLinkedin /></a>
              <a href="#"><AiFillTwitterSquare /></a>
            </div>
          </div>
        </div>
        <div className={FooterStyle.bottom_style}>
          <div className={FooterStyle.wrap}>
            <p>Copyright © 2021 Anaïzan. All rights reserved.</p>
            <p>
              Confidentialité / Conditions d'utilisation / Préférences en matière
              de cookies / Protéger mes données personnelles / AdChoices
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
