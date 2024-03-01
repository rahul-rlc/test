import Image from 'next/image';
import React from 'react';

const SlideComponent = ({ data }) => {
  return (
    <div className="pt-10 pb-5 md:pb-10" id="mission">
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-[1200px] mx-auto gap-6">
        <div className="py-2 order-2 md:order-1 flex flex-col gap-5 max-w-[547px] justify-center">
          <span className="font-bold text-2xl md:text-[52px] leading-none text-primary">
            {data.heading}
          </span>
          <p
            className=" text-base text-lightgrey font-medium "
            style={{
              lineHeight: '150%',
            }}
          >
            {data.description}
          </p>
        </div>
        <div className="order-1 md:order-2 relative w-full h-full ">
          <Image
            src={data.src}
            width={427}
            height={464}
            alt={data.heading}
            style={{
              objectFit: 'cover',
              display: 'block',
              marginInline: 'auto',
              width: '100%',
              height: 'auto',
              aspectRatio: '1',
              maxWidth: '427px',
              borderRadius: '48px',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SlideComponent;
