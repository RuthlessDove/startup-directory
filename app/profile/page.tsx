// Dependencies
import React from "react";
import Image from "next/image";

// Components
import Navbar from "@/app/components/Navbar";
import UpdateEntry from "./components/UpdateEntry";

// Assets
import background from "@/assets/images/blue-abstract.jpg";
import profilePic from "@/assets/images/blank-profile-picture.webp";
import arrow from "@/assets/icons/boomerang-arrow.svg";

const Profile = () => {
  return (
    <div className="mt-7 mx-8">
      <div className="relative">
        <Image
          src={background}
          alt="Blue Abstract Background"
          className="rounded-lg h-80 object-cover"
        />
        <Image
          src={profilePic}
          alt="Blank Profile Picture"
          className="rounded-full h-40 w-40 absolute left-8 bottom-0 translate-y-1/2 border-white border-4 shadow-md object-cover "
        />
      </div>
      <div className="ml-56 mt-5 flex justify-between">
        <div>
          <h1 className="font-display text-4xl font-bold mb-2">Startup Name</h1>
          <div className="flex gap-4">
            <div className="profile-tag">tag</div>
            <div className="profile-tag">tag</div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p>October 15, 2024</p>
          <div className="flex gap-2">
            <div className="bg-gray-200 h-5 w-5 rounded-sm"></div>
            <div className="bg-gray-200 h-5 w-5 rounded-sm"></div>
          </div>
        </div>
      </div>

      <div className="bg-gray-200 my-10 px-16 py-8 text-lg rounded-md shadow-md">
        <h2 className="font-display text-2xl font-bold mb-2">
          🛗 Our Elevator Pitch
        </h2>
        <p className="">
          An online platform offering project-based learning for web developers,
          aimed at levelling up junior to mid-level developers by focusing on
          real-world applications.
        </p>
      </div>

      <div>
        <h2 className="font-display font-bold text-3xl">Pitch Breakdown</h2>
        <p className="text-lg mt-2">
          JSM Academy Masterclass revolutionizes developer education by offering
          hands-on, project-based learning for intermediate web developers. It
          bridges the gap between knowledge and practical application, helping
          developers build complex apps, increase their career potential, and
          even launch their own SaaS products. This solves the problem of
          learning platforms that focus too much on theory without enough
          real-world experience.
        </p>
      </div>

      <div className="mt-10">
        <h2 className="font-display font-bold text-3xl mb-4">People</h2>
        <div className="flex gap-8">
          <div className="flex gap-2">
            <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
            <p className="font-display text-xl font-semibold">@jdfof</p>
          </div>

          <div className="flex gap-2">
            <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
            <p className="font-display text-xl font-semibold">@jdfof</p>
          </div>
        </div>
      </div>

      <h2 className="font-display font-bold text-3xl mb-4 mt-10">Updates</h2>

      <UpdateEntry />
      <UpdateEntry />

      <div className="inline-flex gap-2 p-2 items-center bg-gray-200 rounded-lg">
        <Image src={arrow} alt="Arrow pointing down" className="h-5 w-5" />
        <p className="font-semibold">See more</p>
      </div>
    </div>
  );
};

export default Profile;
