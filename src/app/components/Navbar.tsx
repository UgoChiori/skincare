"use client";

import { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [menuIcon, setIcon] = useState(false);

  const handleSmallerScreenNavigation = () => {
    setIcon(!menuIcon);
  };
  return (
    <header className="bg-slate-400 text-[#CEFF00] w-full ease-in duration-300 fixed top-0 left-0 z-10">
      <nav className="max-w-[1366px] mx-auto h-[100px] flex justify-between items-center p-4">
        <div>
          <Link href="/" onClick={handleSmallerScreenNavigation}>
            <span className="font-extrabold text-3xl md:text-2xl xl:text-3xl uppercase italic">
              {" "}
              esmeralda.{" "}
            </span>
          </Link>
        </div>
        {/* Larger screen navigation */}
        <ul className="hidden md:flex uppercase font-semibold text-1xl lg:text-[20px] text-slate-800">
          <li className="mr-4 lg:mr-8 hover:text-[#CEFF00] cursor-pointer">
            <Link href="/">Home</Link>
          </li>
          <li className="mr-4 lg:mr-8 hover:text-[#CEFF00] cursor-pointer">
            <Link href="/about">About</Link>
          </li>
          <li className="mr-4 lg:mr-8 hover:text-[#CEFF00] cursor-pointer">
            <Link href="/contact">Contact</Link>
          </li>
          <li className=" lg:mr-8 hover:text-[#CEFF00] cursor-pointer">
            <Link href="/products">products</Link>
          </li>
        </ul>
        <div className="hidden md:flex">
          <div className="flex">
            <Link href="/login">
              <button className="mr-5 bg-[#CEFF00] text-slate-800 font-bold uppercase text-1xl lg:text-[20px] px-4 py-2 rounded-full hover:bg-slate-800 hover:text-[#CEFF00] ease-in duration-300">
                Login
              </button>
            </Link>
            <Link href="/signup">
              <button className="border-2 border-[#CEFF00] text-white rounded-full uppercase font-bold px-8 py-2">
                Signup
              </button>
            </Link>
          </div>
        </div>

        {/* Smaller screen navigation icons*/}
        {/* onClick change the icon */}
        <div onClick={handleSmallerScreenNavigation} className="flex md:hidden">
          {menuIcon ? (
            <AiOutlineClose size={25} className="text-[#CEFF00]" />
          ) : (
            <AiOutlineMenu size={25} className="text-[#CEFF00]" />
          )}
        </div>

        {/* Smaller screen navigation */}

        <div
          className={
            menuIcon
              ? "md:hidden ease-in duration-300 absolute top-[100px] right-0 left-0 bottom-0 flex justify-center items-center w-full h-screen bg-slate-400 text-white"
              : "md:hidden absolute top-[100px] right-0 left-[-100%] flex justify-center items-center w-full h-screen bg-slate-800 text-white text-center ease-in duration-300"
          }>
          <div className="flex flex-col justify-center items-center">
            <ul className="uppercase font-bold text-2xl">
                <li onClick={handleSmallerScreenNavigation} className="cursor-pointer py-5 hoveer:text-[#CEFF00]">
                    <Link href="/">Home</Link>
                </li>
                <li onClick={handleSmallerScreenNavigation} className="cursor-pointer py-5 hoveer:text-[#CEFF00]">
                    <Link href="/about">About</Link>
                </li>
                <li onClick={handleSmallerScreenNavigation} className="cursor-pointer py-5 hoveer:text-[#CEFF00]">
                    <Link href="/contact">Contact</Link>
                </li>
                <li onClick={handleSmallerScreenNavigation} className="cursor-pointer py-5 hoveer:text-[#CEFF00]">
                    <Link href="/products">Products</Link>
                </li>
                </ul>
            <div className="flex flex-col justify-center items-center mt-16">
               <Link href="/login">
              <button onClick={handleSmallerScreenNavigation} className="mb-4 bg-[#CEFF00] text-slate-800 font-bold uppercase text-1xl lg:text-[20px] px-4 py-2 rounded-full hover:bg-slate-800 hover:text-[#CEFF00] w-[250px] py-3">
                Login
              </button>
               </Link>
               <Link href="/signup">
              <button onClick={handleSmallerScreenNavigation} className="border-2 border-[#CEFF00] text-white rounded-full uppercase font-bold py-2 w-[250px] mb-8">
                Signup
              </button>
                </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
