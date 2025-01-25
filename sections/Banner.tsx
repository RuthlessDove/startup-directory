import React from "react";

const Banner = () => {
  return (
    <div className="bg-white py-2">
      <div className="flex flex-col md:flex-row md:gap-2 justify-center items-center">
        <p className="font-body text-center text-sm">
          🎯 Ready to turn your idea into a thriving reality?{" "}
        </p>
        <p className="font-semibold ">Start Building Now &#8594;</p>
      </div>
    </div>
  );
};

export default Banner;
