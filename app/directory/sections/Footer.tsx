// Dependencies
import React from "react";

// Components

const Footer = () => {
  return (
    <footer className="relative z-0 overflow-x-clip mt-36 text-black/40 font-body">

      <div className="container"><hr className="opacity-[80%]" /></div>
      <div className="flex flex-col md:flex-row py-4 px-14 container justify-between">
        <div>
          <p className="text-center ">
            &#169; 2024 Launchpad by{" "}
            <a href="https://www.linkedin.com/in/grace-royle-uwumagbe/">
              Grace
            </a>
            . All rights reserved
          </p>
        </div>
        <div className="font-body z-40">
          <a href="https://grace-dev-portfolio.vercel.app/" className="z-40">
            <p className="text-center mb-3">
              Created by Grace Royle Uwumagbe
            </p>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
