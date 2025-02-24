// Dependencies
import React from "react";
import Image from "next/image";

// Assets
import car from "@/assets/images/car.png";
import profile from "@/assets/images/profilePicture.jpg";
import { CiBookmark } from "react-icons/ci";


const MoreStartupsCard = () => {
  return (
    <div>
      <div className="p-4 shadow-lg inline-flex flex-col rounded-lg ">
        <div>
          <Image src={car} alt="car" className="rounded-lg" />
        </div>
        <div>
          <h4 className="my-3 font-extrabold font-display">Ecofix</h4>
          <p className="line-clamp-3 text-[#3E3232]/75">
            EcoFix is a platform that connects users with certified repair
            professionals to fix household appliances, reducing e-waste and
            promoting sustainability. The app uses AI to diagnose issues
            remotely and schedules repairs with eco-friendly professionals in
            your area.
          </p>
        </div>
        <div className="mt-4 bg-[#F5F5F5] p-2 rounded-lg flex items-center">
          <Image
            src={profile}
            alt="car"
            height={40}
            width={40}
            className="rounded-lg aspect-square grow-1"
          />
          <div className="ml-3">
            <div className="text-sm">
              <p className="font-bold">ayubkhan99477</p>
              <p>August 18 , 2022</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreStartupsCard;
