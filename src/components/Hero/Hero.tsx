import { useState, useEffect } from "react";
import { HeroSection } from "../Hero/HeroSection";
import { AnimatePresence } from "framer-motion";

export const Hero: React.FC = () => {
  const [activeHero, setActiveHero] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > 300  && activeHero === 0) {
        setActiveHero(1);
      } else if (scrollY <= 300 && activeHero === 1) {
        setActiveHero(0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeHero]);

  return (
    <div className="relative">
      <header className={`fixed top-0 left-0 w-full flex justify-between p-6 z-50 ${activeHero === 0 ? "text-white": "text-black"} ` }>
        <span className="text-white text-2xl font-bold">Abstract</span>
        <button className={`text-white border-2 border-white px-4 py-1 rounded-md ${activeHero === 0 ? "text-white": "text-black"}`} >
          Sign in
        </button>
      </header>

      <AnimatePresence>
        {activeHero === 0 && (
          <HeroSection bgColor="bg-black" zIndex={20}>
            <div className="text-center text-white">
              <h1 className="text-6xl font-bold mb-4">Hero 1</h1>
              <p className="text-xl">Scroll down to see the next hero</p>
            </div>
          </HeroSection>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {activeHero === 1 && (
          <HeroSection bgColor="bg-[#dadbf1]" zIndex={10}>
            <div className="text-center text-black">
              <h1 className="text-6xl font-bold mb-4">Hero 2</h1>
              <p className="text-xl">Keep scrolling for content</p>
            </div>
          </HeroSection>
        )}
      </AnimatePresence>

      <div className="h-[200vh] pt-[100vh]">
        <div className="p-8">Rest of your content goes here...</div>
      </div>
    </div>
  );
};
