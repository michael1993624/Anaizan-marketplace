import React from "react";

import { HeaderContent } from "../fragments/HeaderContent";
import { SearchBar } from "../fragments/SearchBar";
import { LeftNavMenu } from "../fragments/sellerShop/LeftNavMenu";
import { RightTopBar } from "../fragments/sellerShop/RightTopBar";
import { NavBar } from "../fragments/sellerShop/NavBar";

import "./SellerTopBar.scss"

const HeaderSellerShop = () => {

  return (
    <>
      <HeaderContent fragement1={<LeftNavMenu />} 
      fragement2={null}
      fragement4={<RightTopBar />}
      fragement3={<NavBar />} />
    </>
  );
};

export default HeaderSellerShop;
