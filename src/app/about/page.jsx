import React from 'react';
import Image from 'next/image';
import Button from '@/component/button/Button';
import Hero from '@/component/heros/Hero';
import Carasule from '@/ui/Carasule';
import { FrameAnime } from '@/component/animation/FramerAnime';

const awards = [
  {
    img: '/assets/images/about/awards/a1.png',
  },
  {
    img: '/assets/images/about/awards/a2.png',
  },
  {
    img: '/assets/images/about/awards/a3.png',
  },
  {
    img: '/assets/images/about/awards/a4.png',
  },
  {
    img: '/assets/images/about/awards/a5.png',
  },
];
function page() {
  return (
    <div className="font-outfit">
      <Hero imgfile={'/assets/images/about/be.png'} text={'About Us'} />
      <div className="py-10 px-6 pt-[82px]">
        <div className="mx-auto max-w-[1200px] grid grid-cols-1 md:grid-cols-5 gap-12">
          <div className="overflow-hidden col-span-1 md:col-span-2 rounded-[48px]">
            <FrameAnime variant="rightToLeft">
              <FrameAnime variant="img" className="relative aspect-square">
                <Image
                  src="/assets/images/home/aboutus.jpeg"
                  alt="City Solar About us"
                  fill
                  style={{
                    borderRadius: '48px',
                  }}
                />
              </FrameAnime>
            </FrameAnime>
          </div>
          <div className="col-span-1 md:col-span-3 text-cyan-950 max-w-[680px]">
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
                Founded in 2013, City Solar offers energy solutions in UAE and
                the GCC region, providing comprehensive turnkey solar powered
                solutions from small-scale to large utility scale projects,
                using the most premium, cutting-edge technology.
              </p>
              <p className="text-sm md:text-base font-light my-4">
                City Solar, since its launch in 2013, has achieved impressive
                milestones across UAE with the completion of more than 2000
                solar projects and reaching the 60 MWp Solar Energy mark being
                installed.
              </p>
              <p className="text-sm md:text-base font-light my-4">
                City Solar is devoted to providing turnkey solutions for
                entities of all sizes for commercial, industrial, and
                residential communities and for businesses and governmental
                entities and educational institutions. We excel in developing a
                range of cutting-edge technologies and the most aesthetic to
                satisfy the needs of our partners in sustainability.
              </p>
            </FrameAnime>
          </div>
        </div>
      </div>

      <div className="py-10" id="awards">
        <h2 className="text-center font-outfit text-primary font-semibold text-3xl md:text-5xl">
          Awards
        </h2>

        <div>
          <Carasule data={awards} awards />
        </div>
      </div>

      <div className="px-6">
        <div className="max-w-[1240px] lg:h-[433px] relative rounded-[45px] bg-sky-950 mx-auto mb-[82px] overflow-hidden">
          <div className="flex w-full h-full">
            <div className="lg:w-1/2 h-full px-10 py-7 flex justify-center items-start flex-col">
              <p className="w-full lg:w-[488px] text-white text-[46px] font-semibold font-outfit leading-[54px] pb-[42px]">
                Help your community go greener through our referral program
              </p>
              <Button text={'Contact us'} />
            </div>
            <div className="w-1/2 relative hidden lg:block ">
              <Image
                src="/assets/images/home/img7.png"
                alt="City Solar"
                className="aspect-[170/48]"
                fill
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
