import React, { useState } from "react";
import images from "../../../assets/img";

import GrowBusinessStyle from "./GrowBusiness.module.css"

const GrowBusiness = () => {
  const [tab, setTabs] = useState(0)

  const active = {borderBottom: "2px solid var(--red-color)"}
  const no_active = {borderBottom: "none"}

  return (
    <>
      <section className={GrowBusinessStyle.business_style}>
        <div className={GrowBusinessStyle.top}>
          <div className={GrowBusinessStyle.top_cta}>
            <h3>Grow Your Business </h3>
            <h3>With a Suite of Tools Built For You</h3>
          </div>
          <ul>
            <li onClick={() => setTabs(0)} style={tab == 0 ? active :no_active}>Custom storefront</li>
            <li onClick={() => setTabs(1)}
              style={tab == 1 ? active :no_active}>Advertising tools</li>
            <li onClick={() => setTabs(2)}
              style={tab == 2 ? active :no_active}>Data and analytics</li>
            <li onClick={() => setTabs(3)}
              style={tab == 3 ? active :no_active}>Customers support</li>
          </ul>
        </div>
        <div className={GrowBusinessStyle.bottom}>
          <div className={GrowBusinessStyle.content_tabs + " " + `${tab == 0 ? GrowBusinessStyle.show : GrowBusinessStyle.hide}`}>
            <div className={GrowBusinessStyle.card}>
              <h3>Set up a store that showcases your brand</h3>
              <p>
                Differentiate yourself from the competition with a full store
                dedicated to your products- no coding or design skills necessary!
              </p>
              <button>Learn More</button>
            </div>
            <img id={GrowBusinessStyle.img} src={images.store} alt="store" />
          </div>
          <div className={`${GrowBusinessStyle.content_tabs} ${tab == 1 ? GrowBusinessStyle.show : GrowBusinessStyle.hide}`}>
            <div className={GrowBusinessStyle.card}>
              <h3>Set up a store that showcases your brand</h3>
              <p>
                Differentiate yourself from the competition with a full store
                dedicated to your products- no coding or design skills necessary!
              </p>
              <button>Learn More</button>
            </div>
            <img id={GrowBusinessStyle.img} src={images.store} alt="store"  />
          </div>
          <div className={`${GrowBusinessStyle.content_tabs} ${tab == 2 ? GrowBusinessStyle.show : GrowBusinessStyle.hide}`}>
            <div className={GrowBusinessStyle.card}>
              <h3>Set up a store that showcases your brand</h3>
              <p>
                Differentiate yourself from the competition with a full store
                dedicated to your products- no coding or design skills necessary!
              </p>
              <button>Learn More</button>
            </div>
            <img id={GrowBusinessStyle.img} src={images.store} alt="store" />
          </div>
          <div className={`${GrowBusinessStyle.content_tabs} ${tab == 3 ? GrowBusinessStyle.show : GrowBusinessStyle.hide}`}>
            <div className={GrowBusinessStyle.card}>
              <h3>Set up a store that showcases your brand</h3>
              <p>
                Differentiate yourself from the competition with a full store
                dedicated to your products- no coding or design skills necessary!
              </p>
              <button>Learn More</button>
            </div>
            <img id={GrowBusinessStyle.img} src={images.store} alt="store" />
          </div>
        </div>
      </section>
    </>
  );
};

export default GrowBusiness;
