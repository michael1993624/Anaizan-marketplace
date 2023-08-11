import React from "react";
import "./ProductItem.scss";

import ProductImg1 from "../../assets/images/product/product-1.jpg";
import ProductImg2 from "../../assets/images/product/product-2.jpg";
import ProductImg3 from "../../assets/images/product/product-3.jpg";

import BxCheckShield from "../../assets/images/bx_check-shield.png";

function ProductItem() {
  return (
    <div className="product-item-section white-background-section">
      <img src={ProductImg1} className="product-item-img" />
      <p className="mt-2">High Quality A AMI LEVEL 3 blue green Disposable steri...</p>
      <p className="color-blue font-weight-bold">CFA 108 - CFA 324</p>
      <p className="font-weight-bold">CFA 108 - CFA 324</p>
      <p>10 Pieces (MOQ)</p>
      <div className="d-flex justify-content-between align-items-center">
        <span>MA</span>
        <span className="font-bold-weight">1 AN</span>
        <img src={BxCheckShield} />
      </div>
    </div>
  );
}

export default ProductItem;
