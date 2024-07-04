import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="flex justify-center mb-48">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 mt-8 fixed z-50 top-0 w-[100%]">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image src="/img/logo.png" width={48} height={48} alt="Logo" />
          <span className="self-center text-[24px] font-semibold whitespace-nowrap dark:text-[#00F0FF] SF tracking-widest">
            <span className="text-[#F5841F]">Bitcoin</span>AI
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none  dark:text-[#00F0FF] "
          aria-controls="navbar-default"
          aria-expanded="false"
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
        <div
          className="hidden w-full md:block md:w-auto nav-bg px-[20px] py-8"
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg cooper  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:border-gray-700">
            <li>
              <Link
                href="/"
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-[#00F0FF] md:p-0 "
              >
                HOME
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                ABOUT
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                HOW TO BUY
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                TOKENOMICS
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                ROADMAP
              </a>
            </li>
            <li>
              <Link
                href="/depictions"
                className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                BitcoinAI ARTS
              </Link>
            </li>
            <li>
              <Link
                href="/chatbot"
                className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                BitcoinAI CHATBOT
              </Link>
            </li>
            <li>
              <Link
                href="/humanoid"
                className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                BitcoinAI Humanoid
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
