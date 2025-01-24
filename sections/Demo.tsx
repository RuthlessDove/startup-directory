// Dependencies
import React from "react";
import Image from "next/image";

// Assets
import demo from "@/assets/images/App Night.png";

const Demo = () => {
  return (
    <div className="text-white font-body mb-24">
      <div className="flex flex-col justify-center mx-80 pb-14">
        <h1 className="font-display font-bold text-center text-4xl pt-20 pb-10 tracking-tighter	">
          Intuitive interface
        </h1>
        <p className="font-body text-m text-center font-normal pb-3 lg:px-44">
          Navigate effortlessly with a clean, user-friendly design that puts
          your ideas front and centre. From posting updates to tracking
          progress, every tool is streamlined to make your experience smooth and
          efficient.
        </p>
      </div>
      <div className="flex flex-row justify-center">
      <Image src={demo}  alt="Image of the app UI"/></div>
    </div>
  );
};

export default Demo;
