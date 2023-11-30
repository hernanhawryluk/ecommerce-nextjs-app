"use client";

import React from "react";
import { CartProductType } from "@/app/product/[productId]/product-details";

interface SetQuantityProps {
  cartMode?: boolean;
  cartCounter?: boolean;
  cartProduct: CartProductType;
  handleQuantityIncrease: () => void;
  handleQuantityDecrease: () => void;
}

const SetQuantity: React.FC<SetQuantityProps> = ({
  cartMode = false,
  cartProduct,
  cartCounter,
  handleQuantityIncrease,
  handleQuantityDecrease,
}) => {
  const buttonStyles =
    "border-[1.2px] border-slate-300 flex items-center justify-center w-7 h-7 rounded transition active:scale-[0.8] hover:bg-slate-50";

  return (
    <div className="flex gap-8 items-center">
      {cartCounter ? null : <div className="font-semibold">QUANTITY:</div>}
      <div
        className={`flex items-center text-base sm:gap-4
      ${cartMode ? "flex-col-reverse gap-1 sm:flex-row" : "flex-row gap-3"}
      `}
      >
        <button onClick={handleQuantityDecrease} className={buttonStyles}>
          <span className="pb-[2px]">-</span>
        </button>
        <div>{cartProduct.quantity}</div>
        <button onClick={handleQuantityIncrease} className={buttonStyles}>
          <span className="pb-[2px]">+</span>
        </button>
      </div>
    </div>
  );
};

export default SetQuantity;
