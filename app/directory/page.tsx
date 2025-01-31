// Dependencies
import React from "react";

// Components
import Hero from "./sections/Hero";
import NewStartups from "./sections/NewStartups";

const Directory = () => {
  return (
    <div className=" pb-5">
      <Hero />

      <div className="mt-8 flex justify-between items-center">
        <h1 className="font-bol font-medium text-3xl">New Startups</h1>
        <div>
          <ul className="flex items-center gap-4 mt-4">
            <li className="dropdown">Categories</li>
            <li className="dropdown">Services</li>
            <li className="dropdown">Budget</li>
            <li className="dropdown">Industry</li>
          </ul>
        </div>
      </div>

      <NewStartups />

      <div className="flex items-center gap-2 mt-9">
        <div className="h-4 w-2 bg-[#4F21A177] border rounded-full"></div>
        <h1 className="font-display font-bold text-2xl">More Startups</h1>
      </div>
    </div>
  );
};

export default Directory;
