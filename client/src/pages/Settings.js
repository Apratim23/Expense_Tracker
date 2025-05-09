import React from "react";
import { useThemeContext } from "../contexts/ThemeContext"; 

const Settings = () => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <div className="settings-container">
      <h2>Settings</h2>

      <div className="settings-section">
        <h3>Profile Information</h3>
        <p>Username: johndoe</p>
        <p>Email: johndoe@example.com</p>
      </div>

      <div className="settings-section">
        <h3>Change Password</h3>
        <button className="btn">Change Password</button>
      </div>

      <div className="settings-section">
        <h3>Notification Preferences</h3>
        <label>
          <input type="checkbox" defaultChecked /> Email Notifications
        </label>
      </div>

      <div className="settings-section">
        <h3>Theme</h3>
        <button onClick={toggleTheme} className="btn">
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </div>

      <div className="settings-section">
        <button className="logout-btn">Logout</button>
      </div>
    </div>
  );
};

export default Settings;
