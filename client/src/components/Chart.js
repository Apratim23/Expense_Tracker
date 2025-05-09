import React from "react";
import "./Chart.css";

const ChartBox = ({ title, children }) => {
  return (
    <div className="chart-box">
      <h4>{title}</h4>
      {children}
    </div>
  );
};

export default ChartBox;
