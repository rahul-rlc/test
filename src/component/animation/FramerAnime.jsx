"use client";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  itemAnim,
  leftToRight,
  rightToLeft,
  stager,
  boxVariant,
  listVariant,
} from "@/lib/animation";
import { useInView } from "react-intersection-observer";
import { CardItem } from "../home/portfolio";

export function FrameAnime({
  variant = "primary",
  className,
  view = 0.3,
  data,
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
    stager: stager,
  };

  if (variant === "stager") {
    return (
      <motion.div
        ref={ref}
        className="px-6 gap-6 grid grid-cols-1 md:grid-cols-3 justify-between max-w-[1200px] mx-auto"
        variants={boxVariant}
        initial="hidden"
        animate={inView && "visible"}
      >
        {data.map((item, index) => (
          <motion.div key={index} variants={listVariant}>
            <CardItem data={item} />
          </motion.div>
        ))}
      </motion.div>
    );
  }
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
