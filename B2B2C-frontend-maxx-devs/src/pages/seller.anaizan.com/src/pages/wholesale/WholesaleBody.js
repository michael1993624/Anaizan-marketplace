import React from "react";
import CommentCard from "../../components/CommentCard/CommentCard";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import SectionIntro from "../../components/SectionHeading/SectionIntro";
import images from "../../assets/img";
import calculator from "../../assets/img/calculator.png"

import WholesaleStyle from "./WholesaleBody.module.css"
import FirstSection from "../../shared/FirstSection/FirstSection";
import BusinessBanner from "../../components/Banners/BusinessBanner";
import LastSection from "../../shared/LastSection/LastSection";
import OperationsCard from "../../components/OperationCard/OperationsCard";

const WholesaleBody = () => {
  const goals = [
    {
      title: "Get B2B tools to simplify your",
      span: "operations",
      list: [
        "Create a digital storefront and get your brand seen globally - no coding skills required",
        "Set minimum order quantities (MOQs) and volume-based ladder pricing.",
        "Leverage smart posting and API integration to seamlessly list products and automatically optimize for visibility.",
        "Set minimum order quantities (MOQs) and volume-based ladder pricing.",
      ],
    },
    {
      title: "Get B2B tools to simplify your",
      span: "operations",
      list: [
        "Create a digital storefront and get your brand seen globally - no coding skills required",
        "Set minimum order quantities (MOQs) and volume-based ladder pricing.",
        "Leverage smart posting and API integration to seamlessly list products and automatically optimize for visibility.",
        "Set minimum order quantities (MOQs) and volume-based ladder pricing.",
      ],
    },
    {
      title: "Get B2B tools to simplify your",
      span: "operations",
      list: [
        "Create a digital storefront and get your brand seen globally - no coding skills required",
        "Set minimum order quantities (MOQs) and volume-based ladder pricing.",
        "Leverage smart posting and API integration to seamlessly list products and automatically optimize for visibility.",
        "Set minimum order quantities (MOQs) and volume-based ladder pricing.",
      ],
    },
    {
      title: "Get B2B tools to simplify your",
      span: "operations",
      list: [
        "Create a digital storefront and get your brand seen globally - no coding skills required",
        "Set minimum order quantities (MOQs) and volume-based ladder pricing.",
        "Leverage smart posting and API integration to seamlessly list products and automatically optimize for visibility.",
        "Set minimum order quantities (MOQs) and volume-based ladder pricing.",
      ],
    },
  ];

  return (
    <>
    <FirstSection
        title={"Grow your  "}
        b={" Wholesale"}
        subTitle={"Business Online"}
        sub={
          "Anaizan.com makes ecommerce possible for sellers around the world, connecting you with new customers and the tools necessary to do business on a global scale."
        }
        img={images.wholesale_hero}
      />
      <BusinessBanner />
      <section className={WholesaleStyle.wholesaleBody}>
        <SectionHeading
          margin
          heading="Key benefits of "
          span="B2B ecommerce"
          sub="B2B ecommerce takes traditional sales methods to the next level. Wholesale distributors, manufacturers, and traders can seize the opportunity and stay ahead."
        />
        <div className={WholesaleStyle.block}>
          {goals.map((goal, i) => (
            <OperationsCard
              title={goal.title}
              span={goal.span}
              key={i}
              list={goal.list}
            />
          ))}
        </div>
        <section className={`${WholesaleStyle.space} d-flex`}>
          <div className={WholesaleStyle.text}>
            <h2 className="title-h2">Innovative digital tools that <span> transform </span> the wholesale experience </h2> 

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
              Founded in 1999{" "}
            </p>
          </div>
          <div className={WholesaleStyle.imgs}>
            <img src={calculator} alt="make money" />
          </div>
        </section>
        <section>
          <SectionIntro
            beforeSpan="Hear from "
            span="successful "
            afterSpan="Anaizan.com sellers"
            sub="One of the largest B2B wholesale marketplaces in the world. Founded in 1999 by Jack Ma, Alibaba.com ecommerce platform has helped sellers reach buyers around the world for more than 20 years, now with an end-to-end suite of tools built for B2B."
          />
          
        <CommentCard img={images.wholesale_comment} />
        </section>
      </section>
      <LastSection />
    </>
  );
};

export default WholesaleBody;
