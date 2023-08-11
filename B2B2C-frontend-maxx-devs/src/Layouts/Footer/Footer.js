import React, { useEffect } from "react";
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaLinkedinIn, FaTwitterSquare } from "react-icons/fa";

import "./Footer.scss";

function Footer() {

  const links = [
    {
      title: "Get to Know Us",
      items: [
        { path: "#", label: "About Anaizan" },
        { path: "#", label: "About Anaizan Group" },
        { path: "#", label: "Careers" },
        { path: "#", label: "Blog" },
        { path: "#", label: "Investor Relations" },
      ]
    },
    {
      title: "Sell on Anaizan.com",
      items: [
        { path: "#", label: "Learning Center" },
        { path: "#", label: "Partner Program" },
        { path: "#", label: "Africain Product" },
        { path: "#", label: "Vérified Suppliers" },
        { path: "#", label: "DropShipping" },
      ]
    },
    {
      title: "Customer Services",
      items: [
        { path: "#", label: "Help Center" },
        { path: "#", label: "Contact Us" },
        { path: "#", label: "Report Abuse" },
        { path: "#", label: "Submit a Dispute" },
        { path: "#", label: "Policies a Rules" },
      ]
    },
    {
      title: "Make Money with Us",
      items: [
        { path: "#", label: "Become a Partner" },
        { path: "#", label: "Become as Afilliate" },
        { path: "#", label: "Advertise your Product" },
        { path: "#", label: "Self-Publish With us" },
        { path: "#", label: "Policies a Rules" },
      ]
    },
    {
      title: " Source on Anaizan.com",
      items: [
        { path: "#", label: "All Categories" },
        { path: "#", label: "Request For Quotations" },
        { path: "#", label: "Regional Channels" },
        { path: "#", label: "Ready To Ship" },
        { path: "#", label: "Anaizan.com Select" },
      ]
    },
    {
      title: "Trade Services",
      items: [
        { path: "#", label: "Buyer Sourcing Service" },
        { path: "#", label: "Online Trading Meeting" },
        { path: "#", label: "Global Online Expo" },
        { path: "#", label: "Publish Showroom" },
        { path: "#", label: "Anaizan.com Select" },
      ]
    },
    {
      title: "Useful Links",
      items: [
        { path: "#", label: "Premium OEM Factories" },
        { path: "#", label: "Africain Product" },
        { path: "#", label: "Vérified Suppliers" },
        { path: "#", label: "Customized Products" },
        { path: "#", label: "Flash Deals" },
      ]
    },
  ]

  const showLink = (id) => {
    sessionStorage.setItem("id_footer_bloc_link", id)
    let width_screen = window.innerWidth;

    let allTitle = document.querySelectorAll(".title-link"),
      allBlock_ul = document.querySelectorAll(".ul-block");

    if (width_screen < "790") {

      for (var i = 0; i < allBlock_ul.length; i++) {
        allBlock_ul[i].style.height = "20px"
      }

      var id_link = sessionStorage.getItem("id_footer_bloc_link") ? sessionStorage.getItem("id_footer_bloc_link") : id;

      if (allBlock_ul[id_link].style.height == "20px") {
        allBlock_ul[id_link].style.height = "max-content"
      } else {
        allBlock_ul[id_link].style.height = "20px"
      }
    } else {
      for (var i = 0; i < allBlock_ul; i++) {
        allBlock_ul[i].style.height = "max-content"
      }
    }
  }

  useEffect(() => {
    showLink(0)
  })

  return (
    <footer className="footer">
      <div className="sectionf1 d-col align-items-center">
        <h2 className="title-form">News Letter Hebdomadaire</h2>
        <form className="form_footer">
          <input type="text" name="text"
            id="text"
            placeholder="Your email" />
          <input type="submit" value="Subscriber" />
        </form>
        <p>
          Trade Alert: Delivering the latests product
          trends and industry straight to your inbox
        </p>
      </div>
      <div className="sectionf2">

        {
          links.map(({ title, items }, index) => {
            return <ul key={index} className="ul-block overflow-hidden">
              <h3 onClick={() => showLink(index)}
                className="title-link"> {title} </h3>
              {items && (
                items.map((list, index2) => {
                  return <li key={index2}>
                    <a href={list.path}> {list.label} </a>
                  </li>
                })
              )}
            </ul>
          })
        }
      </div>
      <div className="sectionf3 d-flex align-items-center justify-content-between">
        <h2 className="title-form">News Letter Hebdomadaire</h2>
        <form className="form_footer">
          <input type="text" name="text"
            id="text"
            placeholder="Your email" />
          <input type="submit" value="Subscriber" />
        </form>
        <div className="f1">
          <h3> Télecharger </h3>
          <li>
            <a href=""> <img src="/assets/png/gPlay.png" /> </a>
            <a href=""> <img src="/assets/png/App.png" /> </a>
          </li>
        </div>
        <div className="f2">
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
        <div className="f3">
          <h3> Suivez-nous :</h3>
          <li>
            <a href=""> <FaFacebookSquare /> </a>
            <a href=""> <FaInstagramSquare /> </a>
            <a href=""> <FaLinkedin /> </a>
            <a href=""> <FaTwitterSquare /> </a>
          </li>
        </div>
      </div>
      <div className="sectionf4 d-flex align-items-center justify-content-between">
        <p>
          Copyright © 2021 Anaïzan. All rights reserved.
        </p>
        <p>

          Privacy / Terms of use / Cookie preferences / Protect my personal data / AdChoices
        </p>
      </div>
    </footer>
  );
}

export default Footer;
