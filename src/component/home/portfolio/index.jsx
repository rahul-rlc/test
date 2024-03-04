import { FrameAnime } from "@/component/animation/FramerAnime";
import React from "react";

const index = () => {
  const data = [
    {
      heading: "2,500 +",
      subheading: "Successful Installations",
    },
    {
      heading: "60+ Megawatts",
      subheading: "Clean Energy Generated",
    },
    {
      heading: "15 Awards",
      subheading: "for Environmental Excellence",
    },
  ];
  return <FrameAnime variant="stager" view={0} data={data}></FrameAnime>;
};

export default index;

export const CardItem = ({ data }) => {
  return (
    <div className="rounded-[40px] w-full text-white px-[60px] md:px-[84px] py-[50px] bg-primary flex flex-col justify-center items-center">
      <h2 className=" text-3xl md:text-4xl whitespace-nowrap">
        {data.heading}
      </h2>
      <p className="text-sm">{data.subheading}</p>
    </div>
  );
};
