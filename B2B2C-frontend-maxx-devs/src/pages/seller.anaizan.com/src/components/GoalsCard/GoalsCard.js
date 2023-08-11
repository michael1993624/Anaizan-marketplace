import React from "react";

import GoalsCardStyle from "./GoalsCard.module.css";


const GoalsCard = ({ img, span, title }) => {
  return (
    <>
      <div className={GoalsCardStyle.goals_style}>
        <div></div>
        <img src={img} alt="icon"/>
        <h4>
          {title}
          <span> {span}</span>
        </h4>
        <p>
          One of the largest B2B wholesale marketplaces in the world. Founded in
          1999 by Jack Ma, Alibaba.com ecommerce platform has helped sellers
          reach buyers around the world for more than 20 years, now with an
          end-to-end suite of tools built for B2B.
        </p>
      </div>
    </>
  );
};

export default GoalsCard;