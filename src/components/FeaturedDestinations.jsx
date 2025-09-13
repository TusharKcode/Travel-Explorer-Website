import React from 'react'
import StarOutlineSharpIcon from '@mui/icons-material/StarOutlineSharp';

const destinations = [
    {
        id: 1,
        name:"Bali, Indoneasia",
        desciption:"Tropical paradise with beaches & temples",
        image:"https://unsplash.com/photos/BnejcYJOvk8/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NDN8fEJhbGklMjBJbmRvbmVhc2lhfGVufDB8fHx8MTc1Nzc0NDQzOHww&force=true&w=640",
        rating: 4.8
    },
    {
        id: 2,
        name:"Paris, France",
        desciption:"City of Love & iconic Eiffiel Tower",
        image:"https://unsplash.com/photos/9gjunLdtfvw/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8OTR8fHBhcmlzJTIwZnJhbmNlfGVufDB8fHx8MTc1Nzc0NDU3M3ww&force=true&w=640",
        rating: 4.5
    },
    {
        id: 3,
        name:"Tokyo, Japan",
        desciption:"Blend of tradition & futuristic city life",
        image:"https://unsplash.com/photos/FVK-lpEc-Bc/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzU3NzQ0NjM4fA&force=true&w=640",
        rating: 4.7
    },
    {
        id: 4,
        name:"New York, USA",
        desciption:"The city that never sleeps",
        image:"https://unsplash.com/photos/A2CChTZvzTE/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzU3NzQyOTE1fA&force=true&w=640",
        rating: 4.6
    }
]
export default function FeaturedDestinations() {
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
                        className='bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300'
                        data-aos='fade-up'
                        data-aos-delay={index * 200}
                    >
                        <img src={place.image} alt={place.name} className='w-full h-48 object-cover'/>
                        <div className='p-4'>
                            <h3 className='text-lg font-semibold text-gray-800'>
                                {place.name}
                            </h3>
                            <p className='text-gray-600 text-sm'>
                                {place.desciption}
                            </p>
                            <p className='mt-2 text-yellow-500 font-medium'> 
                                <StarOutlineSharpIcon/> {place.rating}
                            </p>
                        </div>
                    </div>
                ))}
        </div>
      </div>
    </section>
  )
}
