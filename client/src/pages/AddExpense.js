// src/pages/AddExpense.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Paper, Typography, MenuItem, Select, FormControl, InputLabel, TextareaAutosize } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers'; // Date picker component
import api from '../services/api'; // Axios instance for API calls

const AddExpense = () => {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState(null);
  const [notes, setNotes] = useState('');
  const [error, setError] = useState(null);
  const history = useNavigate();

  const categories = ['Food', 'Transport', 'Utilities', 'Entertainment', 'Others'];

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate input fields
    if (!amount || !category || !date) {
      setError('Please fill all fields');
      return;
    }

    try {
      const expenseData = { amount, category, date, notes };

      // Send request to add expense to the backend
      await api.post('/expenses', expenseData);

      // Redirect to the dashboard after adding the expense
      history.push('/dashboard');
    } catch (err) {
      setError('Error adding expense. Please try again.');
    }
  };

  return (
    <Paper sx={{ padding: 3, maxWidth: 500, margin: 'auto', marginTop: 5 }}>
      <Typography variant="h5" gutterBottom>
        Add New Expense
      </Typography>

      {error && <Typography color="error">{error}</Typography>}

      <form onSubmit={handleSubmit}>
        <TextField
          label="Amount"
          type="number"
          fullWidth
          margin="normal"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />

        <FormControl fullWidth margin="normal" required>
          <InputLabel>Category</InputLabel>
          <Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            label="Category"
          >
            {categories.map((cat) => (
              <MenuItem key={cat} value={cat}>
                {cat}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <DatePicker
          label="Select Date"
          value={date}
          onChange={(newValue) => setDate(newValue)}
          renderInput={(params) => <TextField {...params} fullWidth margin="normal" required />}
        />

        <TextareaAutosize
          minRows={4}
          placeholder="Notes (Optional)"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          style={{ width: '100%', marginTop: 12, padding: 8 }}
        />

        <Button type="submit" fullWidth variant="contained" sx={{ marginTop: 2 }}>
          Add Expense
        </Button>
      </form>
    </Paper>
  );
};

export default AddExpense;
