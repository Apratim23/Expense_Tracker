const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    amount: { type: Number, required: true },
    category: { type: String, required: true },
    note: { type: String },
    date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Expense', expenseSchema); 
//This code defines a Mongoose schema for an Expense model. It includes fields for user, amount, category, note, and date. The user field references the User model, and the date field defaults to the current date and time.
// The schema is then exported as a Mongoose model named 'Expense'.