// Dependencies
import React from "react";

// Components
import Hero from "./sections/Hero";
import NewStartups from "./sections/NewStartups";
import MoreStartupsCard from "./sections/MoreStartupsCard";
import { HiSpeakerphone } from "react-icons/hi";

const Directory = () => {
  return (
    <div className="relative">
      <Hero />

      <div className="mt-8 flex justify-between items-center">
        <h1 className="font-bol font-medium text-3xl">New Startups</h1>
      </div>

      <NewStartups />

      <div className="flex justify-between items-center mt-8 mb-3">
        <div className="flex items-center gap-2">
          <div className="h-4 w-2 bg-[#4F21A177] border rounded-full"></div>
          <h1 className="font-display font-bold text-2xl">More Startups</h1>
        </div>
        <div>
          <ul className="flex items-center gap-4 ">
            <li className="dropdown">Industry</li>
            <li className="dropdown">Date</li>
          </ul>
        </div>
      </div>

      <div className=" grid md:grid-cols-3 lg:grid-cols-4 gap-8">
        <MoreStartupsCard />
        <MoreStartupsCard />
        <MoreStartupsCard />
        <MoreStartupsCard />
      </div>

      <div className="inline-flex items-center gap-2 mt-9 bg-[#4F21A177] p-3 rounded-full right-0 absolute -translate-x-1/8">
        <HiSpeakerphone />
        <p>Report A Bug</p>
      </div>
    </div>
  );
};

export default Directory;
