import { FrameAnime } from "@/component/animation/FramerAnime";
import Image from "next/image";
import React from "react";

const index = () => {
  return (
    <div className="bg-primary py-10 px-6">
      <div className="mx-auto max-w-[1200px] grid grid-cols-1 md:grid-cols-5 gap-12">
        <div className="overflow-hidden col-span-1 md:col-span-2 rounded-[48px]">
          <FrameAnime variant="rightToLeft">
            <FrameAnime variant="img" className="relative aspect-square">
              <Image
                src="/assets/images/home/aboutus.jpeg"
                alt="City Solar About us"
                fill
                style={{
                  borderRadius: "48px",
                }}
              />
            </FrameAnime>
          </FrameAnime>
        </div>

        <div className="col-span-1 md:col-span-3 text-white max-w-[680px]">
          <FrameAnime variant="leftToRight">
            <div>
              <h2 className="uppercase text-sm md:text-base font-semibold">
                About us
              </h2>
              <span className="font-bold text-3xl md:text-[52px] md:leading-[60px]">
                Powering a <br />
                Sustainable Tomorrow
              </span>
            </div>
            <p className="text-sm md:text-base font-light my-4">
              City Solar is a prominent leader in the solar energy industry.
              Founded in 2013, City Solar offers energy solutions in UAE and the
              GCC region, providing comprehensive turnkey solar powered
              solutions from small-scale to large utility scale projects, using
              the most premium, cutting-edge technology.
            </p>
            <p className="text-sm md:text-base font-light my-4">
              City Solar, since its launch in 2013, has achieved impressive
              milestones across UAE with the completion of more than 2000 solar
              projects and reaching the 60 MWp Solar Energy mark being
              installed.
            </p>
            <p className="text-sm md:text-base font-light my-4">
              City Solar is devoted to providing turnkey solutions for entities
              of all sizes for commercial, industrial, and residential
              communities and for businesses and governmental entities and
              educational institutions. We excel in developing a range of
              cutting-edge technologies and the most aesthetic to satisfy the
              needs of our partners in sustainability.
            </p>
          </FrameAnime>
        </div>
      </div>
    </div>
  );
};

export default index;
