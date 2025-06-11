import React from 'react'
import bannerImg from '../assets/banners.svg'
import LogoCarosel from './LogoCarosel'
import { motion } from 'framer-motion'
import variants from '../utils/variants'

const Hero = () => {
  return (
    <section className='bg-white pt-20'  id='about'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className='flex flex-col md:flex-row items-center gap-6'>
                {/* left */}
                <div className='md:w-1/2'>
                    <div className='md:w-2/3'>
                        <motion.h1 
                        initial = "hidden"
                        whileInView='visible'
                        viewport={{amount: 0.1}}
                        variants={variants('bottom', 0.2)}
                        className='text-4xl font-bold text-secondary mb-4'>Unlocking Success in a Digital-First World</motion.h1>
                        <motion.p 
                        initial = "hidden"
                        whileInView='visible'
                        viewport={{amount: 0.1}}
                        variants={variants('bottom', 0.5)}
                        className='text-gray-600 mb-6'>In today’s fast-paced and ever-evolving digital world, success is no longer determined by traditional strategies alone. "Navigating the Digital Landscape for Success" empowers individuals and businesses to understand the core dynamics of digital transformation, from emerging technologies and data-driven decision-making to effective online branding and customer engagement.</motion.p>
                        <motion.button 
                        initial = "hidden"
                        whileInView='visible'
                        viewport={{amount: 0.1}}
                        variants={variants('bottom', 0.6)}
                        className='bg-black text-white font-semibold rounded-md px-6 py-3 inline-block hover:bg-primary hover:text-black transition-all duration-300'>Book a Consultation</motion.button>
                    </div>
                </div>

                {/* right */}
                <div className='md:w-1/2 order-first md:order-last'>
                    <motion.img 
                        initial = "hidden"
                        whileInView='visible'
                        viewport={{amount: 0.1}}
                        variants={variants('right', 0.2)}
                        src={bannerImg} alt='' className='w-full h-auto rounded-md' 
                    />
                </div>
            </div>      

            {/* brand logo */}
            <LogoCarosel /> 
        </div>
    </section>
  )
}

export default Hero
