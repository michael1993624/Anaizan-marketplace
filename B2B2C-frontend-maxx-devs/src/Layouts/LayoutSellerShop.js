import React from "react";
import Footer from "./Footer/Footer";
import HeaderSellerShop from "./Headers/HeaderSellerShop";


function LayoutSellerShop({ menuColor, children }) {
  return (
    <div>
      <HeaderSellerShop />
      {children}
      <Footer />
    </div>
  );
}

export default LayoutSellerShop;
