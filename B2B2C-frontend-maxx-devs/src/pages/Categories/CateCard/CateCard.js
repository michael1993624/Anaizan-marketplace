import React from "react";
import "./CateCard.scss";

function CateCard({ cateItem }) {
  return (
    <div className="cate-card-section">
      <div className="text-center">
        <p className="font-weight-bold">{cateItem.title}</p>
        <img src={cateItem.img} />
      </div>

      {cateItem &&
        cateItem.categories.map(({ name }, index) => {
          return (
            <div key={index} className="mt-2">
              <p className="m-0 color-blue cursor-pointer">{name}</p>
            </div>
          );
        })}

      <em className="color-red">...more</em>
    </div>
  );
}

export default CateCard;
