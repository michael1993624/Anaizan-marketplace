import React from "react";
import "./Button.scss";

const Button = ({ className, children, ...props }) => {
  return (
    <button {...props} className={`button-wrapper ${className}`}>
      {children}
    </button>
  );
};

export default Button;
