import React from "react";
import { motion } from "motion/react";

interface TickerProps {
  items: React.ReactNode[];
  speed?: number;
  direction?: "left" | "right";
  showMask?: boolean;
}

export const Ticker = ({ items, speed = 20, direction = "left", showMask = false }: TickerProps) => {
  // Triple the items to ensure continuous coverage
  const displayItems = [...items, ...items, ...items];
  
  return (
    <div 
      className="flex overflow-hidden group select-none py-4"
      style={showMask ? {
        maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
      } : {}}
    >
      <motion.div
        animate={{
          x: direction === "left" ? ["0%", "-33.33%"] : ["-33.33%", "0%"],
        }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
        className="flex whitespace-nowrap gap-12 items-center min-w-max pr-12"
      >
        {displayItems.map((item, index) => (
          <div key={index} className="flex-shrink-0">
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
};
