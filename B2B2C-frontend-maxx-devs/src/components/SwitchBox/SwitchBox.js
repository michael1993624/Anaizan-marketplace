import React from "react";
import "./SwitchBox.scss";

function SwitchBox({ ...props }) {
  return (
    <>
      <label className="toggle-switch">
        <input type="checkbox" {...props} />
        <span className="slider  round"></span>
      </label>
    </>
  );
}

export default SwitchBox;
