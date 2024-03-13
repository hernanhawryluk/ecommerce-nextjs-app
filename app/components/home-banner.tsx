"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { currentSeason } from "@/utils/current-season";
import { Monoton } from "next/font/google";

const exo = Monoton({ subsets: ["latin"], weight: ["400"] });

const HomeBanner = () => {
  const [season, setSeason] = useState("Summer");

  useEffect(() => {
    setSeason(currentSeason());
  }, []);

  return (
    <div className="mt-4 sm:mt-0 relative bg-gradient-to-r from-sky-800 to-slate-600 mb-8 rounded-md overflow-hidden pb-4">
      <div className="flex flex-row sm:gap-2 items-center justify-evenly">
        <div className="mb-2 sm:mb-1 text-center pt-7 sm:pt-9">
          <h1
            className={`${exo.className} text-3xl md:text-[3.2rem] font-bold text-white mb-1 sm:mb-4`}
          >
            {season} Sale!
          </h1>
          <p className="text-lg md:text-xl text-white mb-1 sm:mb-2">
            Enjoy discounts on selected items
          </p>
          <p className="text-2xl md:text-5xl bg-gradient-to-r text-transparent bg-clip-text from-yellow-500 to-amber-200 font-bold">
            GET 20% OFF
          </p>
        </div>
        <div className="w-1/3 2xl:w-1/4 top-2 hidden sm:block relative aspect-video">
          <Image
            src="/banner-image.png"
            alt="Banner image"
            quality={95}
            fill
            className="object-contain absolute"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
