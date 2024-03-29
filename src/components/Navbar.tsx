"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('');
  const [mobilehai ,setMobilehai] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

 useEffect(()=>{

  if(typeof window !== 'undefined'){
    const active = window.location.pathname;
    console.log(active);
    setActive(active)
    if(window.innerWidth <= 768){
      setMobilehai(true)
    }


  }
 },[])

  return (
    <>
      <nav className="w-full mb-20">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/" passHref className="flex items-center space-x-3 rtl:space-x-reverse">
            
              {/* <img
                src=""
                className="h-8"
                alt="Logo agar lagana h to idhar aayega"
              /> */}
              <span className="self-center font-serif text-3xl font-semibold whitespace-nowrap dark:text-white">
                Abhedya
              </span>
            
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <a href='/sign'>
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
              </a>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded={isOpen ? 'true' : 'false'}
              onClick={toggleNavbar}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
              isOpen ? 'block' : 'hidden'
            }`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse  md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-black-800 md:dark:bg-black dark:border-gray-700">
              <li>
                <a
                  href="/"
                  className={`font-bold text-xl hover:text-gray-300 ${active=='/' ? "dark:text-gray-100":"text-gray-500" }`}
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              
              <li>
                <a
                  href="/board"
                  className={`font-bold text-xl hover:text-gray-300 ${active=='/board' ? "dark:text-gray-100":"text-gray-500" }`}
                >
                  Leaderboard
                </a>
              </li>
              <li>
                <a
                  href="/game"
                  className={`font-bold text-xl hover:text-gray-300 ${active=='/game' ? "dark:text-gray-100":"text-gray-500" }`}
                >
                  Play
                </a>
              </li>
              <li>
                <a
                  href="/rule"
                  className={`font-bold text-xl hover:text-gray-300 ${active=='/game' ? "dark:text-gray-100":"text-gray-500" }`}
                >
                  Rules
                </a>
              </li>
              <li>
                <a
                  href="/sign"
                  className={`font-bold text-xl hover:text-gray-300  ${active=='/sign' ? "dark:text-gray-100":"dark:text-gray-500" } ${mobilehai?'block':'hidden'}`}
                >
                  Signin
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
