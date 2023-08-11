import React from "react";
import LastSectionStyle from "./LastSection.module.css"

const LastSection = () => {
  return (
    <>
      <section className={`${LastSectionStyle.grow_style} d-flex`}>
        <h3>Ready to grow your business</h3>
        <div className={LastSectionStyle.cta}>
          <button> Chat with Consultant </button>
          <button> Start Selling </button>
        </div>
      </section>
    </>
  );
};

export default LastSection;