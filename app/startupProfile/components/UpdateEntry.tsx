// Dependencies
import React from "react";
import Image from "next/image";

// Assets
import chat from "@/assets/images/chat.jpg";
import code from "@/assets/images/code-on-laptop.jpg";
import collaboration from "@/assets/images/collaborate.jpg";

const UpdateEntry = () => {
  return (
    <div className="mt-4 mb-4">
      {/* Update entry  */}
      <div className="flex gap-8">
        <div className="flex flex-col items-center">
          <div className="h-2 w-2 bg-gray-200 rounded-full"></div>
          <div className="h-full w-px bg-gray-200 rounded-full -translate-y-px"></div>
        </div>

        <div>
          <div className="flex items-center justify-between mr-8 mb-4">
            <h3 className="font-display font-semibold text-xl">
              Steady Progress & Exciting New Steps
            </h3>
            <p className="font-bold">06/03/2025</p>
          </div>
          <div className="flex gap-2 my-3">
            <Image
              src={chat}
              alt=""
              className="h-16 w-24 rounded-lg object-cover aspect-auto"
            />
            <Image
              src={code}
              alt=""
              className="h-16 w-24 rounded-lg object-cover"
            />
            <Image
              src={collaboration}
              alt=""
              className="h-16 w-24 rounded-lg object-cover"
            />
          </div>
          <div className="pb-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
            suscipit repellendus nemo, maiores dignissimos modi numquam quidem
            temporibus quis quia sint, enim iure voluptates nesciunt est
            explicabo nostrum rerum animi. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quae autem voluptatem esse officia
            enim. Consequatur et sed in autem omnis ab sit quia officiis
            sapiente architecto, illo veritatis accusamus! Distinctio? Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Quod accusamus
            rerum totam ratione eveniet quaerat facilis voluptas voluptatibus.
            Ipsam quidem cumque magnam repellat assumenda et voluptatibus autem
            eos doloremque at! Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Amet nulla eveniet illum magnam dolore libero,
            numquam itaque non impedit tempora accusantium similique recusandae
            officiis aut sit dignissimos vero. Modi, animi?
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateEntry;
