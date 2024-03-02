import ContactForm from '@/component/contactus/ContactForm';
import Image from 'next/image';
import React from 'react';

function page() {
  return (
    <div className="relative pt-[90px] bg-[#f0f0f0]">
      <div className="relative h-[70vh] w-full ">
        <Image
          src="/assets/images/hero.png"
          fill
          alt="CitySolar"
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
      <div className="px-6 pb-10">
        <div className="relative -mt-[60vh] ">
          <div className="max-w-[800px] mx-auto text-center text-white my-16">
            <h1 className="capitalize text-lg font-medium">Contact Us</h1>
            <p className="font-semibold text-2xl md:text-6xl md:leading-[60px] mt-2">
              We&apos;d love to hear from you
            </p>
          </div>
          <ContactForm />
        </div>

        <div className="p-6 w-full md:w-3/4 mx-auto bg-white rounded-[48px] mt-12 md:mt-[84px]">
          <div className="flex flex-col md:flex-row justify-between my-10">
            <h3 className="text-xl text-slate-500 mb-4">City Solar</h3>
            <div className="flex flex-col md:flex-row gap-2 md:gap-6 font-medium text-lg">
              <p>
                Diamond Business Center, 2nd Floor, The Sustainable City Dubai
              </p>
              <p>info@citysolar.ae</p>
              <p>+971 4 430 5680</p>
            </div>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.199256319359!2d55.27305947552456!3d25.02731113856053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6fb78fd43c51%3A0x174978ba636b7630!2sCity%20Solar!5e0!3m2!1sen!2sae!4v1709228979718!5m2!1sen!2sae"
            style={{
              width: '100%',
              height: '500px',
              borderRadius: '48px',
            }}
            allowFullScreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default page;
