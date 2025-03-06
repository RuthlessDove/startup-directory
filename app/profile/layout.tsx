import type { Metadata } from "next";
import "../globals.css";
import Navbar from "../components/Navbar";

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
      <Navbar />
      <div className="bg-white h-full px-10 pb-7">{children}</div>
    </div>
  );
}
