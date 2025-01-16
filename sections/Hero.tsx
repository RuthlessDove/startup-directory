// Dependencies
import React from "react";
import Image from "next/image";

// Components
import Navbar from "@/components/Navbar";

// Assets
import cursor from "@/assets/images/Cursor.png";
import message from "@/assets/images/Message.png";

const Hero = () => {
  return (
    <div className="font-body text-white pb-52 bg-[linear-gradient(to_bottom,_#000,_#200D42_34%,#4F21A1_65%,_#A46EDB_100%)]">
      <div className="relative">
        <Navbar />
        <h1 className="text-9xl font-display font-semibold tracking-tight leading-[105px] text-center pt-24">
          Showcase <br />
          your startup <br />
          idea
        </h1>
        <div className="absolute top-[16.5rem] left-[7.5rem]">
          <Image src={cursor} alt="Computer Cursor" />
        </div>
        <div className="absolute top-[9.5rem] right-[6.5rem]">
          <Image src={message} alt="Purple Message Icon" />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center pt-6">
        <p className="text-center w-[34rem]">
          Transform your vision into reality with a platform built to ignite
          creativity, foster collaboration, and bring ground-breaking ideas to
          life.
        </p>
        <button className="mt-6 bg-white text-black font-medium text-[16px] p-2 border rounded-lg">
          Get started now
        </button>
      </div>
    </div>
  );
};

export default Hero;
