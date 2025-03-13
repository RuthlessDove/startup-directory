// Dependencies
import React from "react";
import Image from "next/image";

// Assets
import { HiMagnifyingGlass } from "react-icons/hi2";
import stars from "@/assets/images/stars.svg";

const Hero = () => {
  return (
    <div>
      <div>
        <div className="text-white bg-[#0B0D14] rounded-lg py-20 relative overflow-hidden z-10">
          <h1 className="text-6xl font-medium font-display text-center ">
            Where ideas take flight: <br /> A hub for innovation{" "}
          </h1>
          <div className="flex justify-center z-20">
            <div className="bg-white inline-flex p-2 rounded-3xl mt-12 items-center gap-3 pl-4">
              <HiMagnifyingGlass fill="#000" size={24} />
              <p className="text-[#878E98]">
                Enter product, categories, service name...
              </p>
              <div className="bg-custom-purple py-4 px-8 rounded-2xl inline-flex text-[#0B0D14] font-medium">
                <p>Search</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between absolute bottom-0 translate-y-20 w-full pointer-events-none -z-10">
            <Image src={stars} alt="stars" />
            <Image src={stars} alt="stars" className="scale-x-[-1]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
