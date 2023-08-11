import React from "react";
import images from "../../assets/img/hero_img.svg";

import HeroStyle from "./Hero.module.css"

const Hero = ({ data }) => {
  return (
    <>
      <section className={`${HeroStyle.hero_style} section-first`}>
        <div className={HeroStyle.hero_wrapper}>
          <div className={HeroStyle.card}>
            <b>{data.caption}</b>
            <h1>{data.title}</h1>
            <p>{data.text}</p>
            <button onClick={() => window.location.href = (data.url)}>
              {data.btnText}
            </button>
          </div>
        </div>
        <div className={HeroStyle.img}>
            <img src={images} />
          </div>
      </section>
    </>
  );
};

export default Hero;
