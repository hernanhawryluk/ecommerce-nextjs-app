export const currentSeason = () => {
  const date = new Date();
  const month = date.getMonth() + 1;

  switch (true) {
    case month >= 3 && month <= 5:
      return "Spring";
      break;
    case month >= 6 && month <= 8:
      return "Summer";
      break;
    case month >= 9 && month <= 11:
      return "Autumn";
      break;
    default:
      return "Winter";
  }
};
