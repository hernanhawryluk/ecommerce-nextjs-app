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
    <div className="mt-4 sm:mt-0 relative bg-gradient-to-r from-sky-800 to-slate-600 mb-8 rounded-md overflow-hidden h-[250px]">
      <div className="flex flex-col sm:gap-2 md:flex-row items-center justify-evenly">
        <div className="mb-4 sm:mb-1 text-center pt-9">
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
        <div className="w-1/2 sm:w-1/3 top-1 relative aspect-video">
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
