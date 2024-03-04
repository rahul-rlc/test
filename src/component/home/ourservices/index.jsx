import React from 'react';
import ServiceCard from './ServiceCard';
import { FrameAnime } from '@/component/animation/FramerAnime';

const Ourservices = () => {
  const data = [
    {
      image: '/assets/images/home/img3.png',
      heading: 'Design & Consultation',
      description:
        'Our experts customize solar solutions to your unique needs.',
    },
    {
      image: '/assets/images/home/img8.png',
      heading: 'Commissioning & Optimisation',
      description:
        'We handle commissioning and ensure continuous optimization for peak performance.',
    },
    {
      image: '/assets/images/home/img10.jpeg',
      heading: 'Ongoing Maintenance',
      description: 'We offer maintenance to optimize your solar investment.',
    },
    {
      image: '/assets/images/home/img5.png',
      heading: 'Supply & Installation',
      description:
        'We supply and install top-quality solar systems for maximum efficiency.',
    },
  ];
  return (
    <div className="px-6  max-w-[1200px] mx-auto" id="services">
      <FrameAnime view={0.2}>
        <div>
          <h2 className="text-primary uppercase text-sm md:text-base font-semibold">
            Our Services
          </h2>
          <p className="text-primary text-lg leading-normal md:text-4xl font-semibold md:leading-[50px] max-w-[987px] mt-3">
            Trust our solar expertise for efficient and reliable solutions,
            whether you&apos;re a homeowner or business owner.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-9 py-10">
          {data.map((item, index) => (
            <ServiceCard data={item} key={index} />
          ))}
        </div>
      </FrameAnime>
    </div>
  );
};

export default Ourservices;
