"use client";

import { useCart } from "@/context/cart-context";
import { useRouter } from "next/navigation";
import React from "react";
import { CiShoppingCart } from "react-icons/ci";

const CartCount = () => {
  const { cartTotalQuantity } = useCart();
  const router = useRouter();

  return (
    <div
      className="relative cursor-pointer hover:scale-110 active:scale-[0.9] transition"
      onClick={() => router.push("/cart")}
    >
      <div className="text-[2rem] pb-[0.1rem]">
        <CiShoppingCart />
      </div>
      <span
        className={`absolute top-[-4px] right-[-10px] bg-slate-600 text-white h-5 w-5 rounded-full flex items-center justify-center text-sm
      ${cartTotalQuantity === 0 ? "hidden" : "block"}
      `}
      >
        {cartTotalQuantity}
      </span>
    </div>
  );
};

export default CartCount;
