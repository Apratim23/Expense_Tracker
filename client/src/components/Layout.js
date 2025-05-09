import React from 'react';
import { Box, Grid } from '@mui/material';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <Box display="flex">
      <Sidebar />
      <Box component="main" flexGrow={1} p={3}>
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
