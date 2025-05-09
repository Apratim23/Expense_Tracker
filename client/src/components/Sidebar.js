import React from 'react';
import { Drawer, List, ListItem, ListItemText, Divider } from '@mui/material';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <Drawer variant="permanent" sx={{ width: 240 }}>
      <List>
        <ListItem button component={Link} to="/dashboard">
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/add-expense">
          <ListItemText primary="Add Expense" />
        </ListItem>
        <ListItem button component={Link} to="/expenses">
          <ListItemText primary="Expenses" />
        </ListItem>
        <Divider />
      </List>
    </Drawer>
  );
};

export default Sidebar;
