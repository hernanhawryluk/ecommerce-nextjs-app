"use client";

import { truncateText } from "@/utils/truncate-text";
import { formatPrice } from "@/utils/format-price";
import { Rating } from "@mui/material";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import { productRating } from "@/utils/product-rating";
import { IoChevronDown } from "react-icons/io5";
import Status from "../status";
import { MdDone } from "react-icons/md";

interface ProductCardProps {
  data: any;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/product/${data.id}`)}
      className="col-span-1 cursor-pointer border-[1.2px] border-slate-200 bg-slate-50 rounded-md p-2 transition hover:scale-110 active:scale-105 duration-500 active:duration-200 hover:bg-slate-100 text-center text-sm"
    >
      <div className="flex flex-col items-center w-full gap-1">
        <div className="aspect-square overflow-hidden relative w-full mt-2">
          <Image
            src={data.images[0].image}
            alt={data.name}
            fill
            className="w-full h-full object-contain"
          />
        </div>
        <div className="font-medium text-[1.04rem] mt-3 mb-1">
          {truncateText(data.name)}
        </div>
        <div className="flex items-center gap-[1.5px] pb-1">
          <Rating
            value={productRating(data.reviews)}
            readOnly
            size="small"
            precision={0.5}
          />
          <IoChevronDown size={12} className="opacity-60" />
          <div className="opacity-60 font-bold">{data.reviews.length}</div>
        </div>
        {data.list !== data.price && (
          <div className="flex flex-wrap justify-center font-normal text-sm text-slate-400 gap-2 mb-1">
            <span className="line-through">$ {formatPrice(data.list)}</span>
            <Status
              text={
                Math.round(((data.list - data.price) / data.price) * 100) +
                "% OFF"
              }
              icon={MdDone}
              bg="bg-pink-600"
              color="text-white font-medium"
            />
          </div>
        )}
        <div
          className={`flex items-center gap-1 ${
            data.list === data.price && "mt-3"
          }`}
        >
          <div>$</div>
          <div className="font-semibold text-[1.3rem]">
            {formatPrice(data.price)}
          </div>
        </div>
        <div className={`${data.list === data.price && "mt-3"}`}>
          free shipping
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
