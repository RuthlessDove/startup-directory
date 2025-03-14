import type { Metadata } from "next";
import "../globals.css";
import Navbar from "../components/Navbar";

// !!!! Edit the profile metadata to include the startup name

export const metadata: Metadata = {
  title: "Profile Page",
  description:
    "View the profile for startup name. Discover more about the startup, the founders, and the solutions they provide.",
};

export default function DirectoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      <div className="bg-white h-full px-10 py-7">{children}</div>
    </div>
  );
}
