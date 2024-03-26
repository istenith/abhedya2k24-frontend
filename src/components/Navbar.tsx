"use client";
import React, { useState } from "react";
import { useRouter } from 'next/navigation'
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { useUrl } from 'nextjs-current-url';

function Navbar() {
  const { pathname, href } = useUrl() ?? {};
  console.log(pathname, href);
  
  const url = pathname ?? '';

  const [active, setActive] = useState<string | null>(url);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen); 
  };

  return (
    <>
      <nav className="w-100 px-8 md:px-auto">
        <div className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-center flex-wrap md:flex-nowrap">
          <div className="text-indigo-50 text-3xl md:order-1">Abhedya</div>
          <div className="text-gray-500 order-3 w-full md:w-auto md:order-2">
            <ul className={`flex font-bold text-lg justify-between ${mobileMenuOpen ? 'hidden' : 'hidden'} md:flex`}>
              <li
                className={`ml-80 md:px-4 md:py-2 hover:text-indigo-50 ${active === "/" ? "text-indigo-50" : ""}`}
                onClick={() => {
                  setActive("/");
                  setMobileMenuOpen(false);
                }}
              >
                <Link href="/">Home</Link>
              </li>
              <li
                className={`md:px-4 md:py-2 hover:text-indigo-50 ${active === "/board" ? "text-indigo-50" : ""}`}
                onClick={() => {
                  setActive("/board");
                  setMobileMenuOpen(false);
                }}
              >
                <Link href="/board">Leaderboard</Link>
              </li>
              <li
                className={`md:px-4 md:py-2 hover:text-indigo-50 ${active === "/game" ? "text-indigo-50" : ""}`}
                onClick={() => {
                  setActive("/game");
                  setMobileMenuOpen(false);
                }}
              >
                <Link href="/game">Play</Link>
              </li>
            </ul>
          </div>
          
          <div className={`ml-80 order-2 md:order-3 flex flex-row-reverse md:flex-row`}>
            <div className="md:hidden flex flex-row">
              <button
                onClick={toggleMobileMenu}
                className="text-gray-500 hover:text-indigo-50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 12h14a1 1 0 110 2H3a1 1 0 110-2zm0-5h14a1 1 0 110 2H3a1 1 0 110-2zm0-5h14a1 1 0 110 2H3a1 1 0 110-2z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            {mobileMenuOpen && (
              <ul className="h-50 duration-300 absolute right-0 md:right-auto md:left-0 text-white-900 bg-black rounded-lg shadow-lg mt-2 py-1 w-32">
                <li className="text-white-800 hover:bg-gray-50 hover:text-indigo-500 px-4 py-2">
                  <Link href="/">Home</Link>
                </li>
                <li className="text-white-800 hover:bg-indigo-50 hover:text-indigo-500 px-4 py-2">
                  <Link href="/board">Leaderboard</Link>
                </li>
                <li className="text-white-800 hover:bg-indigo-50 hover:text-indigo-500 px-4 py-2">
                  <Link href="/game">Play</Link>
                </li>
                <li className="text-white-800 hover:bg-indigo-50 hover:text-indigo-500 px-4 py-2">
                  <Link href="/sign">SignUp</Link>
                </li>
              </ul>
            )}
          </div>
          <div className="order-2 text-center md:order-3 flex items-center flex-row mt-2">
            <Link href="/sign">
              <button className="w-full hidden md:flex md:items-center shadow-[inset_0_0_0_2px_#616467] px-5 py-2 items-center gap-2 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">
              <span>Signup</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-6 transform scale-x-[-1] "
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
