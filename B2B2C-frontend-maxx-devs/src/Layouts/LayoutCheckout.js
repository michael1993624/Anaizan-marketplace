import React from "react";
import Footer from "./Footer/Footer";
import { HeaderCheckout } from "./Headers/HeaderCheckout";

function LayoutCheckout({ children }) {
  return (
    <div>
      <HeaderCheckout />
      {children}
      <Footer />
    </div>
  );
}
export default LayoutCheckout;
