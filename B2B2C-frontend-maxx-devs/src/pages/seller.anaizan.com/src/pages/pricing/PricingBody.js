import React from "react";
import Hero from "../../components/Hero/Hero";
import PriceList from "./PriceList/PriceList";

const PricingBody = () => {

  const heroData = {
    title: "Let's talk numbers",
    text: "The cost to sell on Anaizon depends on your selling plan, product category, fulfillment strategy, and other variables. The options are flexible, so you can find the combo that works best for you and your goals.",
    url: "/register",
    btnText: "start selling",
    caption: "TARIFICATION",
  };

  return (
    <>
    <Hero data={heroData} />
      <PriceList />
    </>
  );
};

export default PricingBody;
