// Dependencies
import React from "react";
import Image from "next/image";

// Components
import Navbar from "./../components/Navbar";

// Assets
import headshot from "@/assets/images/headshot.jpg";
import bg from "@/assets/images/blue-abstract-shapes.jpg";

const Profile = () => {
  return (
    <div>
      <Navbar />
      <div className="flex gap-10 mt-8 mb-8">
        <aside
          className="w-[25rem] flex p-3 shadow-[r] ml-10 rounded-lg"
          style={{
            boxShadow: "0px 0px 12.1px 5px rgba(0, 0, 0, 0.06)", // Applying shadow to the profile image
          }}
        >
          <div>
            <div className=" relative">
              <div>
                <Image
                  src={bg}
                  alt="White Abstract Background"
                  className="h-24 w-full rounded-md object-cover"
                />
              </div>
              <div className="absolute bottom-0 transform translate-y-1/2 translate-x-2">
                <Image
                  src={headshot}
                  alt="User Profile"
                  className="h-24 w-24 object-cover rounded-full border-4 border-white shadow-lg"
                />
              </div>
            </div>

            <div className="mt-14 font-display mb-2">
              <h3 className="text-3xl font-semibold">Caitlyn King</h3>
              <p className="opacity-[57%] text-xs font-semibold">
                caitlyking@gmail.com
              </p>
            </div>

            <div className="font-display font-semibold border-[0.5px] border-black/10 inline-flex px-2 rounded-md mb-4">
              <p>Founder @ Banner AI</p>
            </div>

            <div className="flex justify-center gap-4">
              <div>
                <h4 className="font-semibold">Joined</h4>
                <p>4 Mar, 2025</p>
              </div>
              <div className="border-[0.5px] rounded-full border-l-black/10 "></div>
              <div>
                <h4 className="font-semibold">No. Startups</h4>
                <p>4</p>
              </div>
              <div className="border-[0.5px] rounded-full border-l-black/10 "></div>
              <div>
                <h4 className="font-semibold">No. Employees</h4>
                <p>0</p>
              </div>
            </div>

            <div className="border-t-[1px] rounded-full mt-5 mb-3"></div>

            <div>
              <h4 className="font-display font-semibold">About</h4>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore
              </p>
            </div>

            <div className="border-t-[1px] rounded-full my-3"></div>

            <div>
              <h4 className="font-display font-semibold">
                Why did you want to start a startup
              </h4>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore
              </p>
            </div>

            <div className="border-t-[1px] rounded-full my-3"></div>

            <div>
              <h4 className="font-display font-semibold mb-2">
                Skills & Expertise
              </h4>
              <div>
                <div className="border inline-flex rounded-md p-1">
                  <p className="text-sm font-semibold">Frontend Development</p>
                </div>
              </div>
            </div>

            <div className="border-t-[1px] rounded-full my-3"></div>

            <div>
              <h4 className="font-display font-semibold mb-2">Languages</h4>
              <div>
                <div className="border inline-flex rounded-md p-1">
                {/* Add flag here */}
                  <p className="text-sm font-semibold">Spanish</p>
                </div>
              </div>
            </div>
          </div>
        </aside>

        <div>
          <h2 className="font-semibold font-display text-4xl mb-4">
            All Startups
          </h2>
          <div
            className="border  p-2 rounded-xl w-72"
            // style={{
            //   boxShadow: "0px 0px 12.1px 5px rgba(0, 0, 0, 0.06)", // Applying shadow to the profile image
            // }}
          >
            <div className=" border-3 border-white ">
              <div className="h-20 bg-gray-200 rounded-lg"></div>
              <h3 className="font-semibold font-display my-2 text-xl">
                Startup Name
              </h3>
              <div>
                <div className="w-12 bg-gray-100 h-5 rounded-full"></div>
              </div>
              <p className="my-2">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua...
              </p>
            </div>

            <div className="flex justify-between items-center">
              <div className="h-7 w-7 bg-gray-200 rounded-full"></div>
              <div className="rounded-full bg-gray-200 inline-flex font-semibold py-1 px-2">
                <p>See Details</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
