export const formatNumber = (digit: number) => {
  return new Intl.NumberFormat("en-Us").format(digit);
};
