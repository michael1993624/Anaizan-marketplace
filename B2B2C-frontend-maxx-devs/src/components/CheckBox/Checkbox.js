import React from "react";
import "./Checkbox.scss";
function Checkbox({ label, ...props }) {
  return (
    <>
      <label className="checkbox-wrapper">
        <input type="checkbox" {...props} />
        <span className="checkbox-mark">{label}</span>
      </label>
    </>
  );
}

export default Checkbox;
