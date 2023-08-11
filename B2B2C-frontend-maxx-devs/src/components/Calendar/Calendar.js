import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function Calendar({ ...props }) {
  return (
    <div>
      <Calendar {...props} />
    </div>
  );
}

export default Calendar;
