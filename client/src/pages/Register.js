// src/pages/Register.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { TextField, Button, Paper, Typography } from '@mui/material';
import api from '../services/api'; // Axios instance for API calls

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send registration request to backend
      const response = await api.post('/auth/register', { email, password });
      
      // Store the JWT token in localStorage
      localStorage.setItem('authToken', response.data.token);

      // Redirect to the dashboard
      history.push('/dashboard');
    } catch (err) {
      setError('Error creating account. Please try again.');
    }
  };

  return (
    <Paper sx={{ padding: 3, maxWidth: 400, margin: 'auto', marginTop: 5 }}>
      <Typography variant="h5" gutterBottom>
        Register
      </Typography>

      {error && <Typography color="error">{error}</Typography>}

      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          type="email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit" fullWidth variant="contained" sx={{ marginTop: 2 }}>
          Register
        </Button>
      </form>
    </Paper>
  );
};

export default Register;
