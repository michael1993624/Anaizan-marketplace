import React from "react";

import { HeaderContent } from "../fragments/HeaderContent";
import { SearchBar } from "../fragments/SearchBar";
import { RightTopBar } from "../fragments/RightTopBar";
import { NavBarHome } from "../fragments/NavBarHome";


const HeaderHome = () => {

  return (
    <>
      <HeaderContent fragement1={<SearchBar />} 
      fragement2={<RightTopBar />}
      fragement3={<NavBarHome />}
      fragement4={null} />
    </>
  );
};

export default HeaderHome;
