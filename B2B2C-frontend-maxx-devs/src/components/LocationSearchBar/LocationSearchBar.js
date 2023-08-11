import React from "react";
import { MapIcon } from "../../assets/icons/MapIcon";
import "./LocationSearchBar.scss";

const LocationSearchBar = ({ className, ...props }) => {
  return (
    <div className={`location-input-wrapper ${className}`}>
      <MapIcon />
      <input {...props} className={`input-search ${className}`} />
    </div>
  );
};

export default LocationSearchBar;
