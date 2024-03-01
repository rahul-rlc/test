import { FrameAnime } from "@/component/animation/FramerAnime";
import Button from "@/component/button/Button";
import Image from "next/image";
import React from "react";

const index = () => {
  const data = [
    {
      icon: "/assets/images/icons/why.svg",
      heading: "Sustainability",
      description:
        "We’re committed to the environment. Our solar solutions are eco-friendly, helping you reduce your carbon footprint and contribute to a greener planet.",
    },
    {
      icon: "/assets/images/icons/why2.svg",
      heading: "Affordability",
      description:
        "Solar energy shouldn’t be out of reach. We offer competitive pricing and flexible financing options, making it easier for you to switch to renewable energy.",
    },
    {
      icon: "/assets/images/icons/why3.svg",
      heading: "Innovation",
      description:
        "We’re not just following trends; we’re setting them. City Solar is driven by innovation, consistently introducing new solar products and designs to meet your evolving needs.",
    },
  ];
  return (
    <div className="px-6  grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 max-w-[1200px] mx-auto">
      <FrameAnime variant="rightToLeft">
        <div>
          <div>
            <h2 className="uppercase text-sm  font-medium text-primary">
              WHY CITY SOLAR
            </h2>
            <span className="font-bold text-3xl md:text-[46px] md:leading-[48px] text-primary">
              Our innovative spirit drives us to create visionary solar
              solutions
            </span>
            <p className="text-sm md:text-base font-light my-4 text-lightgrey">
              At City Solar, we pride ourselves on being your premier choice for
              solar energy solutions. When you choose us, you’re choosing a
              partner dedicated to your satisfaction and the future of clean,
              sustainable energy.
            </p>
          </div>
          <Button text={"Our Services"} />
        </div>
      </FrameAnime>

      <FrameAnime variant="leftToRight">
        <div className="grid grid-cols-1 gap-6">
          {data.map((item, index) => (
            <div
              className="flex items-center gap-4 md:gap-7 border border-[#939393] rounded-[25px] bg-[#F0F0F0] px-6 py-4"
              key={index}
            >
              <Image src={item.icon} width={50} height={50} alt="" />
              <div>
                <p className="text-primary text-xl font-semibold">
                  {item.heading}
                </p>
                <p className="text-lightgrey text-xs md:text-sm font-normal mt-1 max-w-[400px] ">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </FrameAnime>
    </div>
  );
};

export default index;
