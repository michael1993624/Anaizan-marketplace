import React from "react";
import Footer from "./Footer/Footer";
import { HeaderCart } from "./Headers/HeaderCart";

function LayoutCart({ children }) {
  return (
    <div>
      <HeaderCart />
      {children}
      <Footer />
    </div>
  );
}
export default LayoutCart;
