// Dependencies
import React from "react";
import Image from "next/image";

// Assets
import logo from "@/assets/images/Cursor.png";

const NewStartupCard = () => {
  return (
    <div>
      <div className="bg-[#F7F8FA] rounded-2xl">
        <div className="bg-[#F7F8FA] flex justify-between items-center p-4 rounded-xl">
          <div className="flex gap-4 items-center font-display">
            <p>1</p>
            <Image src={logo} alt="company logo" height={40} />
            <h3 className="font-bold text-xl">Company Name</h3>
          </div>
          <div>
            <p>4 People</p>
          </div>
          <div>
            <p>CRM, Customer Service & Sales</p>
          </div>
          <div className="flex gap-2">
            <div className="new-startup-links">h</div>
            <div className="new-startup-links">h</div>
            <div className="new-startup-links">h</div>
            <div className="new-startup-links">h</div>
          </div>
        </div>
        <div className="mx-5">
          <hr className="mb-4 border-[#E3E6EA]" />
          <p className="pb-4 text-[#696F7A]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            facilisis feugiat metus et volutpat. Sed commodo arcu id tellus
            tempor interdum. Aliquam viverra porta lorem. Vivamus a lectus vel
            sapien porta elementum. Fusce ut euismod augue. Aenean accumsan
            risus quis rutrum lobortis. Maecenas faucibus dui in dolor tempus
            maximus. Class aptent taciti sociosqu ad litora torquent per conubia
            nostra, per inceptos himenaeos. Morbi consectetur tortor non diam
            posuere, at accumsan ex laoreet. Donec a purus justo. Vivamus vitae
            vulputate libero. Aliquam aliquam ex a aliquam dictum. Nunc in
            posuere tortor, eu posuere ligula. Curabitur volutpat, urna sed
            tristique ullamcorper, odio sapien lacinia odio, sed condimentum
            risus quam convallis ipsum. Duis eu eros id lorem suscipit faucibus.
            Cras id nisi et arcu fringilla efficitur id vel odio.
          </p>
        </div>
      </div>
      <hr className="my-2" />
    </div>
  );
};

export default NewStartupCard;
