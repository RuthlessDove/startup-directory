// Dependencies
import React from "react";
import Image from "next/image";

// Assets
import { SlArrowDown } from "react-icons/sl";
import logo from "@/assets/icons/logo.svg"

const Navbar = () => {
  return (
      <nav className="flex justify-between items-center font-display">
        <div>
          <ul className="flex gap-8 items-center">
            <li className="mr-1 flex gap-1 items-center font-bold text-lg">
              <Image
                src={logo}
                alt="logo"
                width={30}
                height={30}
                className="fill-black"
              />
              Launchpad
            </li>
            <li className="flex gap-2 items-center">
              Categories{" "}
              <span>
                <SlArrowDown />
              </span>
            </li>
            <li>Community</li>
          </ul>
        </div>
        <div>
          <ul className="flex gap-8 items-center font-medium">
            <li>Login</li>
            <li className="bg-[#4F21A177] p-2 rounded-lg">
              Sign Up
            </li>
          </ul>
        </div>
      </nav>
  );
};

export default Navbar;
