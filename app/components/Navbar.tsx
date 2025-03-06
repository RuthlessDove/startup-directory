// Dependencies
import React from "react";
import Image from "next/image";

// Assets
import { SlArrowDown } from "react-icons/sl";
import logo from "@/assets/icons/logo.svg";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center font-display px-10 pt-7">
      <div>
        <ul className="flex gap-8 items-center font-semibold">
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
          <a href="/directory">
            <li className="flex gap-2 items-center">Explore</li>
          </a>
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
        <ul className="flex gap-5 items-center font-medium">
          <a href="/login">
            <li className="border border-custom-purple py-2 px-4 rounded-lg">
              Login
            </li>
          </a>
          <li className="bg-custom-purple p-2 rounded-lg">Sign Up</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
