export const reverseString = str => {
  const currencySymbol = str.charAt(0);
  const amount = str.slice(1);
  return amount + currencySymbol;
};
