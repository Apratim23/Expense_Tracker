// src/pages/Settings.js
import React, { useState } from 'react';
import { Paper, Typography, TextField, Switch, FormControlLabel, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Settings = () => {
  const [profileData, setProfileData] = useState({
    username: 'John Doe',
    email: 'johndoe@example.com',
  });
  const [newPassword, setNewPassword] = useState('');
  const [notificationEnabled, setNotificationEnabled] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout logic (clear cookies, JWT, etc.)
    navigate('/login');
  };

  const handlePasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleThemeChange = () => {
    setDarkMode((prevMode) => !prevMode);
    document.body.classList.toggle('dark-mode', !darkMode); // Toggle dark mode class on body
  };

  return (
    <Paper sx={{ padding: 3, maxWidth: '100%', margin: 'auto', marginTop: 5 }}>
      <Typography variant="h5" gutterBottom>
        Settings
      </Typography>

      {/* Profile Information */}
      <Box sx={{ marginBottom: 3 }}>
        <Typography variant="h6" gutterBottom>
          Profile Information
        </Typography>
        <TextField
          label="Username"
          value={profileData.username}
          onChange={(e) => setProfileData({ ...profileData, username: e.target.value })}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Email"
          value={profileData.email}
          onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
          fullWidth
          margin="normal"
          variant="outlined"
          disabled
        />
      </Box>

      {/* Change Password */}
      <Box sx={{ marginBottom: 3 }}>
        <Typography variant="h6" gutterBottom>
          Change Password
        </Typography>
        <TextField
          label="New Password"
          type="password"
          value={newPassword}
          onChange={handlePasswordChange}
          fullWidth
          margin="normal"
          variant="outlined"
        />
      </Box>

      {/* Notification Preferences */}
      <Box sx={{ marginBottom: 3 }}>
        <Typography variant="h6" gutterBottom>
          Notification Preferences
        </Typography>
        <FormControlLabel
          control={<Switch checked={notificationEnabled} onChange={() => setNotificationEnabled(!notificationEnabled)} />}
          label={notificationEnabled ? 'Notifications Enabled' : 'Notifications Disabled'}
        />
      </Box>

      {/* Theme Selection */}
      <Box sx={{ marginBottom: 3 }}>
        <Typography variant="h6" gutterBottom>
          Theme Selection
        </Typography>
        <FormControlLabel
          control={<Switch checked={darkMode} onChange={handleThemeChange} />}
          label={darkMode ? 'Dark Mode' : 'Light Mode'}
        />
      </Box>

      {/* Logout Button */}
      <Box>
        <Button variant="contained" color="primary" fullWidth onClick={handleLogout}>
          Logout
        </Button>
      </Box>
    </Paper>
  );
};

export default Settings;
