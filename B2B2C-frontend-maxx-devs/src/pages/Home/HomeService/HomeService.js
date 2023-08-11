import React from "react";
import ServiceImg1 from "../../../assets/images/service/bg_1.jpg";
import ServiceImg2 from "../../../assets/images/service/bg_1.jpg";
import ServiceImg3 from "../../../assets/images/service/bg_1.jpg";
import ServiceImg4 from "../../../assets/images/service/bg_1.jpg";

import DollarIcon from "../../../assets/images/dollar.png";
import PaymentIcon from "../../../assets/images/payment.png";
import PaySearchIcon from "../../../assets/images/pay_search.png";
import WorldEarthIcon from "../../../assets/images/world_earth.png";

import USFlagIcon from "../../../assets/images/flag/us.png";
import FRFlagIcon from "../../../assets/images/flag/fr.png";
import AFFlagIcon from "../../../assets/images/flag/af.png";
import INFlagIcon from "../../../assets/images/flag/in.png";
import ITFlagIcon from "../../../assets/images/flag/lt.png";

import "./HomeService.scss";

function HomeService() {
  const services = [
    { id: 1, img: ServiceImg1, icon: DollarIcon, title: "Trade Assurance", desc: "ORDER PROTECTION" },
    { id: 2, img: ServiceImg2, icon: PaymentIcon, title: "Payment", desc: "PAYMENT SOLUTION" },
    { id: 3, img: ServiceImg3, icon: PaySearchIcon, title: "Inspection Solution", desc: "INSPECTION" },
    { id: 4, img: ServiceImg4, icon: WorldEarthIcon, title: "Ocean and Air SHipping", desc: "LOGISTICS SERVICES" },
  ];

  const flags = [
    { id: 1, flag: USFlagIcon, country: "USA" },
    { id: 2, flag: FRFlagIcon, country: "France" },
    { id: 3, flag: AFFlagIcon, country: "Africa" },
    { id: 4, flag: INFlagIcon, country: "India" },
    { id: 5, flag: ITFlagIcon, country: "Italy" },
    { id: 6, flag: USFlagIcon, country: "USA" },
    { id: 7, flag: USFlagIcon, country: "USA" },
  ];
  return (
    <section className="sectionb8">
      <div className="sect8_head d-flex align-items-center">
        <h3> CHOOSE YOUR SUPPLIERS BY COUNTRY </h3>
      </div>
      <div className="drapeau_group">
        <div>
          <img src="/assets/png/flags/af.png" alt="" />
          USA
        </div>
        <div>
          <img src="/assets/png/flags/fr.png" alt="" />
          USA
        </div>
        <div>
          <img src="/assets/png/flags/us.png" alt="" />
          USA
        </div>
        <div>
          <img src="/assets/png/flags/in.png" alt="" />
          India
        </div>
        <div>
          <img src="/assets/png/flags/fr.png" alt="" />
          France
        </div>
        <div>
          <img src="/assets/png/flags/af.png" alt="" />
          USA
        </div>
      </div>
    </section>
  );
}

export default HomeService;
