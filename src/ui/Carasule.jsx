'use client';
import React from 'react';
import Marquee from 'react-marquee-slider';
import Image from 'next/image';

function Carasule({ data, direction, awards }) {
  return (
    <div className="pt-6 md:pt-12">
      <Marquee
        velocity={10} // Adjust scrolling speed as needed
        continuous // Enables infinite loop
        direction={direction}
      >
        {data.map((logo, index) => (
          <div key={index} className="logo-wrapper">
            <Image
              src={logo.img}
              alt={logo.alt || 'Company Logo'} // Provide default alt if missing
              width={148}
              height={548}
              className={`aspect-[170/148] object-contain mx-8 ${
                awards && 'w-[148px] md:w-[250px]'
              }`}
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}

export default Carasule;
