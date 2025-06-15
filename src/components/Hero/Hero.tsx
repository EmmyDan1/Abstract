import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Button from "../ui/Button";
import CollabSection from "../layout/CollabSection";
import img1 from "../../assets/icons/zenefits-ar21.svg";
import img4 from "../../assets/icons/icon2.svg";
import img3 from "../../assets/icons/arcdev-icon4.svg";
import heroImg from "../../assets/Images/heroImg.png";
import Logo from "../../assets/Images/icons8-abstract-48.png";
import ArrowImg from "../../assets/Images/icons8-arrow-48.png";

export const Hero: React.FC = () => {
  const [scrolledPastHero1, setScrolledPastHero1] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero1 = document.getElementById("hero-1");
      if (!hero1) return;

      const hero1Bottom = hero1.offsetTop + hero1.offsetHeight;
      setScrolledPastHero1(window.scrollY > hero1Bottom * 0.7);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* Sticky Header */}
      <header className="w-full flex justify-between items-center p-6 bg-black lg:pl-20">
        <button className="flex items-center gap-2">
          <img
            src={Logo}
            alt="Logo"
            className="w-8 h-8 bg-white rounded-full"
          />
          <h2 className="text-[20px] text-white font-semibold">Abstract</h2>
        </button>

        <button className="px-4 py-1 rounded-md border border-white text-white">
          Sign in
        </button>
      </header>

      <motion.section
        id="hero-1"
        className="h-[150vh] bg-black text-white"
      >
        <div className="container mx-auto px-4 py-36 flex flex-col lg:flex-row items-center relative lg:pl-16">
          <div className="flex-1">
            <h1 className="text-[72px] font-medium mb-10 leading-[70px] font-serif tracking-tight text-center lg:text-left lg:text-[125px] lg:leading-[130px]">
              True version control for Sketch files
            </h1>

            <div className="flex flex-col sm:flex-row items-center gap-4 mb-16 font-normal justify-center md:justify-center lg:justify-start">
              <Button className="bg-[#4c5fd5] px-10 py-3 text-[20px] rounded-md hover:bg-white hover:text-[#4c5fd5]">
                Start Trial
              </Button>
              <Button
                variant="outline"
                className="text-white text-[20px] px-10 py-3 rounded-md border border-gray-300 hover:bg-white hover:text-black"
              >
                Download
              </Button>
            </div>

            <p className="text-xl mb-8 text-center font-inter font-medium lg:text-left">
              1 in 3 Fortune 500 companies use Sketch + Abstract
            </p>

            <div className="flex gap-8 justify-center  flex-wrap lg:justify-start">
              <img src={img3} alt="Company logo" className="h-12" />
              <img src={img4} alt="Company logo" className="h-12" />
              <img src={img1} alt="Company logo" className="h-12" />
            </div>
            <div className="flex flex-col ">
              <div className="hidden lg:flex lg:-translate-y-60 lg:ml-[400px]">
                <img
                  src={ArrowImg}
                  alt="arrow"
                  className="w-12 h-12 scale-x-[-1] mx-auto"
                />
              </div>
              <p className="hidden lg:block text-white text-lg font-neucha w-48  lg:-translate-y-60 lg:ml-[580px]">
                Free your self from files and folders
              </p>
            </div>
          </div>

          <div className="relative w-96 lg:w-1/2 flex justify-end mt-8 lg:mt-0 overflow-hidden">
            <div className="w-[120%] lg:w-[140%]  lg:translate-x-1/4">
              <img
                src={heroImg}
                className="w-full h-full object-cover rounded-b-[60px]"
                alt="Design workflow"
              />
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="hero-2"
        className="h-[200vh] -mt-36  bg-[#dadbf1] text-black relative z-10 rounded-b-[70px] lg:h-[130vh]"
        initial={false}
        animate={{ y: scrolledPastHero1 ? 0 : "100%" }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <CollabSection />
        </div>
      </motion.section>
    </div>
  );
};
