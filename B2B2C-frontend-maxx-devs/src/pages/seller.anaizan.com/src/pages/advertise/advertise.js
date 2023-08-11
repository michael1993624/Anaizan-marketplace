import React from "react";
import images from "../../assets/img";
import AdvertisementBody from "./AdvertismentBody/AdvertismentBody";
import LastSection from  "../../shared/LastSection/LastSection";
import FirstSection from "../../shared/FirstSection/FirstSection";

const Advertise = () => {
  return (
    <>
      <FirstSection
        title={"Increase Visibility and Sales on Anaizan with  "}
        b={"Advertising"}
        sub={
          "Did you know that sponsored ads can help you boost your visibility, reach more shoppers and increase your sales? Sponsored ads campaigns are easy to set up, and we’ll give you $50 in free clicks* to help you get started. Terms and conditions apply."
        }
        img={images.advertise_bg}
      />
      <AdvertisementBody />
      <LastSection /> 
    </>
  );
};

export default Advertise;
