import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";

export default function HeroSection() {

  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
                                          //Loading Skeleton
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500)
    return () => clearTimeout(timer)
  },[]);

  const handleSearch = () => {
    if(searchTerm.trim() === ""){
      alert("Please enter a destination to search!")
      return;
    }
    navigate(`/explore?search=${searchTerm}`)
  };

  const handleExplore = () =>{
    navigate("/explore");
  }

  if (loading) {
    return (
      <div className="w-full h-[90vh]">
        <Skeleton variant="rectangular" width={"100%"} height={"100%"}/>
      </div>
    )
  }

  return (
    <section
      className="relative h-[90vh] flex items-center justify-center text-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        margin:"30px 0 0 0"
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl px-6 text-white">
        <h1 className="text-3xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-400 bg-clip-text text-transparent drop-shadow-lg">
          Discover Your Next Adventure
        </h1>
        <p className="text-lg md:text-xl mb-6 text-gray-200 drop-shadow">
          Find amazing destinations and experiences around the world.
        </p>

        {/* Search Bar */}
        <div className="flex flex-col sm:flex-row bg-white rounded-lg overflow-hidden max-w-lg mx-auto mb-6 shadow-md">
          <input
            type="text"
            placeholder="Search destinations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 w-full text-black focus:outline-none"
          />
          <button onClick={handleSearch} className="bg-yellow-500 px-6 py-2 text-black font-semibold hover:bg-yellow-600 transition">
            Search
          </button>
        </div>

        {/* CTA Button */}
        <button onClick={handleExplore} className="bg-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
          Explore Now
        </button>
      </div>
    </section>
  );
}
