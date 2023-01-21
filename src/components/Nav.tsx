import React from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { MdOutlineMenuBook } from "react-icons/md";
import Search from "./Search/Search";
import { Link, Outlet } from "react-router-dom";

export const Nav = () => {
  return (
    <>
      <header>
        <div className="w-full shadow relative">
          <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
            <nav className="hidden items-center space-x-1 text-sm font-medium md:flex">
              <a
                href="#"
                className="rounded bg-white px-3 py-2 transition hover:bg-gray-100"
              >
                Home
              </a>
              <a
                href="#"
                className="rounded bg-white px-3 py-2 transition hover:bg-gray-100"
              >
                My Books
              </a>
            </nav>
            <button className="flex appearance-none p-1 text-gray-500 md:hidden text-2xl">
              <HiMenuAlt2 />
            </button>
            <Link
              to={"/"}
              className="flex items-center gap-2 font-medium text-gray-800 text-2xl absolute left-1/2 -translate-x-1/2"
            >
              <MdOutlineMenuBook />
              Book Talk
            </Link>
            <nav className="flex items-center space-x-1 text-sm font-medium text-gray-800">
              <Search />
              <a
                href="#"
                className="hidden rounded bg-white px-3 py-2 transition hover:bg-gray-100 sm:inline"
              >
                Login
              </a>
              <a
                href="#"
                className="rounded hidden sm:inline bg-rose-600 px-3 py-2 text-white transition hover:bg-rose-700"
              >
                Sign Up
              </a>
            </nav>
          </div>
        </div>
      </header>
      {<Outlet/>}
    </>
  );
};
