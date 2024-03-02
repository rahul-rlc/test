import React from 'react';
import Image from 'next/image';

function Hero({ imgfile, text }) {
  return (
    <div className="px-6 pt-20 md:pt-32">
      <div className="max-w-[1186px] h-[245px] md:h-[336.78px] relative mx-auto ">
        <Image
          src={imgfile ? imgfile : '/assets/images/about/be.png'}
          alt="City Solar"
          className="aspect-[170/48] rounded-[50px]"
          fill
          style={{
            objectFit: 'cover',
          }}
          sizes="55vw"
        />
        <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white text-4xl md:text-6xl font-semibold font-outfit leading-[76.96px]">
          {text}
        </div>
      </div>
    </div>
  );
}

export default Hero;
