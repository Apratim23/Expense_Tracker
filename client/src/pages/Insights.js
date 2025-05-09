// src/pages/Insights.js
import React, { useState } from 'react';
import { Paper, Typography, Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { LineChart, Line, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'; // Example chart library (recharts)

const Insights = () => {
  const [timeRange, setTimeRange] = useState('weekly'); // Example time range (weekly, monthly, etc.)
  // Removed unused 'categories' variable

  const handleTimeRangeChange = (event) => {
    setTimeRange(event.target.value);
  };

  // Example data for charts
  const spendingData = [
    { date: '2025-05-01', amount: 500 },
    { date: '2025-05-02', amount: 300 },
    { date: '2025-05-03', amount: 700 },
    { date: '2025-05-04', amount: 200 },
  ];

  const categoryData = [
    { name: 'Food', value: 4000 },
    { name: 'Transport', value: 2500 },
    { name: 'Utilities', value: 1000 },
    { name: 'Entertainment', value: 1500 },
    { name: 'Others', value: 500 },
  ];

  return (
    <Paper sx={{ padding: 3, maxWidth: '100%', margin: 'auto', marginTop: 5 }}>
      <Typography variant="h5" gutterBottom>
        Spending Insights
      </Typography>

      {/* Time Range Selector */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
        <FormControl size="small">
          <InputLabel>Time Range</InputLabel>
          <Select
            value={timeRange}
            onChange={handleTimeRangeChange}
            label="Time Range"
            fullWidth
          >
            <MenuItem value="weekly">Weekly</MenuItem>
            <MenuItem value="monthly">Monthly</MenuItem>
            <MenuItem value="yearly">Yearly</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* Line Chart: Spending Over Time */}
      <Box sx={{ marginBottom: 4 }}>
        <Typography variant="h6" gutterBottom>
          Spending Over Time
        </Typography>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={spendingData}>
            <Line type="monotone" dataKey="amount" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </Box>

      {/* Pie Chart: Category Split */}
      <Box>
        <Typography variant="h6" gutterBottom>
          Category Split
        </Typography>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={categoryData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#8884d8">
              {categoryData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF4560'][index % 5]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </Box>
    </Paper>
  );
};

export default Insights;
