// Sections
import Hero from "@/sections/Hero";
import Banner from "@/sections/Banner";
import Features from "@/sections/Features";
import Demo from "@/sections/Demo";
import Faqs from "@/sections/Faqs";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <>
      <div className="bg-stone-950">
        <Banner />
        <Hero />
        <Features />
        <Demo />
        <Faqs />
        <Footer />
      </div>
    </>
  );
}
