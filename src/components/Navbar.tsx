"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Navbar() {
  const url = window.location.pathname;
  const [active, setActive] = useState<string | null>(url);
  return (
    <>
      <nav className=" w-100 px-8 md:px-auto">
        <div className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
          <div className="text-indigo-50 text-3xl  md:order-1">Abhedya</div>
          <div className="text-gray-500 order-3 w-full md:w-auto md:order-2">
            <ul className="flex font-bold text-lg justify-between">
              <li
                className={`md:px-4 md:py-2 hover:text-indigo-50  ${active == "/" ? "text-indigo-50" : ""}`}
                onClick={() => {
                  setActive("/");
                }}
              >
                <Link href="/">Home</Link>
              </li>
              <li
                className={`md:px-4 md:py-2 hover:text-indigo-50  ${active == "/board" ? "text-indigo-50" : ""}`}
                onClick={() => {
                  setActive("/board");
                }}
              >
                <Link href="/board">Leaderboard</Link>
              </li>
              <li
                className={`md:px-4 md:py-2 hover:text-indigo-50  ${active == "/game" ? "text-indigo-50" : ""}`}
                onClick={() => {
                  setActive("/game");
                }}
              >
                <Link href="/game">Play</Link>
              </li>
            </ul>
          </div>
          <div className="order-2 md:order-3">
            <button className="shadow-[inset_0_0_0_2px_#616467] px-5 py-2 flex items-center gap-2 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>Login</span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
