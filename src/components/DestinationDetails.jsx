import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import StarOutlineSharpIcon from '@mui/icons-material/StarOutlineSharp';
import Skeleton from '@mui/material/Skeleton';

export default function DestinationDetails() {

    const { id } = useParams();
    const [destination, setDestination] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/data/destinations.json")
        .then((res) => res.json())
        .then((data) => {
            const found = data.find((d) => d.id === parseInt(id));
            setDestination(found);
            setLoading(false);
        });
        .catch(() => setLoading(false))
    }, [id]);

    if(loading){
        return(
            <div className='max-w-4xl mx-auto px-6 py-16'>
                <Skeleton variant='rectangular' width="100%" height={280} className='mb-6'/>
                <Skeleton width="60%" height={40} className='mb-4'/>
                <Skeleton width="80%" height={20} className='mb-2'/>
                <Skeleton width="90%" height={20} className='mb-2'/>
                <Skeleton width="40%" height={20} className='mb-6'/>
                <Skeleton width="30%" height={20}/>
            </div>
        )
    }

    if(!destination)
        return <p className='text-center mt-10 text-gray-600'>Destination not found</p>

  return (
    <div className='max-w-4xl mx-auto px-6 py-16'>
        <div data-aos='fade-up'>
            <img 
                src={destination.image} 
                alt={destination.name} 
                className='w-full h-72 md:h-96 object-cover rounded-2xl shadow-lg mb-6'
            />
        </div>
        <div data-aos='fade-up' data-aos-delay='200'>
            <h1 className='text-3xl md:text-4xl font-bold text-blue-900 mb-4'>
                {destination.name}
            </h1>
            <p className='text-gray-700 mb-4 leading-relaxed'>
                {destination.description}
                </p>
            <p className='text-yellow-500 font-medium mb-6'>
               <StarOutlineSharpIcon/> {destination.rating} / 5
            </p>
        </div>
        
        <div className='grid md:grid-cols-2 gap-8 mt-10' data-aos='fade-up' data-aos-delay='400'>
            <div className='bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition'>
                <h3 className='text-xl font-semibold text-blue-800 mb-3'>Highlights</h3>
                <ul className='list-disc list-inside text-gray-700 space-y-2'>
                    <li>Beautiful Landscape & Attractions</li>
                    <li>Cultural & Historical Sites</li>
                    <li>Local Cuisine & Nightlife</li>
                </ul>
            </div>
            <div className='bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition'>
                <h3 className='text-xl font-semibold text-blue-800 mb-3'>Travel Info</h3>
                <p className='text-gray-700 mb-2'>
                    <span className='font-semibold'>Best Time to Visit:</span> Spring & Autumn
                </p>
                <p className='text-gray-700 mb-2'>
                    <span className='font-semibold'>Recommended Stay:</span> 5-7 Days
                </p>
                <p className='text-gray-700'>
                    <span className='font-semibold'>Popular Activities:</span> Sightseeing, Shopping , Local Tours
                </p>
            </div>
        </div>

        <div className='mt-10' data-aos='fade-up' data-aos-delay='600'>
            <Link 
                to="/"
                className='inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition'
            >
                Back to Destinations
            </Link>
        </div>
    </div>

  )
}
