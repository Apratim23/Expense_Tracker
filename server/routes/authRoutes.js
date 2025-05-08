const express = require('express');
const router = express.Router();
const {
  register,
  login,
  logout,
  refresh,
} = require('../controllers/authController');

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);
router.get('/refresh', refresh); // optional, for future auto-refresh

module.exports = router;

// This code sets up the authentication routes for a Node.js application using Express. 
// It imports the necessary modules and defines routes for user registration, login, logout, and token refresh. 
// Each route is linked to a corresponding controller function that handles the request and response logic. 
// Finally, the router is exported for use in other parts of the application.
// This modular approach helps keep the code organized and maintainable, allowing for easy updates and changes to the authentication logic without affecting other parts of the application.