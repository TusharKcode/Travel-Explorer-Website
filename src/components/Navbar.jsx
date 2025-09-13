import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import TravelExploreIcon from '@mui/icons-material/TravelExplore';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-900 to-blue-700 text-white px-6 py-4 shadow-lg fixed w-full top-0 z-50">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide cursor-pointer hover:text-yellow-400 transition-colors">
          <TravelExploreIcon fontSize="large"/> Travel Explorer
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 items-center">
          {["Home", "Explore", "About", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`/${item.toLowerCase()}`}
                className="hover:text-yellow-400 transition-colors duration-300"
              >
                {item}
              </a>
            </li>
          ))}
          <li>
            <input
              type="text"
              placeholder="Search..."
              className="bg-white px-4 py-1.5 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
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
          {["Home", "Explore", "About", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`/${item.toLowerCase()}`}
                className="hover:text-yellow-400 transition-colors duration-300"
              >
                {item}
              </a>
            </li>
          ))}
          <li>
            <input
              type="text"
              placeholder="Search..."
              className="bg-white px-4 py-1.5 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </li>
        </ul>
      </div>
    </nav>
  );
}
