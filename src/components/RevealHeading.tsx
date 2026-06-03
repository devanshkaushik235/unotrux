import React from "react";
import { motion, HTMLMotionProps } from "motion/react";

export const RevealHeading = ({ 
  children, 
  className = "",
  as = "h2",
  ...props
}: { 
  children: React.ReactNode; 
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
} & HTMLMotionProps<any>) => {
  const Component = motion[as] as any;
  
  return (
    <Component
      initial={{ opacity: 0, filter: "blur(10px)", y: 15 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
};
