import React from 'react'
import { servicesData } from '../utils/services'
import LinkIcon from '../assets/link-icon.png'

const Services = () => {
  return (
    <section className='pt-24 pb-16 bg-white' id='services'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* headline and description */}
        <div className='flex flex-col md:flex-row  gap-4 mb-12'>
            <div className='flex-shrink-0 text-black bg-primary py-2 px-16 rounded-md'>
                <h2 className='text-2xl font-bold'>Services</h2>
            </div>
            <div className='md:w-2/3'>
                <p className='text-secondary md:w-2/3'>In a world where digital presence defines success, our suite of services is designed to help you not only adapt — but thrive.</p>
            </div>
        </div>

        {/* services card */}
        <div className='grid grid-cols-1 md:grid-cols-2  gap-6'>
          {
            servicesData.map((service, index) => (
              <div key={index} className={`flex flex-col items-center sm:flex-row  md:justify-between md:items-center gap-6 p-6 rounded-lg border border-[#191A23] ${service.backgroundColor} ${service.textColor}`}>
                <div className='md:w-1/2 flex flex-col h-full justify-between'>
                  <button className={`text-xl py-1.5 font-semibold mb-2 rounded-sm sm:w-60 ${service.foregroundColor}`}>
                    {service.title}
                  </button>
                    <a href='#' className={`flex items-center gap-4 py-2 rounded-md text-black hover:bg-opacity-80 hover:text-black/80`}>
                      <img src={LinkIcon} alt=''  className='size-6 rounded-full'/>
                      <span className='text-lg font-medium'>Learn more</span>
                    </a>                  
                </div>

                {/* image */}
                <div className='w-1/2 order-first md:order-last'>
                  <img src={service.image} alt='' className='w-full object-cover rounded-md mb-4' />
                </div>
              </div>
            ))    
          }
        </div>
      </div>
    </section>
  )
}

export default Services
