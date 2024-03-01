"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { FrameAnime } from "@/component/animation/FramerAnime";

const ServiceCard = ({ data }) => {
  return (
    <div>
      <div className="overflow-hidden rounded-[48px]">
        <FrameAnime variant="img">
          <Image
            src={data.image}
            alt={data.heading}
            height={400}
            width={600}
            className="rounded-[48px] aspect-square w-full md:aspect-[600/400] md:w-[600px] object-cover "
          />
        </FrameAnime>
      </div>
      <div className="flex flex-col gap-2 mx-5 mt-6">
        <h2 className="text-primary font-semibold text-xl md:text-3xl ">
          {data.heading}
        </h2>
        <p className="text-lightgrey text-base md:text-lg font-medium">
          {data.description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
