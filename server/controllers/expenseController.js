const Expense = require('../models/Expense');
const authMiddleware = require('../middleware/authMiddleware');


// @desc    Add new expense
exports.addExpense = async (req, res) => {
  const { amount, category, note, date } = req.body;

  try {
    const expense = new Expense({
      user: req.user, // from middleware
      amount,
      category,
      note,
      date,
    });
    console.log('Expense to be saved:', expense);
    await expense.save(); 
    res.status(201).json({ message: 'Expense added', expense });
  } catch (err) {
    res.status(400).json({ message: 'Add failed', error: err.message });
  }
};

// @desc    Get all expenses for logged-in user
exports.getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find({ user: req.user }).sort({ date: -1 });
    res.status(200).json(expenses);
  } catch (err) {
    res.status(500).json({ message: 'Fetch failed', error: err.message });
  }
};

// @desc    Update expense
exports.updateExpense = async (req, res) => {
  const { id } = req.params;
  const { amount, category, note, date } = req.body;

  try {
    const expense = await Expense.findOneAndUpdate(
      { _id: id, user: req.user },
      { amount, category, note, date },
      { new: true }
    );

    if (!expense) return res.status(404).json({ message: 'Expense not found' });

    res.status(200).json({ message: 'Expense updated', expense });
  } catch (err) {
    res.status(500).json({ message: 'Update failed', error: err.message });
  }
};

// @desc    Delete expense
exports.deleteExpense = async (req, res) => {
  const { id } = req.params;

  try {
    const expense = await Expense.findOneAndDelete({ _id: id, user: req.user });

    if (!expense) return res.status(404).json({ message: 'Expense not found' });

    res.status(200).json({ message: 'Expense deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Delete failed', error: err.message });
  }
};
