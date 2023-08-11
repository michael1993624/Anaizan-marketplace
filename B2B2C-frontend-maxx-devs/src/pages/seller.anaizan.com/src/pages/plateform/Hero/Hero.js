import React from "react";
import images from "../../../assets/img";

import HeroStyle from "./Hero.module.css"

const PlatformHero = () => {
  return (
    <>
      <div className={HeroStyle.platform_style}>
        <div className={HeroStyle.gr}>
          <div className={HeroStyle.left}>
            <h1>How to start selling on <b> Anaizan.com </b> </h1>
            <p>
              Ready to go global? Your business can penetrate new markets and
              reach customers around the world with an Alibaba.com seller
              account. Here's how to get started!
            </p>
          </div>
        </div>
        <div className={HeroStyle.img}>
          <img src={images.platform} alt="platform" />
        </div>
      </div>
    </>
  );
};

export default PlatformHero;
