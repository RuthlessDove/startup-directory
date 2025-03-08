// Dependencies
import React from "react";
import Image from "next/image";

// Assets
import lavenderBg from "@/assets/images/purple-lines-bg.jpg";
import logo from "@/assets/icons/logo.svg";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div className="grid grid-cols-6 h-screen">
      {/* Left Section (Form) */}
      <div className="col-span-3 mx-auto max-w-md flex flex-col justify-center gap-8 h-full">
        <div className="flex flex-col justify-center items-center gap-2 pt-4">
          <Image src={logo} alt="Logo" className="h-12 w-12" />
          <span className="font-semibold text-4xl text-center font-display ">
            Log in & Share Your Startup Journey
            {/* Your Startup, Your Story – Sign In */}
          </span>
        </div>
        <form className="flex flex-col gap-3 font-semibold">
          <div className="form-input">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              className="form-input-outline"
            />
          </div>
          <div className="form-input">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              className="form-input-outline"
            />
          </div>
          <div className="form-input">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="form-input-outline"
            />
          </div>
          <button
            type="submit"
            className="rounded-full bg-custom-purple py-2 text-white"
          >
            Login
          </button>
        </form>

        <div className="flex items-center gap-4 w-full">
          <hr className="flex-grow border-t border-gray-300" />
          <p className="text-gray-500">Or</p>
          <hr className="flex-grow border-t border-gray-300" />
        </div>

        <div className="form-input-outline flex gap-2 items-center px-5">
          <FcGoogle />
          Sign in with Google
        </div>

        <p className="text-center">
          Don't have an account?{" "}
          <span>
            <a href="/signup" className="text-custom-purple font-semibold">
              Sign up
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

export default Login;
