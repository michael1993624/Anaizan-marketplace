import React from "react";
import { Link } from "react-router-dom";

import "./ProductCard.scss";


function ProductCard({ product, ...props }) {
  return (
    <div className="product-card-wrapper">
      <div className="product-card-body" >
        <Link to = {{pathname :"/product/detail", state:product}}>
        <div className="product-card-img">
          <img src={product && product.img} alt={`product img${product.id}`} />
        </div>

        <div className="d-flex justify-content-around align-items-center mt-2">
          <span className="font-weight-bold">${product.price}</span>
          <span className="sale-price">%{product.sale}</span>
        </div>

        <div>
          <em>{product.soldOut} vendus</em>
        </div>
        </Link>
        
      </div>
    </div>
  );
}

export default ProductCard;
