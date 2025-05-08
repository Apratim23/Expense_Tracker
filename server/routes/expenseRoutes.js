const express = require('express');
const router = express.Router();
const {
  addExpense,
  getExpenses,
  updateExpense,
  deleteExpense,
} = require('../controllers/expenseController');

const protect = require('../middleware/authMiddleware');

router.use(protect); // protect all routes below

router.post('/', addExpense);              // POST /api/expenses
router.get('/', getExpenses);              // GET /api/expenses
router.put('/:id', updateExpense);         // PUT /api/expenses/:id
router.delete('/:id', deleteExpense);      // DELETE /api/expenses/:id

module.exports = router;
// This code mainly sets up the routes for handling expenses in a Node.js application using Express.
// It imports the necessary modules and defines routes for adding, retrieving, updating, and deleting expenses.
// It uses middleware to ensure that all routes are protected.