import React from 'react'

export default function About() {
  return (
    <section className='about-section py-16 bg-gray-50' id='about'>
        <div className='max-w-6xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center'>
            <div data-aos="fade-right">
              <h2 className='text-4xl font-extrabold text-blue-900 mb-6'>
                About Us
              </h2>
              <p className='text-gray-700 leading-relaxed mb-4'>
                At <span className='font-semibold text-blue-800'>Travel Explorer</span>,
                we help adventurers discover destination worldwide. From Tropical Beaches
                to Mountain Peaks, we make travel planning seamless and memorable.
              </p>
              <p className='text-gray-700 leading-relaxed mb-4'>
                Our mission is to inspire and connect people through unique travel experiences, while
                ensuring comfort,safety and unforgettable moments.
              </p>
              <p className='text-gray-700 leading-relaxed'>
                Whether you're planning a quick gateway or a month-long adventure, we've got the
                perfect packages tailored just for you.
              </p>
            </div>
            <div className='flex- justify-center' data-aos="fade-left">
                <img 
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80" 
                  alt="Travel Explorer"
                  className='rounded-2xl shadow-lg w-full max-w-md lg:max-w-full transform hover:scale-105 transition-transform duration-500' 
                />
              </div>
        </div>
    </section>
  )
}