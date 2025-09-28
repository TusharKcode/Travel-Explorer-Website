import React from 'react'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'; 
import StarOutlineSharpIcon from '@mui/icons-material/StarOutlineSharp';

export default function PackagesPage() {

    const [packages, setPackages] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filterRating, setFilterRating] = useState("all");

    useEffect(() => {
        fetch("/data/packages.json")
        .then((res) => res.json())
        .then((data) => setPackages(data))
        .catch((err) => console.error("Failed to load packages:", err));
      }, []);

    const filteredPackages = packages.filter((pkg) => {
      const matchesSearch = pkg.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesRating = filterRating === "all" ? true : Math.floor(pkg.rating) >= parseInt(filterRating);
      return matchesSearch && matchesRating;
    });

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-10 text-blue-900"
          data-aos="fade-up"
        >
          Explore Packages
        </h2>

        {/* Search & Filter Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          <input
            type="text"
            placeholder="Search packages..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-1/3 px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200"
          />

          <select
            value={filterRating}
            onChange={(e) => setFilterRating(e.target.value)}
            className="px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200"
          >
            <option value="all">All Ratings</option>
            <option value="3">3★ & above</option>
            <option value="4">4★ & above</option>
            <option value="5">5★</option>
          </select>
        </div>

        {/* Grid */}
        {filteredPackages.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredPackages.map((pkg, index) => (
              <div
                to={`/book/${pkg.id}`}
                key={pkg.id}
                className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300 h-full flex flex-col"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <img
                  src={pkg.image}
                  alt={`Package: ${pkg.name}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 flex flex-1 flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{pkg.name}</h3>
                    <p className="text-gray-600 text-sm">{pkg.duration}</p>
                    <p className="text-green-600 font-bold mt-1">{pkg.price}</p>
                  </div>
                  <p className="mt-2 text-yellow-500 font-medium flex items-center">
                    <StarOutlineSharpIcon className="mr-1" /> {pkg.rating}
                  </p>

                  <Link
                    to={`/book/${pkg.id}`}
                    className='mt-4 inline-block px-4 py-2 bg-blue-600 text-white text-center rounded-lg hover:bg-blue-700 transition'
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 mt-6">No packages found.</p>
        )}
      </div>
    </section>
  );
}
