import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import TravelExploreIcon from '@mui/icons-material/TravelExplore';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  
  const menuItems = [
    { name:"Home", path:"/home"},
    { name:"Explore", path:"/explore"},
    { name:"About", path:"/about"},
    { name:"Contact", path:"/contact"},
  ]

  return (
    <nav className="bg-gradient-to-r from-blue-900 to-blue-700 text-white px-6 py-4 shadow-lg fixed w-full top-0 z-50">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        
        {/* Logo */}
        <NavLink 
          to="/home" 
          className="text-2xl font-bold tracking-wide flex items-center hover:text-yellow-400 transition-colors"
        >
          <TravelExploreIcon fontSize="large" className="mr-2"/> Travel Explorer
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 items-center">
          {menuItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) => 
                  `transition-colors duration-300 ${
                    isActive ? "text-yellow-400 font-semibold" : "hover:text-yellow-400"
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}

          {/* Login Button */}
          <li>
            <NavLink
              to='/login'
              className='bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition'
            >
              Login
            </NavLink>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-3xl cursor-pointer hover:text-yellow-400 transition"
          onClick={() => setOpen(!open)}
          aria-label="Toogle menu"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500 ease-in-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col items-center bg-blue-800 space-y-5 py-6 mt-3 rounded-lg shadow-lg">
          {menuItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `transition-colors duration-300 ${
                    isActive ? "text-yellow-400 font-semibold" : "hover:text-yellow-400"
                  }`
                }
                onClick={() => setOpen(false)}
              >
                {item.name}
              </NavLink>
            </li>
          ))}

          {/* Login Button */}
          <li>
            <NavLink
              to='/login'
              onClick={() => setOpen(false)}
              className='bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition'
            >
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
