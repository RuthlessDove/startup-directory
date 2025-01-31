import type { Metadata } from "next";
import "../globals.css";
import Navbar from "./sections/Navbar";

export const metadata: Metadata = {
  title: "Startup Directory",
  description:
    "Explore a curated list of innovative startups across various industries. Discover emerging businesses, founders, and cutting-edge solutions.",
};

export default function DirectoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="bg-white h-full px-10 py-7">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
