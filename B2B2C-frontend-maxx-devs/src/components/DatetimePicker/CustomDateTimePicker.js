import React from "react";
import TextField from "@material-ui/core/TextField";
import AdapterDateFns from "@material-ui/lab/AdapterDateFns";
import LocalizaitonProvider from "@material-ui/lab/LocalizationProvider";
import DatePicker from "@material-ui/lab/DatePicker";
import "./CustomDateTimePicker.scss";
function CustomDateTimePicker({ props }) {
  const [value, setValue] = React.useState(new Date());
  return (
    <div>
      <LocalizaitonProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          // {...props}
          renderInput={({ inputRef, inputProps, InputProps }) => (
            <div className="dataTimePicker-wrapper">
              <input ref={inputRef} {...inputProps} />
              {InputProps?.endAdornment}
            </div>
          )}
        />
      </LocalizaitonProvider>
    </div>
  );
}

export default CustomDateTimePicker;
