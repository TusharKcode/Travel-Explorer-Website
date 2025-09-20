import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

export default function DestinationDetails() {

    const { id } = useParams();
    const [destination, setDestination] = useState(null);

    useEffect(() => {
        fetch("/data/destinations.json")
        .then((res) => res.json())
        .then((data) => {
            const found = data.find((d) => d.id === parseInt(id));
            setDestination(found);
        });
    }, [id]);

    if(!destination)
        return <p className='text-center mt-10'>Loading...</p>

  return (
    <div className='max-w-4xl mx-auto px-6 py-16'>
        <img 
            src={destination.image} 
            alt={destination.name} 
            className='w-full h-72 object-cover rounded-lg shado-md mb-6'
        />
        <h1 className='text-3xl font-bold text-blue-900 mb-4'>
            {destination.name}
        </h1>
        <p className='text-gray-700 mb-4'>{destination.description}</p>
        <p className='text-yellow-500 font-medium mb-6'>{destination.rating}</p>
        <Link 
            to="/"
            className='inline-block px-4 py-2 bg-blue-600  text-white rounded-lg hover:bg-blue-700 transition'
        >
            Back to Destinations
        </Link>
    </div>

  )
}
