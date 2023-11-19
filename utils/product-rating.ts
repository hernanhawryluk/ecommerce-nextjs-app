export const productRating = (reviews: any) => {
  const rating =
    reviews.reduce((acc: number, item: any) => item.rating + acc, 0) /
    reviews.length;

  return rating;
};
