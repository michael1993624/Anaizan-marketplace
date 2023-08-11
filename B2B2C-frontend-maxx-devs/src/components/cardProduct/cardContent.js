import React from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./cardContent.scss";

function CardContent({ card, ...props }) {
    console.log(card)
  return (
    <div className="col-md-6">
        <div className="white-background-section p-3">
            <div className="d-flex align-items-baseline justify-content-between">
            <h3>{card.title}</h3>
            <div className="d-flex align-items-baseline" style={{ cursor: "pointer" }}>
                <h3 className="mr-2">See All</h3>
                <FontAwesomeIcon icon="chevron-right" />
            </div>
            </div>

            <div className="d-flex justify-content-between">
            {card.product.map((product, index) => {
                return <ProductCard product={product} key={index} />;
            })}
            </div>
        </div>
    </div>
  );
}

export default CardContent;





