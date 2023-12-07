export const productRating = (reviews: any) => {
  const rating: number =
    reviews.reduce((acc: number, item: any) => item.rating + acc, 0) /
    reviews.length;

  return rating;
};
