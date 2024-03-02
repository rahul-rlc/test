import { FrameAnime } from '@/component/animation/FramerAnime';
import Hero from '@/component/heros/Hero';
import Image from 'next/image';
import React from 'react';

function page() {
  const projects = [
    {
      image: '/assets/projects/tsc.png',
      title: 'The Sustainable City',
      description:
        "A groundbreaking achievement as the first Net Zero Energy city, fully powered by solar. Discover a community that&'s leading the way towards a sustainable future",
    },
    {
      image: '/assets/projects/emirates.jpg',
      title: 'Emirates Airlines',
      description:
        'Our solar initiative with Emirates Airlines showcases a commitment to reducing carbon footprints. Explore how solar energy is transforming the aviation industry.',
    },
    {
      image: '/assets/projects/waitrose.jpg',
      title: 'Waitrose',
      description:
        'By embracing the radiance of the sun, Waitrose is not merely a supermarket but a beacon of sustainable practices. Waitrose is committed to nurturing both your well-being and the planet.',
    },
    {
      image: '/assets/projects/silicon.jpeg',
      title: 'Silicon Park (Dubai Silicon Oasis Authority)',
      description:
        "Silicon Park exemplifies the marriage of technology and sustainability. Dive into a project that's setting the standard for smart, green developments",
    },
    {
      image: '/assets/projects/airport.webp',
      type: 'logo',
      title: 'Dubai Airport Free Zone',
      description:
        'Join us in contributing to the sustainable growth of Dubai&apos;s aviation sector. Our solar solutions at Dubai Airport Free Zone underscore our commitment to innovation.',
    },
    {
      image: '/assets/projects/tadweer.png',
      type: 'logo',
      title: 'Tadweer Waste Treatment L.L.C',
      description:
        'Tadweer Waste Treatment takes a step towards a greener future with our solar solutions, aligning waste treatment practices with sustainable energy initiatives.',
    },
    {
      image: '/assets/projects/dd.png',
      title: 'Diamond Business Center 1&2',
      type: 'logo',
      description:
        "Diamond Business Center is more than just a workspace; it's an exemplar of how sustainable practices can be seamlessly integrated into commercial environments.",
    },
    {
      image: '/assets/projects/diamondviews.jpg',
      title: 'Diamond Views1&2',
      description:
        'The Diamond Views projects showcase our commitment to making residential spaces energy-efficient and environmentally friendly. Explore how solar elevates modern living.',
    },
    {
      image: '/assets/projects/mirdiff.png',
      title: 'Mirdif Villas',
      description:
        'Our solar solutions redefine luxury living. These private villas, scattered across prestigious locations, are a testament to elegance combined with sustainability.',
    },
    {
      image: '/assets/projects/jumeirah.jpg',
      title: 'Jumeirah Villas',
      description:
        'Our solar solutions redefine luxury living. These private villas, scattered across prestigious locations, are a testament to elegance combined with sustainability.',
    },
    {
      image: '/assets/projects/dubaihills.png',
      title: 'Dubai Hills Villas',
      description:
        'Our solar solutions redefine luxury living. These private villas, scattered across prestigious locations, are a testament to elegance combined with sustainability.',
    },
    {
      image: '/assets/projects/mudon.png',
      title: 'Emirates Hills Villas',
      description:
        'Our solar solutions redefine luxury living. These private villas, scattered across prestigious locations, are a testament to elegance combined with sustainability.',
    },
    {
      image: '/assets/projects/alwarqa.png',
      title: 'Al Warqa Private Villas',
      description:
        'Our solar solutions redefine luxury living. These private villas, scattered across prestigious locations, are a testament to elegance combined with sustainability.',
    },
  ];
  return (
    <div className="flex flex-col gap-14 py-16">
      <Hero text={'Projects'} />
      <div className="grid grid-cols-1 gap-10">
        {projects.map((item, index) => (
          <div key={index}>
            <FrameAnime
              variant={index % 2 === 0 ? 'rightToLeft' : 'leftToRight'}
            >
              <div
                className="grid grid-cols-1 md:grid-cols-5 max-w-[1200px] mx-auto gap-6"
                key={index}
              >
                <div
                  className={`bg-[#f5f5f5] h-[335px] w-full overflow-hidden rounded-[45px] relative col-span-3 `}
                >
                  {item.type ? (
                    <Image
                      src={item.image}
                      width={1200}
                      height={600}
                      alt={item.title || ''}
                      style={{
                        width: '80%',
                        height: '100%',
                        objectFit: 'contain',
                        margin: 'auto',
                      }}
                    />
                  ) : (
                    <Image
                      src={item.image}
                      key={index}
                      fill
                      className={`object-cover`}
                      alt={item.title || ''}
                    />
                  )}
                </div>
                <div className="col-span-2 text-white bg-[#003362] rounded-[45px] p-8">
                  <h3 className="text-3xl font-bold ">{item.title}</h3>
                  <p className="text-base font-medium mt-4">
                    {item.description}
                  </p>
                </div>
              </div>
            </FrameAnime>
          </div>
        ))}
      </div>
    </div>
  );
}

export default page;
