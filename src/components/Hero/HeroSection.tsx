// import React from "react";
// import { motion } from "framer-motion";

// type HeroSectionProps = {
//   bgColor?: string;
//   children?: React.ReactNode;
//   zIndex?: number;
//   className?: string;
// };

// export const HeroSection: React.FC<HeroSectionProps> = ({
//   bgColor,
//   children,
//   zIndex,
//   className,
// }) => {
//   return (
//     <motion.div
//       initial={{ y: 0 }}
//       animate={{ y: 0 }}
//       exit={{ y: "-100%" }}
//       transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
//       className={` inset-0 ${bgColor} rounded-b-[40px] ${className}`}
//       style={{ zIndex }}
//     >
//       {children}
//     </motion.div>
//   );
// };
