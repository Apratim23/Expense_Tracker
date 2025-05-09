import React, { useState } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { theme } from './theme'; // Import your theme file
import Dashboard from './pages/Dashboard';
import AddExpense from './pages/AddExpense';
import ExpensesList from './pages/ExpenseList';
import Insights from './pages/Insights';
import Settings from './pages/Settings';
import Login from './pages/Login';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={theme(isDarkMode)}>
      <button onClick={toggleTheme} style={{ position: 'absolute', top: 10, right: 10 }}>
        Toggle Theme
      </button>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-expense" element={<AddExpense />} />
          <Route path="/expenses" element={<ExpensesList />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
