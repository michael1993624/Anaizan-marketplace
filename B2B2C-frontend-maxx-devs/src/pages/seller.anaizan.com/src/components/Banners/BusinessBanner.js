import React from "react";

import BusinessBannerStyle from "./BusinessBanner.module.css"

const BusinessBanner = () => {
  return (
    <>
      <div className={BusinessBannerStyle.BusinessBanner}>
        <div className={BusinessBannerStyle.wrap}>
          <h1>
            generating <strong> B2B sales</strong> on Anaizan.com is easy
          </h1>
          <p>
            Explore digital ways to tap into one of the largest bases of
            business buyers and jumpstart sales on Anaizan.com.
          </p>
          <button>Start Tour</button>
        </div>
      </div>
    </>
  );
};

export default BusinessBanner;
