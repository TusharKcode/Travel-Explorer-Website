import React, { useState } from 'react'
import StarOutlineSharpIcon from '@mui/icons-material/StarOutlineSharp';
import { useEffect } from 'react';

export default function FeaturedDestinations() {

    const [destinations, setDestinations] = useState([]);

    useEffect(() => {
        fetch("/data/destinations.json")
        .then((res) => res.json())
        .then((data) => setDestinations(data))
        .catch((err) => console.error("Failed to load destinations: ", err))
    }, []);

  return (
    <section className='py-16 bg-gray-50' id='destinations'>
      <div className='max-w-6xl mx-auto px-6'>
        {/* Heading */}
        <h2 className='text-3xl md:text-4xl font-bold text-center mb-10 text-blue-900' data-aos='fade-up'>
            Featured Destinations
        </h2>

        {/* Grid */}
        <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {destinations.map((place, index) => (
                    <div
                        key={place.id}
                        className='bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300 h-full flex flex-col'
                        data-aos='fade-up'
                        data-aos-delay={index * 100}
                    >
                        <img src={place.image} alt={`Scenic view of ${place.name}`} className='w-full h-48 object-cover'/>
                        <div className='p-4 flex flex-1 flex-col justify-between'>
                            <div>
                                <h3 className='text-lg font-semibold text-gray-800'>
                                {place.name}
                                </h3>
                                <p className='text-gray-600 text-sm'>
                                    {place.description}
                                </p>
                            </div>
                            <p className='mt-2 text-yellow-500 font-medium flex items-center'> 
                                <StarOutlineSharpIcon className='mr-1'/> {place.rating}
                            </p>
                        </div>
                    </div>
                ))}
        </div>
      </div>
    </section>
  )
}
