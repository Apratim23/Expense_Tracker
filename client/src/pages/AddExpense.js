import { TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

import React, { useState, useCallback } from 'react';

const AddExpense = () => {
  const [category, setCategory] = useState('');
  
  const [amount, setAmount] = useState('');
  
  const handleCategoryChange = useCallback((event) => {
    setCategory(event.target.value);
  }, []);
  
  const handleAmountChange = useCallback((event) => {
    setAmount(event.target.value);
  }, []);
  
  const handleAddExpense = useCallback(() => {
    console.log('Expense added:', { category, amount });
  }, [category, amount]);

  return (
    <form>
      <FormControl fullWidth>
        <InputLabel>Category</InputLabel>
        <Select value={category} onChange={handleCategoryChange}>
          <MenuItem value="food">Food</MenuItem>
          <MenuItem value="transport">Transport</MenuItem>
          <MenuItem value="entertainment">Entertainment</MenuItem>
        </Select>
      </FormControl>
      <TextField label="Amount" type="number" fullWidth value={amount} onChange={handleAmountChange} />
      <Button onClick={handleAddExpense}>Add Expense</Button>
    </form>
  );
};

export default AddExpense;
