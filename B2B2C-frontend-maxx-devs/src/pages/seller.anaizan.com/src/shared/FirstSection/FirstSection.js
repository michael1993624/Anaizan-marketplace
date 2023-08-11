import React from "react";
import FirstSectionStyle from "./FirstSection.module.css"
import ellipse from "../../assets/img/ellipse.png"
import ellipse2 from "../../assets/img/ellipse2.png"
import ellipse3 from "../../assets/img/ellipse3.png"
import ellipse4 from "../../assets/img/ellipse4.png"
import ellipseb1 from "../../assets/img/ellipseb1.png"
import ellipseb2 from "../../assets/img/ellipseb2.png"
import backbanner from "../../assets/img/backbanner.png"


const FirstSection = ({ title, sub, img, b, span, subTitle }) => {
  return (
    <>
      <section className={`${FirstSectionStyle.hero}`}>
        <div className={FirstSectionStyle.e1}>
          <img src={ellipse} />
        </div>
        <div className={FirstSectionStyle.e1}>
          <img src={ellipse2} />
        </div>
        <div className={FirstSectionStyle.e1}>
          <img src={ellipse3} />
        </div>
        <div className={FirstSectionStyle.e1}>
          <img src={ellipse4} />
        </div>
        <div className={FirstSectionStyle.e1}>
          <img src={ellipseb1} />
        </div>
        <div className={FirstSectionStyle.e1}>
          <img src={ellipseb2} />
        </div>
        <div className={FirstSectionStyle.e1}>
          <img src={backbanner} />
        </div> 
        <div className={FirstSectionStyle.text}>
          <h3>{subTitle}</h3>
          <h1>
            {title} <b>{b}</b>
            <span> {span} </span>
          </h1>
          <p>{sub}</p>
        </div>
        <div className={FirstSectionStyle.img}>
          <img src={img} alt="banner" />
        </div>
      </section>
    </>
  );
};

export default FirstSection;

