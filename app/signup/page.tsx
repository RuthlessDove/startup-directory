// Dependencies
import React from "react";
import Image from "next/image";

// Assets
import lavenderBg from "@/assets/images/purple-lines-bg.jpg";
import logo from "@/assets/icons/logo.svg";
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
  return (
    <div className="grid grid-cols-6 h-screen">
      {/* Left Section (Form) */}
      <div className="col-span-3 mx-auto max-w-xl flex flex-col justify-center gap-6 relative mb-14 mt-8">
        <div className="flex flex-col justify-center items-center gap-3 px-14 py-2">
          <Image src={logo} alt="Logo" className="h-12 w-12" />
          <span className="font-semibold text-4xl text-center font-display ">
            Join the Community of Builders & Innovators
            {/* Get Started Now */}
          </span>
        </div>

        <form className="grid grid-cols-2 gap-4 font-semibold max-w-xl mx-auto">
          {/* First Name & Last Name */}
          <div className="form-input">
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              placeholder="Enter your first name"
              className="form-input-outline w-full"
              required
            />
          </div>
          <div className="form-input">
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              placeholder="Enter your last name"
              className="form-input-outline w-full"
              required
            />
          </div>

          {/* Username & Email */}
          <div className="form-input">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              className="form-input-outline w-full"
              required
            />
          </div>
          <div className="form-input">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              className="form-input-outline w-full"
              required
            />
          </div>

          {/* Password & Confirm Password */}
          <div className="form-input">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="form-input-outline w-full"
              required
            />
          </div>
          <div className="form-input">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              placeholder="Re-enter your password"
              className="form-input-outline w-full"
              required
            />
          </div>

          {/* Signup Button */}
          <div className="col-span-2 flex justify-center">
            <button
              type="submit"
              className="rounded-full bg-custom-purple py-2 px-6 text-white"
            >
              Sign Up
            </button>
          </div>
        </form>

        <div className="flex items-center gap-4 w-full -my-2">
          <hr className="flex-grow border-t border-gray-300" />
          <p className="text-gray-500">Or</p>
          <hr className="flex-grow border-t border-gray-300" />
        </div>

        <div className="form-input-outline flex gap-2 items-center px-5 max-w-xl mx-auto font-semibold">
          <FcGoogle size={20} />
          Sign up with Google
        </div>

        <p className="text-center">
          Have an account?{" "}
          <span>
            <a href="/login" className="text-custom-purple font-semibold">
              Log in
            </a>
          </span>
        </p>
      </div>

      {/* Right Section (Image) */}
      <div className="col-span-3 relative h-full overflow-hidden">
        <Image
          src={lavenderBg}
          alt="Lavender Abstract Image"
          layout="fill"
          objectFit="cover"
          className="py-4 rounded-l-[3.5rem]"
        />
      </div>
    </div>
  );
};

export default Signup;
