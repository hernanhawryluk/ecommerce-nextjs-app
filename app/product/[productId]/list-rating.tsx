import Heading from "@/app/components/heading";
import { Rating } from "@mui/material";
import moment from "moment";
import React from "react";
import Avatar from "@/app/components/avatar";

interface ListRatingProps {
  product: any;
}

const ListRating: React.FC<ListRatingProps> = ({ product }) => {
  if (product.reviews.length === 0) return null;

  return (
    <div className="sm:pl-3">
      <Heading title="Product Review" />
      <div className="text-sm mt-2">
        {product.reviews &&
          product.reviews.map((review: any) => {
            return (
              <div key={review.id}>
                <div className="flex gap-2 items-center">
                  <div>
                    <Avatar src={review.user.image} />
                  </div>
                  <div className="font-semibold">{review?.user.name}</div>
                  <div className="font-light">
                    {moment(review.createdDate).fromNow()}
                  </div>
                </div>
                <div className="mt-2">
                  <Rating value={review.rating} readOnly />
                </div>
                <div className="ml-2">{review.comment}</div>
                <hr className="mt-4 mb-4" />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ListRating;
