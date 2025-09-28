const exchangeRate = 1500; // Set your exchange rate here

const displayNGNCurrency = (amount) => {
  if (!amount) return "₦0";
  const ngnAmount = parseFloat(amount) * exchangeRate;
  return `₦${ngnAmount.toLocaleString()}`;
};

export default displayNGNCurrency;