import React from 'react'
import contactImg from '../assets/contact.png'

const Contact = () => {
  return (
    <section className='pt-24 pb-16 bg-white' id='contact'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* headline and description */}
            <div className='flex flex-col md:flex-row  gap-4 mb-12'>
                <div className='flex-shrink-0 text-black bg-primary py-2 px-16 rounded-md'>
                    <h2 className='text-2xl font-bold'>Contact us</h2>
                </div>
                <div className='md:w-2/3'>
                    <p className='text-secondary md:w-2/3'>Connect with us. <br />Let's discuss your digital marketing needs..!</p>
                </div>
            </div>

            {/* contect form */}
            <div className='flex flex-col md:flex-row justify-between bg-tartiary rounded-lg md:p-1 p-4'>
                <div className='w-full md:w-1/2 p-4'>
                    <form className='space-y-4'>
                        {/* radio input */}
                        <div className='flex flex-col md:flex-row md:space-x-4 items-start justify-start'>
                            <label className='flex items-center'>
                                <input type='radio' name='contact-type' className='mr-2' value="hi" /> Say Hi 
                            </label>
                            <label className='flex items-center mt-2 md:mt-0'>
                                <input type='radio' name='contact-type' className='mr-2' value="quote" /> Get a Quote 
                            </label>
                        </div>

                        {/* name input */}
                        <div>
                            <label className='block text-sm font-medium text-gray-700'> Name </label>
                            <input type='text' name='name' id='name' className='mt-2 py-2 px-4 block w-full rounded-md shadow-sm focus:outline-none focus:ring focus:ring-primary bg-white ' placeholder='Write your Name' />
                        </div>
                        {/* email input */}
                        <div>
                            <label className='block text-sm font-medium text-gray-700'> E-Mail </label>
                            <input type='email' name='email' id='email' className='mt-2 py-2 px-4 block w-full rounded-md shadow-sm focus:outline-none focus:ring focus:ring-primary bg-white' placeholder='Enter your Email' />
                        </div>
                        {/* TExt Area */}
                        <div>
                            <label className='block text-sm font-medium text-gray-700'> Message </label>
                            <textarea rows={6} name='message' id='message' className='mt-2 py-2 px-4 block w-full rounded-md shadow-sm focus:outline-none focus:ring focus:ring-primary bg-white' placeholder='Enter your message...!'></textarea>
                        </div>

                        {/* button */}
                        <button type='submit' className='inline-block px-6 py-3 bg-black text-white font-semibold rounded-md hover:bg-primary hover:text-black transition-all duration-300'>
                            Send Message
                        </button>
                    </form>
                </div>

                {/* image */}
                <div className='relative md:flex justify-end items-center md:w-1/2 md:m-8 overflow-hidden'>
                    <img src={contactImg} alt='' className='md:absolute md:block hidden top-0 bottom-0 -right-8 h-full' />
                </div>
            </div>
        </div>
      
    </section>
  )
}

export default Contact
