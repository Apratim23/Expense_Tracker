const calculateSpending = (expenses) => {
    let totalSpending = 0;
    let categorySpending = {};
  
    expenses.forEach((expense) => {
      totalSpending += expense.amount;
      if (categorySpending[expense.category]) {
        categorySpending[expense.category] += expense.amount;
      } else {
        categorySpending[expense.category] = expense.amount;
      }
    });
  
    return { totalSpending, categorySpending };
  };
  
  export default calculateSpending;
  