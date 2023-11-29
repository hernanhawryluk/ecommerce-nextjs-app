"use client";

import React from "react";
import { CartProductType } from "@/app/product/[productId]/product-details";

interface SetQuantityProps {
  cartCounter?: boolean;
  cartProduct: CartProductType;
  handleQuantityIncrease: () => void;
  handleQuantityDecrease: () => void;
}

const SetQuantity: React.FC<SetQuantityProps> = ({
  cartProduct,
  cartCounter,
  handleQuantityIncrease,
  handleQuantityDecrease,
}) => {
  const buttonStyles =
    "border-[1.2px] border-slate-300 flex items-center justify-center w-7 h-7 rounded transition active:scale-[0.8] hover:bg-slate-50";

  return (
    <div className="flexgap-8 items-center">
      {cartCounter ? null : <div className="font-semibold">QUANTITY:</div>}
      <div className="flex flex-col-reverse sm:flex-row gap-1 sm:gap-4 items-center text-base">
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
