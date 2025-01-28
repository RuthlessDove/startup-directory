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
    <div className="font-body text-white pb-52 bg-[linear-gradient(to_bottom,_#000,_#200D42_14%,#4F21A1_55%,_#7b599e_75%,_#0c0a09_100%)] z-10" id="Home">
      <div className="">
        <Navbar />
        <h1 className="lg:text-9xl md:text-8xl sm:text-5xl text-4xl font-display font-semibold tracking-tight md:leading-[105px] text-center pt-24 relative sm:px-14 md:px-32 px-64 lg:px-[22rem]">
          Showcase 
          your startup 
          idea
        </h1>
        {/* <div className="absolute top-[16.5rem] left-[7.5rem]">
          <Image src={cursor} alt="Computer Cursor" />
        </div>
        <div className="absolute top-[9.5rem] right-[6.5rem]">
          <Image src={message} alt="Purple Message Icon" />
        </div> */}
      </div>

      <div className="flex flex-col items-center justify-center pt-6">
        <p className="text-center px-24 md:px-32 lg:px-96">
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
