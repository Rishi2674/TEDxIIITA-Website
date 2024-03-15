import React from 'react'

export default function Contact() {
  return (
            <div>
                <h1 className='text-4xl font-semibold text-center pt-9 opacity-85'>
                    Contact
                </h1>

                {/* <hr className='' width={20}></hr> */}
                <hr className='w-80 h-1 mx-auto  bg-gray-100 rounded md:my-9 dark:bg-red-600'></hr>

                <h1 className='text-3xl text-center opacity-85 pb-20'>
                    Team TEDxIIITA
                </h1>

                <h2 className='text-center text-lg opacity-90 text-gray-600'>
                    Find us at Student Activity Centre, IIIT Allahabad,
                </h2>
                <h2 className='text-center text-lg opacity-90 text-gray-600'>
                    Allahabad.
                </h2>
                <h2 className='text-center text-lg opacity-90 text-gray-600 pb-24 pt-3'>
                    Email: tedxiiita@gmail.com
                </h2>

            </div>
        )
    }