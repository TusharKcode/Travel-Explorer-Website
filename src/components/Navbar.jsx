import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { NavLink, useNavigate } from "react-router-dom";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, [auth]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      navigate("/home");
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  const menuItems = [
    { name: "Home", path: "/home" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-gradient-to-r from-blue-900 to-blue-700 text-white px-6 py-4 shadow-lg fixed w-full top-0 z-50">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* Logo */}
        <NavLink
          to="/home"
          className="text-2xl font-bold tracking-wide flex items-center hover:text-yellow-400 transition-colors"
        >
          <TravelExploreIcon fontSize="large" className="mr-2" /> Travel Explorer
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 items-center">
          {menuItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `transition-colors duration-300 ${
                    isActive
                      ? "text-yellow-400 font-semibold"
                      : "hover:text-yellow-400"
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}

          {/* Dropdown for explore */}
          <li
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="transition-colors duration-300 hover:text-yellow-400 font-semibold">
              Explore ▾
            </button>
            {dropdownOpen && (
              <ul className="absolute bg-white text-black shadow-lg rounded-md mt-2 w-44">
                <li>
                  <NavLink
                    to="/destinations"
                    className="block px-4 py-2 hover:bg-blue-100"
                  >
                    Destinations  
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/packages"
                    className="block px-4 py-2 hover:bg-blue-100"
                  >
                    Packages
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          {/* Show Profile/MyBookings or Login */}
          {user ? (
            <>
              <li>
                <NavLink
                  to="/my-bookings"
                  className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600 transition"
                >
                  My Bookings
                </NavLink>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-600 transition"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <li>
              <NavLink
                to="/login"
                className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition"
              >
                Login
              </NavLink>
            </li>
          )}
        </ul>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-3xl cursor-pointer hover:text-yellow-400 transition"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center bg-blue-800 space-y-5 py-6 mt-3 rounded-lg shadow-lg">
          {menuItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `transition-colors duration-300 ${
                    isActive
                      ? "text-yellow-400 font-semibold"
                      : "hover:text-yellow-400"
                  }`
                }
                onClick={() => setOpen(false)}
              >
                {item.name}
              </NavLink>
            </li>
          ))}

          {/* Mobile Explore Dropdown */}
          <li>
            <button
              onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
              className="font-semibold hover:text-yellow-400 transition"
            >
              Explore ▾
            </button>
            {mobileDropdownOpen && (
              <ul className="mt-2 bg-blue-700 rounded-md shadow-inner">
                <li>
                  <NavLink
                    to="/destinations"
                    onClick={() => {
                      setOpen(false);
                      setMobileDropdownOpen(false);
                    }}
                    className="block px-4 py-2 hover:bg-blue-600"
                  >
                    Destinations
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/packages"
                    onClick={() => {
                      setOpen(false);
                      setMobileDropdownOpen(false);
                    }}
                    className="block px-4 py-2 hover:bg-blue-600"
                  >
                    Packages
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          {/* Show Profile/MyBookings or Login for mobile */}
          {user ? (
            <>
              <li>
                <NavLink
                  to="/my-bookings"
                  onClick={() => setOpen(false)}
                  className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600 transition"
                >
                  My Bookings
                </NavLink>
              </li>
              <li>
                <button
                  onClick={() => {
                    handleLogout();
                    setOpen(false);
                  }}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-600 transition"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <li>
              <NavLink
                to="/login"
                onClick={() => setOpen(false)}
                className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition"
              >
                Login
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
