import React from "react";
import { Dropdown } from "reactjs-dropdown-component";
import Select, { components } from "react-select";
import { DropDownArrowIcon } from "../../assets/icons/DropDownArrowIcon";

import "./SelectEx.scss";

const SelectEx = ({ isBorder, ...props }) => {
  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        <DropDownArrowIcon />
      </components.DropdownIndicator>
    );
  };

  return (
    <div>
      {isBorder ? (
        <Select
          components={{ DropdownIndicator }}
          theme={(theme) => ({
            ...theme,
            colors: {
              ...theme.colors,
              primary50: "#eeeeee",
              primary25: "#eeeeee",
              primary: "#19C79D",
            },
          })}
          styles={{
            container: (base) => ({
              ...base,
              border: "solid 1px #19C79D",
              height: "100%",
              borderRadius: "5px",
            }),
            control: (base) => ({
              ...base,
              border: "none",
              height: "100%",
              backgroundColor: "unset",
              borderColor: "unset",
              boxShadow: "unset",
            }),
            indicatorSeparator: (base) => ({ ...base, display: "none" }),
            indicatorsContainer: (base) => ({ ...base, paddingRight: "10px" }),
            valueContainer: (base) => ({ ...base, paddingLeft: "15px" }),
            // option: (base) => ({ ...base, padding: "5px" }),
            // menuList: (base) => ({
            //   ...base,
            //   "@media only screen and (device-width: 1440px)": {
            //     fontSize: "14px",
            //   },
            // }),
          }}
          {...props}
        />
      ) : (
        <Dropdown {...props} />
      )}
    </div>
  );
};

export default SelectEx;
