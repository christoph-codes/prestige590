"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLDivElement>;
  role?: React.AriaRole;
  tabIndex?: number;
  "aria-label"?: string;
}

export default function AnimateOnScroll({
  children,
  className,
  delay = 0,
  direction = "up",
  ...divProps
}: AnimateOnScrollProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const offset = 30;
  const initial = {
    opacity: 0,
    y: direction === "up" ? offset : 0,
    x: direction === "left" ? -offset : direction === "right" ? offset : 0,
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      {...divProps}
      initial={initial}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : initial}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.div>
  );
}
