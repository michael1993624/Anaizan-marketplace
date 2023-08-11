import React from "react";

import Tabs from "../../components/tabs/Tabs"
import "./SalesProducts.scss";

function SalesProducts({ salesTitle }) {
  const TableTitle = [
    { id: 1, name: "Mobile Phone & Accessories" },
    { id: 2, name: "Mobile Phone & Accessories" },
    { id: 3, name: "Mobile Phone & Accessories" },
    { id: 4, name: "Mobile Phone & Accessories" },
    { id: 5, name: "Mobile Phone & Accessories" },
    { id: 6, name: "Mobile Phone & Accessories" },
  ];

  return (
    <div className="sales-products-wrapper white-background-section">
      <div className="row">
        <div className="col-md-3 pr-0">
          <div className="p-1">
            <h3>{salesTitle}</h3>
            <div className="sales-products-left d-flex align-items-center justify-content-center">
              <div>
                <p>Shoping guide for Trending Styles</p>
                <button className="circle-white-button mt-3">
                  <span>Source Now</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-9">
          <div className="">
            <Tabs TableTitle ="CONSUMER ELECTRONICS" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SalesProducts;



