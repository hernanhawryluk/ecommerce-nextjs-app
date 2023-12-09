"use client";

import { useCallback, useState } from "react";
import Avatar from "../avatar";
import { AiFillCaretDown } from "react-icons/ai";
import Link from "next/link";
import { MenuItem } from "@mui/material";
import { signOut } from "next-auth/react";
import BackDrop from "./back-drop";
import { SafeUser } from "@/types";

interface UserMenuProps {
  currentUser: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <>
      <div className="relative z-30  hover:scale-110 active:scale-100 transition">
        <div
          onClick={toggleOpen}
          className="p-1 border-[2px] border-slate-400 flex flex-row items-center gap-1 rounded-full cursor-pointer hover:shadow-md transition text-slate-100"
        >
          <Avatar src={currentUser?.image} />
          <AiFillCaretDown />
        </div>
        {isOpen && (
          <div className="absolute rounded-md shadow-md w-[170px] bg-white overflow-hidden right-0 top-12 text-sm flex flex-col cursor-pointer">
            {currentUser ? (
              <div>
                {currentUser.role === "ADMIN" ? (
                  <div>
                    <Link href="/orders">
                      <MenuItem onClick={toggleOpen}>Your Orders</MenuItem>
                    </Link>
                    <Link href="/admin">
                      <MenuItem onClick={toggleOpen}>Admin Dashboard</MenuItem>
                    </Link>
                  </div>
                ) : (
                  <div>
                    <Link href="/orders">
                      <MenuItem onClick={toggleOpen}>Your Orders</MenuItem>
                    </Link>
                  </div>
                )}
                <hr />
                <MenuItem
                  onClick={() => {
                    toggleOpen();
                    signOut();
                  }}
                >
                  Logout
                </MenuItem>
              </div>
            ) : (
              <div>
                <Link href="/login">
                  <MenuItem onClick={toggleOpen}>Login</MenuItem>
                </Link>
                <Link href="/register">
                  <MenuItem onClick={toggleOpen}>Register</MenuItem>
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
      {isOpen ? <BackDrop onClick={toggleOpen} /> : null}
    </>
  );
};

export default UserMenu;
