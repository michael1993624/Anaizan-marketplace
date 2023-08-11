import React from "react";

import CardStyle from "./Card.module.css"

const Card = ({ img, tag, desc }) => {
  return (
    <>
      <div className={CardStyle.Card}>
        <div className={CardStyle.top}>
          <img src={img} alt="card img" />
          <div className={CardStyle.Ctag}>{tag}</div>
        </div>
        <p> {desc} </p>
      </div>
    </>
  );
};

export default Card;