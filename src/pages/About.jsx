import React from 'react'
import { FaGlobeAmericas, FaHotel, FaShieldAlt, FaDollarSign } from "react-icons/fa";

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
        
        <div className='max-w-6xl mx-auto px-6 lg:px-12 mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center'>
          <div data-aos="fade-up" className='p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition'>
            <FaGlobeAmericas className='text-blue-600 text-4xl mb-4 mx-auto'/>
            <h3 className='font-bold text-lg mb-2'>Worldwide Destinations</h3>
            <p className='text-gray-600 text-sm'>Explore diverse locations across the globe with ease.</p>
          </div>
          <div data-aos='fade-up' data-aos-delay='200' className='p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition'>
            <FaHotel className='text-blue-600 text-4xl mb-4 mx-auto'/>
            <h3 className='font-bold text-lg mb-2'>Best Stays</h3>
            <p className='text-gray-600 text-sm'>Handpicked hotels and stays for comfort and luxury.</p>
          </div>
          <div data-aos='fade-up' data-aos-delay='200' className='p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition'>
            <FaShieldAlt className='text-blue-600 text-4xl mb-4 mx-auto'/>
            <h3 className='font-bold text-lg mb-2'>Safe & Secure</h3>
            <p className='text-gray-600 text-sm'>Travel with peace of mind, knowing you're protected.</p>
          </div>
          <div data-aos='fade-up' data-aos-delay='200' className='p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition'>
            <FaDollarSign className='text-blue-600 text-4xl mb-4 mx-auto'/>
            <h3 className='font-bold text-lg mb-2'>Affordable Packages</h3>
            <p className='text-gray-600 text-sm'>Enjoy premium experiences at budget-friendly prices.</p>
          </div>
        </div>

        <div className='bg-blue-900 text-white mt-20 py-12'>
          <div className='max-w-6xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center'>
            <div>
              <h3 className='text-3xl font-extrabold'>50+</h3>
              <p className='text-gray-300'>Destinations</p>
            </div>
            <div>
              <h3 className='text-3xl font-extrabold'>200+</h3>
              <p className='text-gray-300'>Hotels & Resorts</p>
            </div>
            <div>
              <h3 className='text-3xl font-extrabold'>10K+</h3>
              <p className='text-gray-300'>Happy Travelers</p>
            </div>
            <div>
              <h3 className='text-3xl font-extrabold'>5+</h3>
              <p className='text-gray-300'>Years Experience</p>
            </div>
          </div>
        </div>

        <div className='text-center mt-16 px-6'>
          <h3 className='text-2xl font-bold text-blue-900 mb-4'>Ready for your next adventure?</h3>
          <p className='text-gray-600 mb-6'>Discover, explore and book with Travel Explorer today!</p>
          <a href="/packages" className='px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition'>
            Explore Packages
          </a>
        </div>
    </section>
  );
}
