// Dependencies
import React from "react";
import Image from "next/image";

// Assets
import demo from "@/assets/images/App Night.png";

const Demo = () => {
  return (
    <div className="relative">
      <div
        className="absolute h-full w-full  left-1/2 -translate-x-1/2  -z-30"
        style={{
          background:
            "linear-gradient(to bottom, rgb(12, 10, 9), rgba(93, 44, 171, 0.85), rgb(12, 10, 9))",
        }}
      ></div>
      <div className="text-white container font-body mb-24">
        <div className="flex flex-col justify-center md:mx-40 pb-14">
          <h1 className="font-display font-bold text-center text-4xl pt-20 pb-10 tracking-tighter	">
            Intuitive interface
          </h1>
          <p className="font-body text-m text-center font-normal pb-3 md:px-14">
            Navigate effortlessly with a clean, user-friendly design that puts
            your ideas front and centre. From posting updates to tracking
            progress, every tool is streamlined to make your experience smooth
            and efficient.
          </p>
        </div>
        <div className="flex flex-row justify-center">
          <Image src={demo} alt="Image of the app UI" />
        </div>
      </div>
    </div>
  );
};

export default Demo;
