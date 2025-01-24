// Dependencies
import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faqs = () => {
  return (
    <div className=" flex flex-col justify-center text-white font-body mb-24">
      <h1 className="text-4xl font-display text-center  font-bold mb-8 tracking-tighter">
        Frequently asked questions
      </h1>
      <div className="mx-56 lg:mx-96">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="font-bold">
              What is this platform, and who is it for?
            </AccordionTrigger>
            <AccordionContent>
              This platform is designed for startup founders, entrepreneurs, and
              innovators who want to showcase their ideas, build in public, and
              connect with a supportive community. Whether you're just starting
              out, refining your concept or already growing your business, it's
              the perfect space to share your journey and get feedback.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="font-bold">
              How does building in public work, and why should I do it?
            </AccordionTrigger>
            <AccordionContent>
              Building in public is about openly sharing your updates,
              milestones, and challenges with your audience. Our platform
              streamlines this process, enabling you to post updates, collect
              feedback, connect with supporters, and even discover potential
              cofounders. By sharing your journey, you build transparency, earn
              trust, and spark early interest in your idea.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="font-bold">
              How do I collect feedback on my ideas?
            </AccordionTrigger>
            <AccordionContent>
              Our interactive tools such as, comment sections, and feedback
              forms, make it easy to gather insights from your audience in real
              time. You can manage and respond to feedback directly from your
              dashboard.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="font-bold">How do I get started?</AccordionTrigger>
            <AccordionContent>
              It's simple—just sign up, create a profile, and start sharing your
              ideas. You will be guided through setup steps to help you showcase
              your startup in no time.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Faqs;
