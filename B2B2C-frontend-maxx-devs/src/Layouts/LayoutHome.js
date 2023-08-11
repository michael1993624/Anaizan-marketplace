import React from "react";
import Footer from "./Footer/Footer";
import HeaderHome from "./Headers/HeaderHome";

function LayoutHome({ children }) {
  return (
    <div>
      <HeaderHome />
      {children}
      <Footer />
    </div>
  );
}
export default LayoutHome;
