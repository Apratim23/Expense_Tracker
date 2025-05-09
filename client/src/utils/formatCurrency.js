const formatCurrency = (amount) => {
    // Check if the amount is a number and format accordingly
    if (isNaN(amount)) return "₹0";
  
    // Format number with commas as thousand separator
    return `₹${amount.toLocaleString()}`;
  };
  
  export default formatCurrency;
  