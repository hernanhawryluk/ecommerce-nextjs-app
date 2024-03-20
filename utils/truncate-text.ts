export const truncateText = (str: string) => {
  if (str.length < 26) return str;

  return str.substring(0, 23) + "...";
};
