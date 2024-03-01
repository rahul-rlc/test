import Carasule from '@/ui/Carasule';
import React from 'react';

const logos1 = [
  {
    img: '/assets/logos/1/bayader.png',
  },
  {
    img: '/assets/logos/1/diamond-1.png',
  },
  {
    img: '/assets/logos/1/emirates.png',
  },
  {
    img: '/assets/logos/1/enoc-2.png',
  },
  {
    img: '/assets/logos/1/expo-2020-dubai.png',
  },
  {
    img: '/assets/logos/1/gov.png',
  },
  {
    img: '/assets/logos/1/wtc.png',
  },
];
const logos2 = [
  {
    img: '/assets/logos/2/mcc-1.png',
  },
  {
    img: '/assets/logos/2/nexus.png',
  },
  {
    img: '/assets/logos/2/parsons.png',
  },
  {
    img: '/assets/logos/2/rta.png',
  },
  {
    img: '/assets/logos/2/sanad.png',
  },
  {
    img: '/assets/logos/2/siemens.png',
  },
  {
    img: '/assets/logos/2/silicon.png',
  },
  {
    img: '/assets/logos/2/TSC.png',
  },
];
const OurClients = () => {
  return (
    <div className="pb-10">
      <h2 className="text-center font-outfit text-primary font-semibold text-3xl md:text-5xl">
        Our Clients
      </h2>

      <div>
        <Carasule data={logos1} />
        <Carasule data={logos2} direction={'left'} />
      </div>
    </div>
  );
};

export default OurClients;
