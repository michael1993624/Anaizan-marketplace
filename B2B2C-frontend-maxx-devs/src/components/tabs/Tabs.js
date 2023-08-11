import { useState } from "react";
import "./App.css";

import ProductImg1 from "../../assets/images/product/product-1.jpg";
import ProductImg2 from "../../assets/images/product/product-2.jpg";
import ProductImg3 from "../../assets/images/product/product-3.jpg";
import { Link } from "react-router-dom";

function Tabs({ TableTitle }) {
  const [toggleState, setToggleState] = useState(1);
  
  const salesProducts = [
    { id: 1, img: ProductImg1, title: "Produits les mieux classés" },
    { id: 2, img: ProductImg2, title: "Produits les mieux classés" },
    { id: 3, img: ProductImg3, title: "Produits les mieux classés" },
    { id: 4, img: ProductImg3, title: "Produits les mieux classés" },
    { id: 5, img: ProductImg3, title: "Produits les mieux classés" },
    { id: 6, img: ProductImg3, title: "Produits les mieux classés" },
    { id: 7, img: ProductImg3, title: "Produits les mieux classés" },
    { id: 8, img: ProductImg3, title: "Produits les mieux classés" },
    // { id: 9, img: ProductImg3, title: "Produits les mieux classés" },
    // { id: 10, img: ProductImg3, title: "Produits les mieux classés" },
    // { id: 11, img: ProductImg3, title: "Produits les mieux classés" },
    // { id: 12, img: ProductImg3, title: "Produits les mieux classés" },
  ];

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          {TableTitle}
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Tab 2
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Tab 3
        </button>
        <button
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}
        >
          Tab 4
        </button>
      </div>

      <div className="content-tabs">
        <div className={toggleState === 1 ? "content  active-content" : "content"} >
            <div className="sales-product-card">
                {salesProducts.map(({ id, title, img }) => {
                return (
                    <Link to = {{pathname :"", state:{}}} >
                        <center key={id}>
                            <label className="d-block"> {title}</label>
                            <img src={img} alt={`sales product${id}`} />
                        </center>
                    </Link>
                    
                );
                })}
            </div>
   
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <div className="sales-product-card">
                {salesProducts.map(({ id, title, img }) => {
                return (
                    <center key={id}>
                    <label className="d-block"> {title}</label>
                    <img src={img} alt={`sales product${id}`} />
                    </center>
                );
                })}
            </div>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <div className="sales-product-card">
                {salesProducts.map(({ id, title, img }) => {
                return (
                    <center key={id}>
                    <label className="d-block"> {title}</label>
                    <img src={img} alt={`sales product${id}`} />
                    </center>
                );
                })}
            </div>
        </div>
        <div className={toggleState === 4 ? "content  active-content" : "content"} >
            <div className="sales-product-card">
                {salesProducts.map(({ id, title, img }) => {
                return (
                    <center key={id}>
                    <label className="d-block"> {title}</label>
                    <img src={img} alt={`sales product${id}`} />
                    </center>
                );
                })}
            </div>
   
        </div>
      </div>
    </div>
  );
}

export default Tabs;