import React, { useState } from "react";

import "./SubCategories.scss"

import { RiArrowDownSLine } from "react-icons/ri"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ProductPoster from "../ProductPoster/ProductPoster";
import MenuVertical from "./MenuVertical/MenuVertical";
import { subCategorieMenu } from "../../settings/SubMenuLink";
import { DropDownMenu } from "./DropDownMenu/DropDownMenu";
import { useLocation } from "react-router-dom";
import ButtonPagination from "../../components/ButtonPagination/ButtonPagination";
import { useSelector } from "react-redux";
import { close_p, open_p } from "../Checkout/Checkout";



const SubCategorie = (props) => {

  const [popup, isPopup] = useState(false)

  const location = useLocation();
  const data = location.state?.data;

  const [show, setShow] = useState(0)
  const promoProduct = useSelector((state) => state.myStore.productPromo)

  const showPopup = (action) => {
    let p = document.querySelector(".mobile");

    if (action =="show") {
      p.style.display="block"
    } else if(action =="hide") {
      p.style.display = "none"
    }
  }

  return (
    <div className="body_home">
      <div className="label-categorie">
        <span> Home </span>
        <FaChevronRight />
        <span> Categories </span>
        <FaChevronRight />
        <span id="category"> {data}  </span>
        {data ? <FaChevronRight /> : ""}
        <span id="subcategory"> </span>

      </div>
      <section className="section1-subcat">
        <button className="btn-p" onClick={() => showPopup("show")}> <FaChevronLeft /> </button>
        <div className="mobile">
          <span className="close-p" onClick={() => showPopup("hide")} >&times;</span>
          <div className="section_block1" >
            <div className="bloc1">
              <DropDownMenu d="" title="Categorie" listCategorie={subCategorieMenu} />
              <button className="btnns">Advanced Search </button>
            </div>
            <div className="bloc1">
              <MenuVertical indice={0} title="Suplies Country" stateLast={show} action={setShow} index={0} />

            </div>
            <div className="bloc1">
              <MenuVertical indice={1} title="Suppliers Types" stateLast={show} action={setShow} index={0} />
            </div>
            <div className="bloc1 drop-menu2">
              <MenuVertical indice={3} stateLast={show} action={setShow} index={0} />
            </div>
            <div className="bloc1">
              <h3 className="bar">
                Temporary name
                <span> <RiArrowDownSLine /> </span>
              </h3>
              {
                promoProduct.map((list, index) => {
                  return (
                    <div className="card-promo" key={index}>
                      <img src={list.img} />
                      <h3> Promotion </h3>
                    </div>
                  )
                })
              }
              <MenuVertical title="Categories" stateLast={show} action={setShow} index={6} />
              <MenuVertical title="Suplies country" stateLast={show} action={setShow} index={7} />
              <MenuVertical title="Advanced Search" stateLast={show} action={setShow} index={8} />
            </div>
          </div>
        </div>
        <div className="section_block2">
          <ProductPoster />
          <ButtonPagination />
        </div>
      </section>
    </div>
  )
}

export default SubCategorie