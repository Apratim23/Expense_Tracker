import React from "react";
import "./ExpenseTable.css";

const ExpenseTable = ({ expenses }) => {
  return (
    <table className="expense-table">
      <thead>
        <tr>
          <th>Date</th>
          <th>Category</th>
          <th>Amount (₹)</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((item, idx) => (
          <tr key={idx}>
            <td>{item.date}</td>
            <td>{item.category}</td>
            <td>{item.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ExpenseTable;
