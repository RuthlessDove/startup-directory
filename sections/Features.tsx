// Dependencies
import React from "react";

// Components
import FeatureBox from "@/components/FeatureBox";

const Features = () => {
  return (
    <div className="text-white container">
      <div className="flex flex-col justify-center md:mx-40 pb-14">
        <h1 className="font-display font-bold text-center text-4xl pt-20 pb-10 tracking-tighter	">
          Everything you need
        </h1>
        <p className="font-body text-m text-center font-normal pb-3 md:px-14">
          Showcase your ideas, engage with your audience, and track feedback
          seamlessly. Share updates, build in public, and watch your startup
          grow with ease.
        </p>
      </div>

      <div className="mb-24">
        <FeatureBox />
      </div>
    </div>
  );
};

export default Features;
