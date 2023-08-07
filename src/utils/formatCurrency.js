const formatCurrency = (number) => {
  const formattedCurrency = number?.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  return formattedCurrency;
};

export default formatCurrency;
