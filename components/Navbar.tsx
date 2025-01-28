// Dependencies
import Image from "next/image";
import React from "react";

// Assets
import logo from "@/assets/icons/logo.svg";

const Navbar = () => {
  return (
    <nav>
        <div className="flex justify-center">
          <ul className="inline-flex flex-row gap-1 mt-2 mx-auto py-2 px-3 border border-white/15 rounded-full bg backdrop-blur">
            <li className="pl-3 pr-1 my-auto">
              <a href="#Home">
                <Image src={logo} alt="Logo" />
              </a>
            </li>
            <li className="nav-item">
              <a href="#Home">Home</a>
            </li>
            <li className="nav-item ">
              <a href="#Features">Features</a>
            </li>
            <li className="nav-item">
              <a href="/">Directory</a>
            </li>
            <li className="nav-item">
              <a href="#FAQs">FAQ's</a>
            </li>
            <li className="nav-item hidden md:inline-flex">
              <a href="/">Contact</a>
            </li>
            <li className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900 hidden md:inline-flex">
              <a href="/">Join Now</a>
            </li>
          </ul>
        </div>
    </nav>
  );
};

export default Navbar;
