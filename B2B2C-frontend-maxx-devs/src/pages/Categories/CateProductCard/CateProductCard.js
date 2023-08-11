import React from "react";
import "./CateProductCard.scss";
function CateProductCard({ productItem }) {
  return (
    <div className="cate-product-card d-flex p-3 align-items-center">
      <img src={productItem.img} width={120} height={120} />
      <div className="ml-3">
        <p>{productItem.title}</p>
        <div>{productItem.review}</div>
        <p className="m-0">{productItem.originalPrice}</p>
        <p className="color-red m-0 font-weight-bold">{productItem.price}</p>
      </div>
    </div>
  );
}

export default CateProductCard;
