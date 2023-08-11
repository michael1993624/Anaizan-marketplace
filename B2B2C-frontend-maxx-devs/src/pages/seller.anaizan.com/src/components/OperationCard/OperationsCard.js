import React from "react";

import OperationCardStyle from "./OperationCard.module.css"

const OperationsCard = ({ title, span, list }) => {
  return (
    <>
      <div className={OperationCardStyle.operation}>
        <h4>
          {title}
          <span> {span}</span>
        </h4>
        <ul>
          {list?.map((li, i) => (
            <li key={i}>{li}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default OperationsCard;
