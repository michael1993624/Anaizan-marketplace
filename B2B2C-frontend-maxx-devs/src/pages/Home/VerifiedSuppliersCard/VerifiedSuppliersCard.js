import React from "react";
// import Button from "../../../components/Button/Button";
import "./VerifiedSuppliersCard.scss";

function VerifiedSuppliersCard({ product }) {
  return (
    <div className="verifiedSupplierCard-wrapper">
      <div className="d-flex verifiedSupplierCard-body">
        <img src={product.img} />
        <div className="pl-3 pr-3">
          <p className="font-weight-bold">VÊTEMENTS BIEN FINIS AVEC DES DESIGNS À LA</p>
          <p>High Quality A AMI LEVEL 3 blue green Disposable sterile 60 gms Go...</p>
          <span>2 YRS</span>
        </div>
      </div>
    </div>
  );
}

export default VerifiedSuppliersCard;
