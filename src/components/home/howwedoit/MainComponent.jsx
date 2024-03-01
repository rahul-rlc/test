'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// Import Swiper styles
import 'swiper/css';
import SlideComponent from './SlideComponent';
import { useState } from 'react';
const dataArray = [
  {
    heading: 'Site Visit and Consultation',
    description:
      "Our experts will conduct a thorough site visit to assess your location's solar potential. We'll sit down with you for a detailed consultation to understand your energy needs and goals.",
    src: '/assets/images/howwedoit/image1.png',
  },
  {
    heading: 'Design of Solar System',
    description:
      'After gathering all the necessary information, our team will design a customized solar system tailored to your unique requirements. This design ensures optimal energy production.',
    src: '/assets/images/howwedoit/image2.png',
  },
  {
    heading: 'Installation',
    description:
      "Our experienced team will proceed with the installation of your solar system. We'll ensure that all components are placed correctly and securely for maximum efficiency.",
    src: '/assets/images/howwedoit/image3.png',
  },
  {
    heading: 'DEWA Approval',
    description:
      "We'll handle the approval process with the Dubai Electricity and Water Authority (DEWA) to ensure your project complies with regulations. This step guarantees that your solar system is officially recognized.",
    src: '/assets/images/howwedoit/image4.png',
  },
  {
    heading: 'Commissioning and Get Your Savings on Electricity',
    description:
      "After installation, we commission your system to ensure it's fully operational. From this point on, you'll start generating your clean energy, reducing your electricity costs.",
    src: '/assets/images/howwedoit/image5.png',
  },
];
const MainComponent = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className=" pt-10 md:pt-16">
        <p className="font-medium uppercase">
          Step 0{slideIndex + 1}/0{dataArray.length}
        </p>
      </div>
      <Swiper
        modules={[Pagination, Navigation]}
        centeredSlides={true}
        onSlideChange={(obj) => setSlideIndex(obj.activeIndex)}
        pagination={{
          clickable: true,
          el: '.swiper-pagination-el',
          bulletActiveClass: 'serviceactivebullet',
          bulletClass: 'servicebullet',
        }}
        navigation={{
          nextEl: '.swiper-next-el',
          prevEl: '.swiper-prev-el',
        }}
      >
        {dataArray.map((data, index) => (
          <SwiperSlide key={index}>
            <SlideComponent data={data} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex gap-5 justify-center items-center mt-2 md:mt-4 ">
        <div
          className={`swiper-prev-el ${
            slideIndex === 0
              ? 'opacity-50 select-none text-lightgrey'
              : 'opacity-100 select-auto text-green'
          } }`}
        >
          <FaArrowLeft size={24} cursor={'pointer'} />
        </div>
        <div className="swiper-pagination-el !w-fit flex items-center"></div>
        <div
          className={`swiper-next-el text-[#999999]  ${
            slideIndex === dataArray.length - 1
              ? 'opacity-50 select-none text-lightgrey'
              : 'opacity-100 select-auto text-green'
          }`}
        >
          <FaArrowRight size={24} cursor={'pointer'} />
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
