import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { NavLink, useNavigate } from "react-router-dom";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import '../styles/Navbar.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  const [profileDropdown, setProfileDropdown] = useState(false);

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
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <NavLink to="/home" className="logo">
          <TravelExploreIcon fontSize="large" className="mr-2" /> Travel Explorer
        </NavLink>

        {/* Desktop Menu */}
        <ul className="menu desktop-menu">
          {menuItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {item.name}
              </NavLink>
            </li>
          ))}

          {/* Dropdown for explore */}
          <li
            className="dropdown"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button>Explore ▾</button>
            {dropdownOpen && (
              <ul className="dropdown-menu">
                <li>
                  <NavLink to="/destinations">Destinations</NavLink>
                </li>
                <li>
                  <NavLink to="/packages">Packages</NavLink>
                </li>
              </ul>
            )}
          </li>

          {/* ⬅️ CHANGED: Profile dropdown if logged in */}
          {user ? (
            <li className="profile-dropdown">
              <button
                className="profile-btn"
                onClick={() => setProfileDropdown(!profileDropdown)}
              >
                <img
                  src={user.photoURL || "/default-avatar.png"}
                  alt="Profile"
                  className="profile-img"
                />
              </button>
              {profileDropdown && (
                <ul className="profile-menu">
                  <li>
                    <NavLink to="/my-bookings">My Bookings</NavLink>
                  </li>
                  <li>
                    <button onClick={handleLogout} className="logout-btn">
                      Logout
                    </button>
                  </li>
                </ul>
              )}
            </li>
          ) : (
            <li>
              <NavLink to="/login" className="btn btn-yellow">
                Login
              </NavLink>
            </li>
          )}
        </ul>

        {/* Mobile Menu Icon */}
        <button
          className="hamburger"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu ${open ? "show" : ""}`}>
        <ul>
          {menuItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {item.name}
              </NavLink>
            </li>
          ))}

          {/* Mobile Explore Dropdown */}
          <li>
            <button
              onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
              className="dropdown-btn"
            >
              Explore ▾
            </button>
            {mobileDropdownOpen && (
              <ul className="mobile-dropdown">
                <li>
                  <NavLink
                    to="/destinations"
                    onClick={() => {
                      setOpen(false);
                      setMobileDropdownOpen(false);
                    }}
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
                  >
                    Packages
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          {/* ⬅️ CHANGED: Mobile profile dropdown */}
          {user ? (
            <>
              <li className="profile-dropdown">
                <button
                  className="profile-btn"
                  onClick={() => setProfileDropdown(!profileDropdown)}
                >
                  <img
                    src={user.photoURL || "/default-avatar.png"}
                    alt="Profile"
                    className="profile-img"
                  />
                </button>
                {profileDropdown && (
                  <ul className="profile-menu">
                    <li>
                      <NavLink
                        to="/my-bookings"
                        onClick={() => setOpen(false)}
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
                        className="logout-btn"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                )}
              </li>
            </>
          ) : (
            <li>
              <NavLink
                to="/login"
                onClick={() => setOpen(false)}
                className="btn btn-yellow"
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
