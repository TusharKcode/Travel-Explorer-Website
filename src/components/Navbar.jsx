import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import TravelExploreIcon from '@mui/icons-material/TravelExplore';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if(searchTerm.trim() === ""){
      alert("Please enter a search term!");
      return;
    }
    navigate(`/explore?search=${searchTerm}`);
    setSearchTerm("");    //clear input
    setOpen(false);       //close mobile menu
  }

  return (
    <nav className="bg-gradient-to-r from-blue-900 to-blue-700 text-white px-6 py-4 shadow-lg fixed w-full top-0 z-50">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide cursor-pointer hover:text-yellow-400 transition-colors">
          <TravelExploreIcon fontSize="large"/> Travel Explorer
          <Link to='/'></Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 items-center">
          {[
            { name:"Home", path:"/home"},
            { name:"Explore", path:"/explore"},
            { name:"About", path:"/about"},
            { name:"Contact", path:"/contact"}
          ].map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className="hover:text-yellow-400 transition-colors duration-300"
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li>
            <form onSubmit={handleSearch} className="flex item-center">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search..."
                className="bg-white px-4 py-1.5 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button type="submit" className="ml-2 bg-yellow-500 text-black px-3 py-1.5 rounded-lg hover:bg-yellow-600 transition">Go</button>
            </form>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden text-3xl cursor-pointer hover:text-yellow-400 transition"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500 ease-in-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col items-center bg-blue-800 space-y-5 py-6 mt-3 rounded-lg shadow-lg">
          {[
            { name:"Home", path:"/home"},
            { name:"Explore", path:"/explore"},
            { name:"About", path:"/about"},
            { name:"Contact", path:"/contact"}
          ].map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className="hover:text-yellow-400 transition-colors duration-300"
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li>
            <form onSubmit={handleSearch} className="flex item-center">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search..."
                className="bg-white px-4 py-1.5 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button type="submit" className="ml-2 bg-yellow-500 text-black px-3 py-1.5 rounded-lg hover:bg-yellow-600 transition">Go</button>
            </form>
          </li>
        </ul>
      </div>
    </nav>
  );
}
