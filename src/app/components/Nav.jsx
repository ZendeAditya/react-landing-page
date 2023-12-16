"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
const Nav = () => {
  const [open, setOpen] = useState(false);
  const handleNav = () => {
    setOpen(!open);
  };
  return (
    <>
      <nav className="flex items-center justify-between gap-3 p-3 bg-gray-500 text-white overflow-x-hidden w-screen">
        <div>
          <Image
            src="https://images.unsplash.com/photo-1617611413968-537a2ba4986d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmlrZSUyMGxvZ298ZW58MHx8MHx8fDA%3D"
            alt="logo"
            className="rounded-md"
            width={40}
            height={40}
          />
        </div>
        <div>
          <ul
            className={`md:flex md:items-center items-end justify-between md:justify-evenly flex-col md:flex-row gap-4 p-3  absolute md:relative bg-slate-500  md:bg-inherit w-96 top-0 h-96 md:w-10 md:h-10 duration-500 ease-in [&_li]:p-3 [&_li]:itext-center ${
              open ? "hidden" : "block"
            }`}
          >
            <li className="md:hidden">
              {open ? (
                <button onClick={handleNav} className="md:hidden text-xl p-3">
                  <RxHamburgerMenu />
                </button>
              ) : (
                <button onClick={handleNav} className="md:hidden text-xl p-3">
                  <RxCross2 />
                </button>
              )}
            </li>
            <li>
              <Link href="#">Menu</Link>
            </li>
            <li>
              <Link href="#">Location</Link>
            </li>
            <li>
              <Link href="#">About</Link>
            </li>
            <li>
              <Link href="#">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-end">
          <button className="py-2 px-8 rounded-md bg-blue-400 hover:bg-blue-300">
            Log In
          </button>
          {open ? (
            <button onClick={handleNav} className="md:hidden text-xl p-3">
              <RxHamburgerMenu />
            </button>
          ) : (
            <button onClick={handleNav} className="md:hidden text-xl p-3">
              <RxCross2 />
            </button>
          )}
        </div>
      </nav>
    </>
  );
};

export default Nav;
