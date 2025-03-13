"use client";

// Dependencies
import React from "react";
import Image from "next/image";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@heroui/modal";
import { useDisclosure } from "@heroui/modal";
import { Button, ButtonGroup } from "@heroui/button";

// Components
import Navbar from "@/app/components/Navbar";
import UpdateEntry from "./components/UpdateEntry";

// Assets
import background from "@/assets/images/blue-abstract.jpg";
import profilePic from "@/assets/images/blank-profile-picture.webp";
import arrow from "@/assets/icons/boomerang-arrow.svg";
import { FaPlus } from "react-icons/fa";

const startupProfile = () => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [size, setSize] = React.useState<
    "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "full"
  >("4xl");

  interface DisclosureProps {
    isOpen: boolean;
    onOpen: () => void;
    onOpenChange: () => void;
  }

  const handleOpen = (
    size:
      | "xs"
      | "sm"
      | "md"
      | "lg"
      | "xl"
      | "2xl"
      | "3xl"
      | "4xl"
      | "5xl"
      | "full"
  ) => {
    setSize(size);
    onOpen();
  };

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
          <div className="flex gap-4 items-center">
            <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
            <div>
              <p className="font-display text-xl font-semibold">@jdfof</p>
              <p>Founder</p>
            </div>
          </div>

          <div className="flex gap-4 items-center">
            <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
            <div>
              <p className="font-display text-xl font-semibold">@jdfof</p>
              <p>Founder</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mb-4 mt-10">
        <h2 className="font-display font-bold text-3xl ">Updates</h2>
        <div>
          <Button
            onPress={onOpen}
            className=" bg-white border rounded-md p-2 flex gap-2 items-center"
          >
            <FaPlus />
            <p className="font-semibold">Add Update</p>
          </Button>
        </div>
      </div>
      <UpdateEntry />
      <UpdateEntry />
      <div className="inline-flex gap-2 p-2 items-center bg-gray-200 rounded-lg">
        <Image src={arrow} alt="Arrow pointing down" className="h-5 w-5" />
        <p className="font-semibold">See more</p>
      </div>

      <div className="">
        <Modal
          isOpen={isOpen}
          size={size}
          onClose={onClose}
          className="fixed top-0"
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader>Add an Update</ModalHeader>
                <ModalBody>
                  <form className="max-w-3xl mx-auto">
                    {/* Personal Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          First Name
                        </label>
                        <input
                          type="text"
                          className="w-full mt-1 profile-form-input"
                        />
                      </div>

                      <div className="col-span-2">
                        <label className="block text-sm font-medium text-gray-700">
                          About
                        </label>
                        <textarea
                          rows={2}
                          className="w-full mt-1 profile-form-input"
                        ></textarea>
                      </div>
                      <div className="col-span-2">
                        <label className="block text-sm font-medium text-gray-700">
                          About
                        </label>
                        <textarea
                          rows={2}
                          className="w-full mt-1 profile-form-input"
                        ></textarea>
                      </div>
                    </div>

                    {/* Socials */}
                    <div className="border-t-[1px] rounded-full mt-5 mb-3"></div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Socials</h3>
                      <div className="flex space-x-2">
                        {[...Array(3)].map((_, i) => (
                          <div
                            key={i}
                            className="w-8 h-8 bg-gray-200 rounded-md"
                          ></div>
                        ))}
                      </div>
                    </div>

                    <div className="border-t-[1px] rounded-full mt-5 mb-3"></div>

                    {/* Skills */}
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Skills</h3>
                      <input
                        type="text"
                        className="w-1/3 mt-1 profile-form-input mb-2"
                      />

                      <div className="grid grid-cols-4 gap-2">
                        <input
                          type="text"
                          className="col-span-2 profile-form-input border bg-white"
                        />
                        <input
                          type="text"
                          className="profile-form-input border bg-white"
                        />
                        <input
                          type="text"
                          className="profile-form-input border bg-white"
                        />
                      </div>
                    </div>

                    <div className="border-t-[1px] rounded-full mt-5 mb-3"></div>
                    {/* Startup */}
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Startups</h3>
                      <div className="text-sm font-semibold">Code.ai</div>
                      <div className="grid grid-cols-2 gap-4 mt-2">
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Role
                          </label>
                          <input
                            type="text"
                            className="w-full mt-1 profile-form-input"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Company Email
                          </label>
                          <input
                            type="email"
                            className="w-full mt-1 profile-form-input"
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </ModalBody>
                <ModalFooter>
                  <Button
                    color="danger"
                    variant="light"
                    onPress={onClose}
                    className="font-medium"
                  >
                    Discard
                  </Button>
                  <Button
                    color="primary"
                    onPress={onClose}
                    className="bg-custom-purple font-semibold"
                  >
                    Save
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
};

export default startupProfile;
