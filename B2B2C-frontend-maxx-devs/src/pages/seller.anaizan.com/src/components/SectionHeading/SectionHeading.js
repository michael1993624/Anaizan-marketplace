import React from "react";
import SectionHStyle from "./SectionHeading.module.css"

const SectionHeading = ({ heading, sub, span, afterSpan, margin }) => {
  return (
    <>
      <div className={SectionHStyle.section_heading} margin={margin}>
        <h2 className="title-h2">
          {heading} <span> {span} </span> {afterSpan}
        </h2>
        <p>{sub}</p>
      </div>
    </>
  );
};

export default SectionHeading;