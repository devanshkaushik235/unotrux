import { Variants } from "motion/react";

/**
 * Enterprise-grade Easing Curves (Custom cubic-beziers)
 */
export const easings = {
  // Ultra smooth-deceleration for big displays and cards
  smooth: [0.16, 1, 0.3, 1] as [number, number, number, number],
  // Snappy spring-like curve with zero overshoot, great for UI buttons and toggles
  snappy: [0.25, 1, 0.5, 1] as [number, number, number, number],
  // Elegant ease-in-out
  easeInOut: [0.65, 0, 0.35, 1] as [number, number, number, number],
  // Custom organic ease-out
  organic: [0.22, 1, 0.36, 1] as [number, number, number, number],
};

/**
 * Standard Durations
 */
export const durations = {
  fast: 0.2,
  normal: 0.4,
  slow: 0.8,
  page: 0.5,
};

/**
 * Reusable Framer Motion Variants
 */

// Page-level wrapper transition
export const pageVariants: Variants = {
  initial: {
    opacity: 0,
    y: 15,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.page,
      ease: easings.smooth,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    y: -15,
    transition: {
      duration: durations.fast,
      ease: easings.organic,
    },
  },
};

// Generic Fade In (simple opacity trigger)
export const fadeIn = (duration = durations.normal, delay = 0): Variants => ({
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration,
      delay,
      ease: easings.organic,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration,
      ease: easings.organic,
    },
  },
});

// Fade In Up transition
export const fadeInUp = (duration = durations.normal, delay = 0, yOffset = 30): Variants => ({
  initial: {
    opacity: 0,
    y: yOffset,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration,
      delay,
      ease: easings.smooth,
    },
  },
  exit: {
    opacity: 0,
    y: -yOffset,
    transition: {
      duration,
      ease: easings.organic,
    },
  },
});

// Premium Blur Reveal transition
export const blurReveal = (duration = durations.normal, delay = 0, yOffset = 20): Variants => ({
  initial: {
    opacity: 0,
    y: yOffset,
    filter: "blur(10px)",
  },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration,
      delay,
      ease: easings.smooth,
    },
  },
  exit: {
    opacity: 0,
    y: -yOffset,
    filter: "blur(10px)",
    transition: {
      duration,
      ease: easings.organic,
    },
  },
});

// Fade In Down transition
export const fadeInDown = (duration = durations.normal, delay = 0, yOffset = 30): Variants => ({
  initial: {
    opacity: 0,
    y: -yOffset,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration,
      delay,
      ease: easings.smooth,
    },
  },
  exit: {
    opacity: 0,
    y: yOffset,
    transition: {
      duration,
      ease: easings.organic,
    },
  },
});

// Fade In Left transition
export const fadeInLeft = (duration = durations.normal, delay = 0, xOffset = 30): Variants => ({
  initial: {
    opacity: 0,
    x: xOffset,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration,
      delay,
      ease: easings.smooth,
    },
  },
  exit: {
    opacity: 0,
    x: -xOffset,
    transition: {
      duration,
      ease: easings.organic,
    },
  },
});

// Fade In Right transition
export const fadeInRight = (duration = durations.normal, delay = 0, xOffset = 30): Variants => ({
  initial: {
    opacity: 0,
    x: -xOffset,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration,
      delay,
      ease: easings.smooth,
    },
  },
  exit: {
    opacity: 0,
    x: xOffset,
    transition: {
      duration,
      ease: easings.organic,
    },
  },
});

// Scale In transition
export const scaleIn = (duration = durations.normal, delay = 0, initialScale = 0.95): Variants => ({
  initial: {
    opacity: 0,
    scale: initialScale,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration,
      delay,
      ease: easings.smooth,
    },
  },
  exit: {
    opacity: 0,
    scale: initialScale,
    transition: {
      duration,
      ease: easings.organic,
    },
  },
});

// Elegant Stagger animation container
export const staggerContainer = (staggerChildren = 0.15, delayChildren = 0): Variants => ({
  initial: {},
  animate: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
  exit: {},
});

// FAQ Accordion dropdown height transition
export const accordionVariants: Variants = {
  initial: {
    height: 0,
    opacity: 0,
  },
  animate: {
    height: "auto",
    opacity: 1,
    transition: {
      height: {
        duration: 0.4,
        ease: easings.organic,
      },
      opacity: {
        duration: 0.25,
        ease: easings.snappy,
      },
    },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: {
      height: {
        duration: 0.3,
        ease: easings.organic,
      },
      opacity: {
        duration: 0.15,
        ease: easings.snappy,
      },
    },
  },
};

// Hover scaling/shifting physics presets
export const hoverFeedback = {
  scaleUp: {
    hover: {
      scale: 1.02,
      transition: { duration: 0.3, ease: easings.snappy },
    },
    tap: {
      scale: 0.98,
    },
  },
  floatUp: {
    hover: {
      y: -6,
      transition: { duration: 0.3, ease: easings.smooth },
    },
    tap: {
      y: -2,
    },
  },
  slideRight: {
    hover: {
      x: 6,
      transition: { duration: 0.2, ease: easings.snappy },
    },
  },
};
