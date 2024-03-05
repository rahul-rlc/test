import { FrameAnime } from '@/component/animation/FramerAnime';
import React from 'react';
import { FaCheck } from 'react-icons/fa6';

const Howwedoit = () => {
  const priceData = [
    {
      kwp: '10',
      price: '7,260',
      bg: false,
    },
    {
      kwp: '15',
      price: '10,890',
      bg: true,
    },
    {
      kwp: '20',
      price: '14,520',
      bg: false,
    },
  ];
  return (
    <div className="px-6 ">
      <FrameAnime>
        <h2 className="text-center text-primary font-semibold text-2xl md:text-[64px] leading-none">
          Solar Energy Savings: Powering <br /> Your Home and Your Wallet
        </h2>

        {/* sub */}

        <div className="flex justify-center pt-10">
          <div className="h-11 justify-center items-start gap-1 md:gap-16 inline-flex">
            <div className="self-stretch justify-start items-center gap-4 flex">
              <FaCheck className="text-primary" />
              <div className="text-lightgrey text-sm md:text-lg font-normal leading-none">
                Installation in <br />
                one Week
              </div>
            </div>
            <div className="self-stretch justify-start items-center gap-4 flex">
              <FaCheck className="text-primary" />
              <div className="text-lightgrey text-sm md:text-lg font-normal leading-none ">
                6-12 Months <br />
                Payment Plan
              </div>
            </div>
            <div className="self-stretch justify-start items-center gap-4 flex">
              <FaCheck className="text-primary" />
              <div className="text-lightgrey text-sm md:text-lg font-normal leading-none ">
                Free <br />
                Initial Inspection
              </div>
            </div>
          </div>
        </div>

        {/* card */}

        <div className="md:flex justify-center pt-10 gap-10">
          <div className="border border-neutral-200 px-10 pt-10 pb-24 flex flex-col justify-center items-center">
            <div className="text-center text-primary text-2xl font-bold ">
              10kWp
            </div>
            <div className=" text-center text-primary text-[42px] font-extrabold ">
              AED7,260
            </div>
            <div className=" text-center text-lightgrey text-sm font-medium mt-10 ">
              Estimated saving
            </div>
            <div className="w-[100px] h-[0px] border border-neutral-200 mt-5"></div>
          </div>

          <div className="border bg-primary border-neutral-200 px-10 pt-10 pb-24 flex flex-col justify-center items-center">
            <div className="text-center text-white text-2xl font-bold ">
              15kWp
            </div>
            <div className=" text-center text-white text-[42px] font-extrabold ">
              AED10,890
            </div>
            <div className=" text-center text-white text-sm font-medium mt-10">
              Estimated saving
            </div>
            <div className="w-[100px] h-[0px] border border-neutral-200 mt-5"></div>
          </div>
          <div className="border  border-neutral-200 px-10 pt-10 pb-24 flex flex-col justify-center items-center">
            <div className="text-center text-primary text-2xl font-bold ">
              20kWp
            </div>
            <div className=" text-center text-primary text-[42px] font-extrabold ">
              AED14,520
            </div>
            <div className=" text-center text-lightgrey text-sm font-medium mt-10">
              Estimated saving
            </div>
            <div className="w-[100px] h-[0px] border border-neutral-200 mt-5"></div>
          </div>
        </div>
      </FrameAnime>
    </div>
  );
};

export default Howwedoit;
