// Dependencies
import React from "react";
import Image from "next/image";

// Assets
import loudspeaker from "@/assets/icons/loudspeaker.svg";
import speech from "@/assets/icons/speech.svg";
import target from "@/assets/icons/target.svg";

const featureDesc = [
  {
    id: 1,
    title: "Build in Public",
    content:
      "Share your journey, from concept to launch, with a platform designed to help you connect, inspire, and grow. Showcase your ideas and let the world follow along.",
    image: loudspeaker,
    alt: "loudspeaker",
  },
  {
    id: 3,
    title: "Gather Feedback",
    content:
      "Engage your audience and receive valuable insights with interactive tools. Collect suggestions, spark conversations, and refine your ideas with real-time input.",
    image: speech,
    alt: "speech",
  },
  {
    id: 3,
    title: "Track Your Progress",
    content:
      "Stay organized and motivated with a clear view of your milestones. Monitor growth, set goals, and celebrate achievements as you move forward.",
    image: target,
    alt: "target",
  },
];

const FeatureBox = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-4 ">
      {featureDesc.map((feature) => {
        return (
          <div
            className="font-body w-72  flex flex-col items-center p-6 bg-[#0D0D0D] border border-white/20 rounded-md"
            key={feature.id}
          >
            
              <div className="bg-white p-2 mb-2 border rounded-md w-max">
                <Image
                  src={feature.image}
                  alt={feature.alt + " icon"}
                  className="h-[18px] w-[18px]"
                />
              </div>
              <div className="text-center">
                <h6 className="font-bold">{feature.title}</h6>
                <p className="text-sm">{feature.content}</p>
              </div>
            </div>
          
        );
      })}
    </div>
  );
};

export default FeatureBox;
