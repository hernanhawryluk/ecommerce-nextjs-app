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

const exo = Monoton({ subsets: ["latin"], weight: ["400"] });

interface NavBarPros {
  currentUser: SafeUser | null;
}

const NavBar: React.FC<NavBarPros> = ({ currentUser }) => {
  const [searchBar, setSearchBar] = useState(false);

  return (
    <div className="sticky top-0 w-full bg-slate-200 z-30 shadow-xl">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex items-center justify-between gap-3 md:gap-0">
            <Link
              href="/"
              className={`${exo.className} font-bold text-[1.6rem]`}
            >
              Smart Store
            </Link>

            <div className="flex items-center gap-8 md:gap-12">
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
                    className="text-[1.9rem] pb-[0.1rem] cursor-pointer hidden md:block"
                    onClick={() => setSearchBar(false)}
                  />
                ) : (
                  <CiSearch
                    className="text-[1.9rem] pb-[0.1rem] cursor-pointer hidden md:block"
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
