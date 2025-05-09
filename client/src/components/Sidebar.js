import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <NavLink to="/" className="sidebar-link">🏠 Dashboard</NavLink>
      <NavLink to="/expenses" className="sidebar-link">💸 Expenses</NavLink>
      <NavLink to="/add" className="sidebar-link">➕ Add Expense</NavLink>
      <NavLink to="/insights" className="sidebar-link">📊 Insights</NavLink>
      <NavLink to="/settings" className="sidebar-link">⚙️ Settings</NavLink>
      <NavLink to="/login" className="sidebar-link">🔐 Logout</NavLink>
    </div>
  );
};

export default Sidebar;
