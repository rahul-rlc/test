"use client";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { itemAnim, leftToRight, rightToLeft } from "@/lib/animation";
import { useInView } from "react-intersection-observer";

export function FrameAnime({
  variant = "primary",
  className,
  view = 0.3,
  ...props
}) {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: view,
    triggerOnce: true,
  });

  const variants = {
    primary: "",
    secondary: itemAnim,
    rightToLeft: rightToLeft,
    leftToRight: leftToRight,
  };

  if (variant === "primary") {
    return (
      <motion.div
        ref={ref}
        style={{
          transform: inView ? "none" : "translateY(200px)",
          opacity: inView ? 1 : 0,
          transition: "all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        {...props}
      />
    );
  }

  if (variant === "img") {
    return (
      <motion.div
        ref={ref}
        whileHover={{ scale: 1.1, rotate: 2 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{
          opacity: inView ? 1 : 0,
        }}
        className={className}
        {...props}
      />
    );
  }

  return (
    <motion.div
      ref={ref}
      variants={variants[variant]}
      initial="hidden"
      animate={inView && "show"}
      {...props}
    />
  );
}
