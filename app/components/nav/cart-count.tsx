"use client";

import { useCart } from "@/context/cart-context";
import { useRouter } from "next/navigation";
import React from "react";
import { IoCartOutline } from "react-icons/io5";

const CartCount = () => {
  const { cartTotalQuantity } = useCart();
  const router = useRouter();

  return (
    <div
      className="relative cursor-pointer hover:scale-110 active:scale-[0.9] transition"
      onClick={() => router.push("/cart")}
    >
      <div className="text-[1.7rem] sm:text-[1.95rem] text-white pb-[0.1rem]">
        <IoCartOutline />
      </div>
      <span
        className={`absolute top-[-4px] right-[-10px] bg-pink-600 text-white font-semibold h-5 w-5 rounded-full flex items-center justify-center text-sm
      ${cartTotalQuantity === 0 ? "hidden" : "block"}
      `}
      >
        {cartTotalQuantity}
      </span>
    </div>
  );
};

export default CartCount;
