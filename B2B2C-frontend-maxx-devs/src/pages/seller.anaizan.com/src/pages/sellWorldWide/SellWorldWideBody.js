import React from "react";
import SectionIntro from "../../components/SectionHeading/SectionIntro";
import images from "../../assets/img";

import SellWWBodyStyle from "./SellWW.module.css"
import FirstSection from "../../shared/FirstSection/FirstSection";
import LastSection from "../../shared/LastSection/LastSection";
import Card from "../../components/CardExpand/Cards";

const SellWorldWideBody = () => {
  const { dollar, asia, europe, emerging } = images;

  const arrayExpand = [
    {
      img: asia,
      nameCountry: "Asia",
      desc: `One of the largest B2B wholesale marketplaces in the world. Founded in
          1999 by Jack Ma, Alibaba.com ecommerce platform has helped sellers
          reach buyers around the world for more than 20 years, now with an
          end-to-end suite of tools built for B2B.
      `
    },
    {
      img: europe,
      nameCountry: "Europe",
      desc: `One of the largest B2B wholesale marketplaces in the world. Founded in
          1999 by Jack Ma, Alibaba.com ecommerce platform has helped sellers
          reach buyers around the world for more than 20 years, now with an
          end-to-end suite of tools built for B2B.
      `
    },
    {
      img: emerging,
      nameCountry: "Emerging",
      desc: `One of the largest B2B wholesale marketplaces in the world. Founded in
          1999 by Jack Ma, Alibaba.com ecommerce platform has helped sellers
          reach buyers around the world for more than 20 years, now with an
          end-to-end suite of tools built for B2B.
      `
    },
  ]

  return (
    <>
    <FirstSection
        title={"Sell worldwide with  "}
        b={"Anaizan"}
        sub={
          "Access hundreds of millions of customers around the world with Amazon Global Selling"
        }
        img={images.solution_hero}
      />
      <section className={SellWWBodyStyle.Body}>
        <section className={`${SellWWBodyStyle.block_txt} d-flex`}>
          <div className={SellWWBodyStyle.text}>
            <h2 className="title-h2">Accelerate your <span> international </span> <br /> sales</h2>
            <p>
              One of the largest B2B wholesale marketplaces in the world.
              Founded in 1999 by Jack Ma, Alibaba.com ecommerce platform has
              helped sellers reach buyers around the world for more than 20
              years, now with an end-to-end suite of tools built for B2B.
            </p>
            <p>
              One of the largest B2B wholesale marketplaces in the world.
              Founded in 1999 by Jack Ma, Alibaba.com ecommerce platform has
              helped sellers reach buyers around the world for more than 20
              years, now with an end-to-end suite of tools built for B2B.
            </p>
            <p>
              One of the largest B2B wholesale marketplaces in the world.
              Founded in 1999 by Jack Ma, Alibaba.com ecommerce platform has
              helped sellers reach buyers around the world for more than 20
              years, now with an end-
            </p>
          </div>
            <img src={images.ads} alt="make money" />
        </section>
        <section className="section_2">
          <SectionIntro
            beforeSpan="Where To"
            span="Expand"
            sub="  One of the largest B2B wholesale marketplaces in the world. Founded in
          1999 by Jack Ma, Alibaba.com ecommerce platform has helped sellers
          reach buyers around the world for more than 20 years, now with an
          end-to-end suite of tools built for B2B."
          />

          <div className={SellWWBodyStyle.block}>
            {
              arrayExpand.map((list, i) => {
                return <Card img={list.img}
                  tag={list.nameCountry}
                  desc={list.desc} key={i}
                />
              })
            }
          </div>
        </section>
      </section>
      <LastSection />
    </>
  );
};

export default SellWorldWideBody;
