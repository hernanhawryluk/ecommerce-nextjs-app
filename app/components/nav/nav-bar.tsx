"use client";

import Link from "next/link";
import Container from "../container";
import React, { useState } from "react";
import { Monoton } from "next/font/google";
import CartCount from "./cart-count";
import UserMenu from "./user-menu";
import Categories from "./categories";
import SearchBar from "./search-bar";
import { CiSearch } from "react-icons/ci";
import { SafeUser } from "@/types";
import { MdCancel } from "react-icons/md";
import { SiReact } from "react-icons/si";

const exo = Monoton({ subsets: ["latin"], weight: ["400"] });

interface NavBarPros {
  currentUser: SafeUser | null;
}

const NavBar: React.FC<NavBarPros> = ({ currentUser }) => {
  const [searchBar, setSearchBar] = useState(false);

  return (
    <div className="sticky top-0 w-full bg-slate-700 z-30 shadow-xl">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex items-center justify-between sm:px-2 xl:px-0">
            <Link
              href="/"
              className={`${exo.className} flex items-center gap-1 text-white opacity-90 font-normal italic text-[1.3rem] sm:text-[1.6rem] hover:scale-105 active:scale-100 transition`}
            >
              <SiReact />
              Smart Store
            </Link>

            <div className="flex items-center gap-4 md:gap-8 xl:gap-12">
              <div className="flex items-center gap-4">
                <div
                  className={`hidden md:block opacity-0 transition 
                    ${searchBar ? "opacity-100" : "opacity-0"}
                  `}
                >
                  <SearchBar />
                </div>
                {searchBar ? (
                  <MdCancel
                    className="text-[1.9rem] text-white pb-[0.1rem] cursor-pointer hidden md:block hover:scale-110 active:scale-[0.9] transition"
                    onClick={() => setSearchBar(false)}
                  />
                ) : (
                  <CiSearch
                    className="text-[1.9rem] text-white pb-[0.1rem] cursor-pointer hidden md:block hover:scale-110 active:scale-[0.9] transition"
                    onClick={() => setSearchBar(true)}
                  />
                )}
              </div>

              <CartCount />
              <UserMenu currentUser={currentUser} />
            </div>
          </div>
        </Container>
      </div>
      <Categories />
    </div>
  );
};

export default NavBar;
