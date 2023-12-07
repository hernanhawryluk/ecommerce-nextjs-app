export const truncateText = (str: string) => {
  if (str.length < 24) return str;

  return str.substring(0, 21) + "...";
};
