import React from "react";
import AddCardStyle from "./AddCard.module.css"

const AddCard = ({ span }) => {
  return (
    <>
      <div className={AddCardStyle.AddCard}>
        <h2 className="title-h2">
          Sponsored <span> {span} </span>
        </h2>
        <div>
          <p>
            One of the largest B2B wholesale marketplaces in the world. Founded
            in 1999 by Jack Ma, Alibaba.com ecommerce platform has helped
            sellers reach buyers around the world for more than 20 years, now
            with an end-to-end suite of tools built for B2B.
          </p>
        </div>
      </div>
    </>
  );
};

export default AddCard;