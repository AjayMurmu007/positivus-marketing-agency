import React from 'react'

const FooterContact = () => {
  return (
   <>
    <div className='flex flex-col md:flex-row py-8 px-4 lg:px-8 sm:px-6 gap-8'>
        <div className='flex-1 space-y-4'>
            <button className='bg-primary text-black px-6 py-2 rounded-md font-medium'>
                Contact
            </button>
            <div className='text-white space-y-2'>
                <p><strong>Email:</strong> contact@ajay.com</p>
                <p><strong>Phone:</strong> +123 546 8795</p>
                <p><strong>Address:</strong> 1234 complex st.city, country</p>                
            </div>
        </div>

        <div className='flex-1 bg-[#292A32] justify-center items-center p-8 rounded-md'>
            <form className='flex flex-col justify-center items-center h-20 md:flex-row gap-4'> 
                <input type='email' placeholder='hello@example.com' className='flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-white' />
            <button className='bg-primary text-black px-6 py-2.5 rounded-md font-medium'>
                Contact
            </button>
            </form>
        </div>
    </div>
   </>
  )
}

export default FooterContact
