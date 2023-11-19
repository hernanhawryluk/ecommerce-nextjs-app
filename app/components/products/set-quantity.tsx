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
  const buttonStyles = "border-[1.2px] border-slate-300 px-2 rounded";

  return (
    <div className="flex gap-8 items-center">
      {cartCounter ? null : <div className="font-semibold">QUANTITY:</div>}
      <div className="flex gap-4 items-center text-base">
        <button onClick={handleQuantityDecrease} className={buttonStyles}>
          -
        </button>
        <div>{cartProduct.quantity}</div>
        <button onClick={handleQuantityIncrease} className={buttonStyles}>
          +
        </button>
      </div>
    </div>
  );
};

export default SetQuantity;
