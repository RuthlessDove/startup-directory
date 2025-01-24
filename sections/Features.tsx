// Dependencies
import React from "react";

// Components
import FeatureBox from "@/components/FeatureBox";

const Features = () => {
  return (
    <div className="text-white">
      <div className="flex flex-col justify-center mx-80 pb-14">
        <h1 className="font-display font-bold text-center text-4xl pt-20 pb-10 tracking-tighter	">
          Everything you need
        </h1>
        <p className="font-body text-m text-center font-normal pb-3 lg:px-44">
          Showcase your ideas, engage with your audience, and track feedback
          seamlessly. Share updates, build in public, and watch your startup
          grow with ease.
        </p>
      </div>

      <div className="pb-24">
        <FeatureBox />
      </div>
    </div>
  );
};

export default Features;
