import React from "react";
import "./ExpenseCard.css";

const ExpenseCard = ({ label, value }) => {
  return (
    <div className="expense-card">
      <h4>{label}</h4>
      <p>₹{value}</p>
    </div>
  );
};

export default ExpenseCard;
