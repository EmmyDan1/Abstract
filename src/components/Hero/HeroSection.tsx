import React from "react";
import { motion } from "framer-motion";

type HeroSectionProps = {
  bgColor?: string;
  children?: React.ReactNode;
  zIndex?: number;
};

export const HeroSection: React.FC<HeroSectionProps> = ({
  bgColor,
  children,
  zIndex,
}) => {
  return (
    <motion.div
      className={`fixed inset-0 flex items-center justify-center ${bgColor} rounded-b-[40px] overflow-hidden`}
      style={{
        zIndex,
        height: "50vh",
        width: "100vw",
      }}
      initial={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
};
