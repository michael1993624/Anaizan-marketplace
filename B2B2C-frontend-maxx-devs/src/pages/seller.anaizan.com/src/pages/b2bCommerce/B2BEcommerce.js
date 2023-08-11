import React from "react";
import CommentCard from "../../components/CommentCard/CommentCard";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import SectionIntro from "../../components/SectionHeading/SectionIntro";
import images from "../../assets/img";
import GoalsCard from "../../components/GoalsCard/GoalsCard";
import banner from "../../assets/img/marketp.png"


import b2bStyle from "./b2b.module.css"
import FirstSection from "../../shared/FirstSection/FirstSection";
import LastSection from "../../shared/LastSection/LastSection";
import BusinessBanner from "../../components/Banners/BusinessBanner";


const B2bBody = () => {
  const goals = [
    {
      title: "Save",
      span: "money",
      img: images.price,
    },
    {
      title: "increase",
      span: "sales",
      img: images.chart,
    },
    {
      title: "save",
      span: "time",
      img: images.clock,
    },
    {
      title: "showcase",
      span: "brand",
      img: images.showcase,
    },
  ];

  return (
    <>
    <FirstSection 
        title={"Go Digital With"}
        b={" Anaizan"}
        subTitle={"B2B E-Commerce"}
        sub={
          "Anaizan.com makes ecommerce possible for sellers around the world, connecting you with new customers and the tools necessary to do business on a global scale."
        }
        img={images.b2b_hero}
      />
      <BusinessBanner />
      <div className={b2bStyle.body_style}>
        <SectionHeading
          margin
          heading="Key benefits of "
          span="B2B ecommerce"
          sub="B2B ecommerce takes traditional sales methods to the next level. Wholesale distributors, manufacturers, and traders can seize the opportunity and stay ahead."
        />
        <section className={b2bStyle.block}>
          {goals.map((goal, i) => (
            <GoalsCard
              title={goal.title}
              img={goal.img}
              span={goal.span}
              key={i}
            />
          ))}
        </section>
        <section>
          <div className={`${b2bStyle.section_div} d-flex`}>
            <div className={`${b2bStyle.block_section2} d-flex`}>
              <h2 className="title-h2">
                One of the largest wholesale <br /> <span> Marketplaces </span>
              </h2>
              <p>
                One of the largest B2B wholesale marketplaces in the world.
                Founded in 1999 by Jack Ma, Alibaba.com ecommerce platform has helped sellers
                reach buyers around the world for more than 20 years, now with
                an end-to-end suite of tools built for B2B.
              </p>
              <p>
                One of the largest B2B wholesale marketplaces in the world.
                Founded in 1999 by Jack Ma, Alibaba.com ecommerce platform
                has helped sellers reach buyers around the world for more than 20 years,
                now with an end-to-end suite of tools built for B2B.
              </p>
            </div>
            <img src={banner} />
          </div>
        </section>
        <section>
          <SectionIntro
            beforeSpan="Hear from "
            span="successful "
            afterSpan="Anaizan.com sellers"
            sub="One of the largest B2B wholesale marketplaces in the world. Founded in 1999 by Jack Ma, Alibaba.com ecommerce platform has helped sellers reach buyers around the world for more than 20 years, now with an end-to-end suite of tools built for B2B."
          />
           <CommentCard img={images.b2b_comment} />
        </section>
      </div>
      <LastSection />
    </>
  );
};

export default B2bBody;

