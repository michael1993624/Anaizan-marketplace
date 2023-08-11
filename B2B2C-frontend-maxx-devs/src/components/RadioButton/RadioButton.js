import React from "react";
import "./RadioButton.scss";

function RadioButton({ label, ...props }) {
  return (
    <div>
      <label className="radio-wrapper">
        {label}
        <input type="radio" {...props} />
        <span className="checkmark"></span>
      </label>
    </div>
  );
}

export default RadioButton;
