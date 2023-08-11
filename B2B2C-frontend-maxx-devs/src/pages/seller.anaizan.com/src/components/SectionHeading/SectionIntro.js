import React from "react";
import SectionIStyle from "./sectionIntro.module.css"

const SectionIntro = ({ beforeSpan, afterSpan, span, sub }) => {
  return (
    <>
      <div className={SectionIStyle.section_intro}>
        <h2 className="title-h2">
          {beforeSpan} <span> {span} </span> {afterSpan}
        </h2>
        <p>{sub}</p>
      </div>
    </>
  );
};

export default SectionIntro;
