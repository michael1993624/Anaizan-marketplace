import React from "react";
import GrowBusiness from "./GrowBusiness/GrowBusiness";
import LastSection from "../../shared/LastSection/LastSection";
import Posts from "./Posts/Posts";
import DYN from "./Dyn/DYN";
import Stories from "./Stories/Stories";

import IndexStyle from "./Index.module.css"
import circle from "../../assets/img/mark.png"
import imgHome from "../../assets/img/imgHome.png"

import "../../assets/styles/globals.css"

const HomeBody = () => {
  return (
    <>
      <section className={`${IndexStyle.section1} d-flex section-first`}>
        <div className={IndexStyle.circleImg}>
          <img src={circle} />
        </div>
          <div className={IndexStyle.text}>
              <h1> Become an <span> Anaizan</span> Seller </h1>
              <p>
              Differentiates yourself from the competition with a full 
              store dedicated to your products- no coding or design skills necessary!
              </p>
              <button> Start Selling </button>
          </div>
          <div className={IndexStyle.imgHome}>
              <img src={imgHome} />
          </div>
      </section>
      <Posts />
      <DYN />
      <GrowBusiness />
      <Stories />
      <LastSection />
    </>
  );
};

export default HomeBody;
