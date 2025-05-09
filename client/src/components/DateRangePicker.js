import React from "react";
import "./DateRangePicker.css";

const DateRangePicker = ({ from, to, onChange }) => {
  return (
    <div className="date-range">
      <label>
        From: <input type="date" value={from} onChange={e => onChange("from", e.target.value)} />
      </label>
      <label>
        To: <input type="date" value={to} onChange={e => onChange("to", e.target.value)} />
      </label>
    </div>
  );
};

export default DateRangePicker;
