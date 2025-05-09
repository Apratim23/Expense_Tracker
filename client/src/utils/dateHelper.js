const formatDate = (date) => {
    // Check if the input is a valid date
    if (!(date instanceof Date) || isNaN(date)) return null;
  
    const options = {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    };
  
    return date.toLocaleDateString("en-IN", options);
  };
  
  const calculateDateRange = (startDate, endDate) => {
    if (!(startDate instanceof Date) || isNaN(startDate) || !(endDate instanceof Date) || isNaN(endDate)) {
      return { error: "Invalid dates provided." };
    }
  
    // Return the range as a string
    return `${formatDate(startDate)} - ${formatDate(endDate)}`;
  };
  
  export { formatDate, calculateDateRange };
  