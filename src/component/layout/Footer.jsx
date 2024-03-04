import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../button/Button';
import { FaFacebook, FaLinkedinIn } from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri';

const Footer = () => {
  const links = [
    {
      name: 'About us',
      link: '/about',
    },
    {
      name: 'Projects',
      link: '/projects',
    },
    {
      name: 'Awards',
      link: '/about/#awards',
    },
    {
      name: 'Contact Us',
      link: '/contactus',
    },
  ];
  const service = [
    {
      name: 'Design & Consultation',
      link: '/#services',
    },
    {
      name: 'Supply & Installation',
      link: '/#services',
    },
    {
      name: 'Commissioning & Optimization',
      link: '/#services',
    },
    {
      name: 'Ongoing Maintenance',
      link: '/#services',
    },
  ];
  return (
    <div className="w-full bg-sky-950 px-6 py-14 font-outfit">
      <div className="max-w-[1515px] mx-auto md:flex flex-wrap items-center justify-center">
        <div className="md:w-1/4">
          <div className="flex-col justify-center items-start inline-flex ">
            <div className="h-[50px] justify-start items-center inline-flex">
              <Image
                width={170}
                height={48}
                src="/assets/logo/logowhite.svg"
                alt="City Solar"
                className="aspect-[170/48]"
              />
            </div>
            <div className="self-stretch h-[68.95px] pr-[129.18px] pt-[19px] pb-[14.18px] justify-start items-center inline-flex">
              <div className=" h-[35.77px] text-white text-sm font-medium  leading-[17.28px]">
                Your trusted partner in the world of renewable energy
              </div>
            </div>
            <div className="self-stretch h-20 pr-[200.20px] pt-[5.05px] pb-[44.95px] justify-start items-center inline-flex">
              <div className="self-stretch justify-start items-start gap-[27px] inline-flex">
                <FaFacebook color="white" className="text-3xl" />
                <FaLinkedinIn color="white" className="text-3xl" />
                <RiTwitterXFill color="white" className="text-3xl" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-5">
          <div className="">
            <div className="h-[37.04px]">
              <div className="w-[91.29px] h-[26.50px] text-white text-xl font-semibold  leading-[27.04px]">
                Company
              </div>
            </div>
            {links.map((e, index) => (
              <Link
                href={e.link}
                className="text-white text-sm font-medium  leading-[17.28px] py-2 block"
                key={index}
              >
                {e.name}
              </Link>
            ))}
          </div>

          <div>
            <div className="h-[37.04px]">
              <div className="w-[91.29px] h-[26.50px] text-white text-xl font-semibold  leading-[27.04px]">
                Services
              </div>
            </div>
            {service.map((e, index) => (
              <Link
                href={e.link}
                className="text-white text-sm font-medium  leading-[17.28px] py-2 block"
                key={index}
              >
                {e.name}
              </Link>
            ))}
          </div>

          <div className="w-[180px]">
            <div className="h-[37.04px]">
              <div className="h-[26.50px] text-white text-xl font-semibold  leading-[27.04px]">
                Contact Us
              </div>
            </div>
            <Link
              href={'mailto:info@citysolar.ae'}
              className="text-white text-sm font-medium  leading-[17.28px] py-2 block"
            >
              info@citysolar.ae
            </Link>
            <Link
              href={`tel:+97144305680`}
              className="text-white text-sm font-medium  leading-[17.28px] py-2 block"
            >
              +971 4 430 5680
            </Link>
          </div>

          <div className="h-[198.95px]">
            <div className="md:w-[244.24px] h-[26.50px] text-white text-xl font-semibold  leading-[27.04px]">
              Subscribe for any updates
            </div>
            <div className="mt-4 flex flex-col md:flex-row justify-between gap-2 md:w-[356px]">
              <input
                type="text"
                name=""
                id=""
                placeholder="Your Email"
                className="min-w-[208.52px]  h-[47.50px] text-neutral-400 text-sm font-medium  rounded-[50px] border border-gray-200 pl-3"
              />
              <div className="w-[127px] h-[44px]">
                <button className="rounded-[50px] bg-gradient-to-l from-lime-200 to-lime-500 text-white text-lg font-semibold w-full h-full">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
