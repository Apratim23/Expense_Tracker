import React from "react";
import "../styles/Navbar.css";
import { useTheme } from "../contexts/ThemeContext";

const Navbar = () => {
  useTheme();

  return (
    <div className="navbar">
      <div className="logo">💸 Expense Tracker</div>
      <div className="user-icon">👤</div>
    </div>
  );
};

export default Navbar;
