import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import StarOutlineSharpIcon from '@mui/icons-material/StarOutlineSharp';

export default function DestinationsPage() {

  const [destinations, setDestinations] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRating, setFilterRating] = useState("all");
  
  useEffect(() => {
    fetch("/data/exploreDestinations.json")
    .then((res) => res.json())
    .then((data) => setDestinations(data))
    .then((err) => console.error("Failed to load destinations:", err));
  }, []);

  const filteredDestinations = destinations.filter((place) => {
    const matchesSearch = place.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRating = filterRating === "all" ? true : Math.floor(place.rating) >= parseInt(filterRating);
    return matchesSearch && matchesRating;
  });

  return (
    <section className='py-16 bg-gray-50'>
      <div className='max-w-6xl mx-auto px-6'>
        {/* Heading */}
        <h2 className='text-3xl md:text-4xl font-bold text-center mb-10 text-bluee-900' data-aos='fade-up'>
          Choose Your Destination
        </h2>

        {/* Search Filter */}
        <div className='flex flex-col md:flex-col justify-between items-center gap-4 mb-8'>
          <input 
            type="text" 
            placeholder='Search your favourite destinations....'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className='w-full md:w-1/3 px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200'
          />

          <select 
            value={filterRating}
            onChange={(e) => setFilterRating(e.target.value)}
            className='px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200'
          >
            <option value="all">All Ratings</option>
            <option value="3">3★ & above</option>
            <option value="4">4★ & above</option>
            <option value="5">5★</option>
          </select>
        </div>

        {/* Grid */}
        {filteredDestinations.length > 0 ? (
          <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {filteredDestinations.map((place, index) => (
              <Link
                to={`/destinations/${place.id}`}  
                key={place.id}
                className='bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300 h-full flex flex-col'
                data-aos="fade-up"
                data-aos-delay={index*100}
              >
                <img src={place.image} alt={`Scenic view of ${place.name}`} className='w-full h-48 object-cover'/>
                <div className='p-4 flex flex-1 flex-col justify-between'>
                  <div>
                    <h3 className='text-lg font-semibold text-gray-800'>{place.name}</h3>
                    <p className='text-gray-600 text-sm'>{place.description}</p>
                  </div>
                  <p className='mt-2 text-yellow-500 font-medium flex items-center'>
                    <StarOutlineSharpIcon className='mr-1'/> {place.rating}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className='text-center text-gray-600 mt-6'>No Destinations Found.</p>
        )}
      </div>
    </section>
  );
}
