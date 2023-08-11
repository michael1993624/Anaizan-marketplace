import React from "react";
import ROUTES from "./router";
import "./App.scss";
import "./global/variables.scss"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCheckSquare,
  faArrowRight,
  faChevronRight,
  faAngleDown,
  faAngleUp,
  faThList,
  faThLarge,
} from "@fortawesome/free-solid-svg-icons";

library.add(fab, faCheckSquare, faArrowRight, faChevronRight, faAngleDown, faAngleUp, faThList, faThLarge);

function App() {
  return (
       <>
        <ROUTES />
       </>
  );
}

export default App;
