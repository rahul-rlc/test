import { FrameAnime } from "@/component/animation/FramerAnime";
import Button from "@/component/button/Button";
import Image from "next/image";
import React from "react";

const Herosection = () => {
  return (
    <div className="mt-[100px] px-6 pt-9 relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1200px] mx-auto">
        <FrameAnime variant="rightToLeft">
          <div className="flex flex-col gap-6 justify-center items-start order-2 md:order-1 h-full">
            <div>
              <h1 className=" text-[32px] md:text-[58px] text-primary leading-snug font-semibold">
                Empowering <br /> Sustainable Tomorrow
              </h1>

              <p className="text-lightgrey text-sm md:text-xl font-medium leading-snug">
                10 Years of Excellence in Solar Energy Solutions
              </p>
            </div>

            <Button text={"Our Services"} />
          </div>
        </FrameAnime>

        <FrameAnime variant="leftToRight">
          <div className="relative h-full aspect-square order-1 md:order-2 justify-items-center flex justify-center items-center">
            <Image
              src="/assets/images/home/hero2.png"
              height={1200}
              width={1200}
              alt="City Solar"
              className="aspect-square w-full md:w-[75%] rounded-[48px] relative z-10"
            />
            <Image
              src="/assets/images/home/vector.png"
              height={1200}
              width={1200}
              alt="City Solar"
              className="aspect-square w-full absolute z-0 inset-0 hidden md:block"
            />
          </div>
        </FrameAnime>
      </div>
    </div>
  );
};

export default Herosection;
