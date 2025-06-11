import React from "react";
import ctaImage from '../assets/cta-image.png'

const Cat = () => {
  return (
    <section className="relative py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#F3F3F3] rounded-md sm:pt-24 pt-8 pb-12 flex flex-col md:flex-row items-center justify-between ">
        {/* left */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl font-bold text-secondary mb-4">
           Let's make things happen
          </h1>
          <p className="text-gray-600 mb-6 md:w-2/3">
            In today’s fast-paced and ever-evolving digital world, success is no
            longer determined by traditional strategies alone.
            
          </p>
          <button className="bg-black text-white font-semibold rounded-md px-6 py-3 inline-block hover:bg-primary hover:text-black transition-all duration-300">
            Book a Consultation
          </button>
        </div>
        {/* right */}
        <div className="md:w-1/2 flex justify-center items-center relative">
            <img src={ctaImage} alt=" " className="md:absolute md:-top-58 md:bottom-0" style={{transform: 'scale(1.05)'}}  />
        </div>
      </div>
    </section>
  );
};

export default Cat;
