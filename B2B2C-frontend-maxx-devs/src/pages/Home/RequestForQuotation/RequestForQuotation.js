import React from "react";

import "./RequestForQuotation.scss";
import rfq from "../../../assets/images/rfq.png"
import el1 from "../../../assets/images/ell14.png"
import el2 from "../../../assets/images/ell15.png"
import el3 from "../../../assets/images/ell16.png"

function RequestForQuotation() {
  return (
    <div className="sectionb6_div3">
      <div className="sectionb6_div3_head">
        <img src={rfq} alt="" />
        <h3> REQUEST FOR QUOTATION </h3>
        <span> Customization Service </span>
        <div></div>
      </div>
      <div className="sectionb6_div3_form">
        <div className="lefts">
          <img src={el1} alt="" />
          <img src={el2} alt="" />
          <img src={el3} alt="" />
          <div>
            <div>
              <h1>
                5 Minutes only <br /> global sales easy
              </h1>
              <button> Source Now </button>
            </div>
          </div>

        </div>
        <div className="right_form">
          <form>
            <h3>
              A safe way to find your verified suppliers quickly!
            </h3>
            <div className="div_f">
              <input type="text" name=""
                id=""
                placeholder="Tell us what you looking for" />
            </div>
            <div className="div_fs">
              <div>
                <input type="text" name=""
                  id=""
                  placeholder="Quantity" />
                <span></span>
              </div>
              <div>
                <input type="text" name=""
                  id=""
                  placeholder="Bag/Bags" />
              </div>
            </div>
            <h3> Select template type </h3>
            <div className="select_temp">
              <div> Request Price </div>
              <div> Request A Sample </div>
              <div> Request Quotation Details </div>
            </div>
            <button> Request for Quotation </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RequestForQuotation;
