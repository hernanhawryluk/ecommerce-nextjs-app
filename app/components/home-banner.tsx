"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { currentSeason } from "@/utils/current-season";

const HomeBanner = () => {
  const [season, setSeason] = useState("Summer");

  useEffect(() => {
    setSeason(currentSeason());
  }, []);

  return (
    <div className="mt-4 sm:mt-0 relative bg-gradient-to-r from-sky-600 to-sky-800 mb-8">
      <div className="mx-auto px-8 py-12 flex flex-col gap-2 md:flex-row items-center justify-evenly">
        <div className="mb-8 md:mb-0 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            {season} Sale!
          </h1>
          <p className="text-lg md:text-xl text-white mb-2">
            Enjoy discounts on all items
          </p>
          <p className="text-2xl md:text-5xl bg-gradient-to-r text-transparent bg-clip-text from-yellow-500 to-amber-200 font-bold">
            GET 20% off
          </p>
        </div>
        <div className="w-1/3 relative aspect-video">
          <Image
            src="/banner-image.png"
            alt="Banner image"
            quality={95}
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
