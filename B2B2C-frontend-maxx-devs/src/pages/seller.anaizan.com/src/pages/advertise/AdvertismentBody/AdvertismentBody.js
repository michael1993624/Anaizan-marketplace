import React from "react";
import images from "../../../assets/img";
import time from "../../../assets/img/time.svg"
import AddCard from "../AddCard/AddCard";
import GoalsCard from "../../../components/GoalsCard/GoalsCard";

import AdvertismentBodyStyle from "./AdvertismentBody.module.css"

const AdvertisementBody = () => {
  const adds = ["products", "brand", "display", "sale"];

  const goals = [
    {
      title: "Get",
      span: "discovered",
      img: images.arrow,
    },
    {
      title: "increase",
      span: "sales",
      img: images.chart,
    },
    {
      title: "control",
      span: "cost",
      img: time,
    },
  ];

  return (
    <>
        <section className={AdvertismentBodyStyle.section_1}>
          {adds.map((add, index) => (
            <AddCard span={add} key={index} />
          ))}
        </section>
        <section className={AdvertismentBodyStyle.section_2}>
          <img src={images.ads} alt="ads" /> 
          <div className={AdvertismentBodyStyle.text}>
            <h2 className="title-h2">Achieve your <b> business goals </b> </h2>
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
        </section>
        <section className={AdvertismentBodyStyle.block}>
          {goals.map((goal, i) => (
            <GoalsCard
              title={goal.title}
              img={goal.img}
              span={goal.span}
              key={i}
            />
          ))}
        </section>
      
    </>
  );
};

export default AdvertisementBody;