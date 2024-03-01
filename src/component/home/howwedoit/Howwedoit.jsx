import React from "react";
import MainComponent from "./MainComponent";
import { FrameAnime } from "@/component/animation/FramerAnime";

const Howwedoit = () => {
  return (
    <div className="px-6 md:py-16">
      <FrameAnime>
        <h2 className="text-center font-outfit text-primary font-semibold text-3xl md:text-5xl">
          How we do it
        </h2>
        <MainComponent />
      </FrameAnime>
    </div>
  );
};

export default Howwedoit;
