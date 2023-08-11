import React from "react";
import "./Input.scss";

function Input({ className, change, type }){
  return (
    <>
      <input onChange={change} type={type} className={`input-wrapper ${className}`} />
    </>
  );
}

export default Input;
