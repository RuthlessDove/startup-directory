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
    <div className="container">
      <div className="text-white font-body flex flex-col justify-center mb-24">
        <h1 className="text-4xl font-display text-center font-bold mb-8 tracking-tighter">
          Frequently asked questions
        </h1>
        <div className="md:mx-40">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="py-6">
              <AccordionTrigger className="font-bold hover:text-white/80 text-lg hover:no-underline">
                What is this platform, and who is it for?
              </AccordionTrigger>
              <AccordionContent>
                This platform is designed for startup founders, entrepreneurs,
                and innovators who want to showcase their ideas, build in
                public, and connect with a supportive community. Whether you're
                just starting out, refining your concept or already growing your
                business, it's the perfect space to share your journey and get
                feedback.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="py-4">
              <AccordionTrigger className="font-bold hover:text-white/80 text-lg hover:no-underline">
                How does building in public work, and why should I do it?
              </AccordionTrigger>
              <AccordionContent>
                Building in public is about openly sharing your updates,
                milestones, and challenges with your audience. Our platform
                streamlines this process, enabling you to post updates, collect
                feedback, connect with supporters, and even discover potential
                cofounders. By sharing your journey, you build transparency,
                earn trust, and spark early interest in your idea.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="py-6">
              <AccordionTrigger className="font-bold hover:text-white/80 text-lg hover:no-underline">
                How do I collect feedback on my ideas?
              </AccordionTrigger>
              <AccordionContent>
                Our interactive tools such as, comment sections, and feedback
                forms, make it easy to gather insights from your audience in
                real time. You can manage and respond to feedback directly from
                your dashboard.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="py-6">
              <AccordionTrigger className="font-bold hover:text-white/80 text-lg hover:no-underline">
                How do I get started?
              </AccordionTrigger>
              <AccordionContent>
                It's simple—just sign up, create a profile, and start sharing
                your ideas. You will be guided through setup steps to help you
                showcase your startup in no time.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
