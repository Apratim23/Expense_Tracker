// src/pages/ExpensesList.js
import React, { useState, useEffect } from 'react';
import { Paper, Typography, TextField, MenuItem, FormControl, InputLabel, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Pagination } from '@mui/material';
import api from '../services/api'; // Axios instance for API calls

const ExpensesList = () => {
  const [expenses, setExpenses] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState('');
  const [dateFilter, setDateFilter] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const categories = ['Food', 'Transport', 'Utilities', 'Entertainment', 'Others'];

  const fetchExpenses = React.useCallback(async () => {
    try {
      const response = await api.get('/expenses', {
        params: {
          category: categoryFilter,
          date: dateFilter,
          search: searchQuery,
          page,}
        });
      setExpenses(response.data.expenses);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error("Error fetching expenses:", error);
    }
  }, [categoryFilter, dateFilter, searchQuery, page]);

  useEffect(() => {
    fetchExpenses();
  }, [fetchExpenses]);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <Paper sx={{ padding: 3, maxWidth: '100%', margin: 'auto', marginTop: 5 }}>
      <Typography variant="h5" gutterBottom>
        Expenses List
      </Typography>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
        <div>
          <FormControl sx={{ marginRight: 2 }} size="small">
            <InputLabel>Category</InputLabel>
            <Select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              label="Category"
            >
              <MenuItem value="">All</MenuItem>
              {categories.map((category) => (
                <MenuItem key={category} value={category}>{category}</MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField
            label="Date"
            type="date"
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value)}
            InputLabelProps={{ shrink: true }}
            size="small"
          />
        </div>

        <TextField
          label="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search expenses"
          variant="outlined"
          size="small"
        />
      </div>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Notes</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {expenses.map((expense) => (
              <TableRow key={expense._id}>
                <TableCell>{new Date(expense.date).toLocaleDateString()}</TableCell>
                <TableCell>{expense.category}</TableCell>
                <TableCell>₹{expense.amount}</TableCell>
                <TableCell>{expense.notes || 'N/A'}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Pagination
        count={totalPages}
        page={page}
        onChange={handlePageChange}
        sx={{ marginTop: 2, display: 'flex', justifyContent: 'center' }}
      />
    </Paper>
  );
};

export default ExpensesList;
