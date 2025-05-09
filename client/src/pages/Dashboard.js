// src/pages/Dashboard.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Paper, Typography, Divider, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers'; // Date picker component
import { Bar } from 'react-chartjs-2'; // For the Bar chart
import api from '../services/api'; // Axios instance for API calls
import Sidebar from '../components/Sidebar'; // Custom Sidebar component
import TopNavbar from '../components/Navbar'; // Custom TopNavbar component

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [totalSpent, setTotalSpent] = useState(0);
  const [expenses, setExpenses] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [chartData, setChartData] = useState([]);
  const history = useNavigate();

  // Fetch user data and expenses
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/user/profile'); // Get user profile
        setUserData(response.data);

        // Fetch total spending and expenses
        const expenseResponse = await api.get('/expenses'); // Replace with your expenses endpoint
        setExpenses(expenseResponse.data);

        // Calculate total spent
        const total = expenseResponse.data.reduce((acc, expense) => acc + expense.amount, 0);
        setTotalSpent(total);

        // Prepare chart data (example: expenses by category)
        const categories = expenseResponse.data.reduce((acc, expense) => {
          if (acc[expense.category]) {
            acc[expense.category] += expense.amount;
          } else {
            acc[expense.category] = expense.amount;
          }
          return acc;
        }, {});

        setChartData({
          labels: Object.keys(categories),
          datasets: [
            {
              label: 'Spending by Category',
              data: Object.values(categories),
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
          ],
        });
      } catch (err) {
        history.push('/login'); // Redirect if not authenticated
      }
    };

    fetchData();
  }, [history]);

  return (
    <Grid container spacing={3}>
      <Grid item xs={2}>
        <Sidebar />
      </Grid>

      <Grid item xs={10}>
        <TopNavbar />

        <Paper sx={{ padding: 3 }}>
          <Typography variant="h4" gutterBottom>
            Hello, {userData ? userData.name : 'User'} 👋
          </Typography>

          <Divider sx={{ marginBottom: 2 }} />

          <Grid container spacing={3}>
            {/* Total Spent */}
            <Grid item xs={12} sm={6} md={4}>
              <Paper sx={{ padding: 2, textAlign: 'center' }}>
                <Typography variant="h6" color="textSecondary">
                  💰 Total Spent
                </Typography>
                <Typography variant="h4">₹{totalSpent}</Typography>
              </Paper>
            </Grid>

            {/* Date Range Filter */}
            <Grid item xs={12} sm={6} md={4}>
              <Paper sx={{ padding: 2, textAlign: 'center' }}>
                <Typography variant="h6" color="textSecondary">
                  📅 Date Range Filter
                </Typography>
                <DatePicker
                  label="Select Date"
                  value={selectedDate}
                  onChange={(newValue) => setSelectedDate(newValue)}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Paper>
            </Grid>

            {/* Chart */}
            <Grid item xs={12} sm={6} md={4}>
              <Paper sx={{ padding: 2 }}>
                <Typography variant="h6" color="textSecondary">
                  📊 Chart: Category Split
                </Typography>
                <Bar data={chartData} />
              </Paper>
            </Grid>

            {/* Recent Expenses Table */}
            <Grid item xs={12}>
              <Paper sx={{ padding: 2 }}>
                <Typography variant="h6" color="textSecondary" gutterBottom>
                  📄 Recent Expenses
                </Typography>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr>
                      <th style={{ padding: '8px', border: '1px solid #ddd' }}>Date</th>
                      <th style={{ padding: '8px', border: '1px solid #ddd' }}>Category</th>
                      <th style={{ padding: '8px', border: '1px solid #ddd' }}>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {expenses.slice(0, 5).map((expense) => (
                      <tr key={expense._id}>
                        <td style={{ padding: '8px', border: '1px solid #ddd' }}>{expense.date}</td>
                        <td style={{ padding: '8px', border: '1px solid #ddd' }}>{expense.category}</td>
                        <td style={{ padding: '8px', border: '1px solid #ddd' }}>₹{expense.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Paper>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
