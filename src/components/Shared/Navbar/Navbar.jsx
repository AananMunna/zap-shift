import { useState } from "react";
import { FiMenu, FiX, FiArrowUpRight } from "react-icons/fi";
import logo from "../../../assets/logo.png";
import { Link, NavLink } from "react-router";
import { useAuth } from "../../../context/AuthProvider";
import toast from "react-hot-toast";

// src/constants/navLinks.js

const navLinks = [
  { label: "Services", to: "/services" },
  { label: "Coverage", to: "/coverage" },
  { label: "About Us", to: "/about" },
  { label: "Pricing", to: "/pricing" },
  { label: "Be a Rider", to: "/rider" },
  { label: "Dashboard", to: "/dashboard" },
];



const Navbar = () => {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    logout()
      .then(() => {
        toast.success("You have successfully logged out!");
      })
      .catch((error) => {
        toast.error("Error logging out: " + error.message);
      });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#F3F5F6] px-4 pt-3">
      <nav className="bg-white shadow-md rounded-2xl px-5 py-3 md:py-4 flex items-center justify-between mx-auto transition-all">
        {/* Logo */}
        <Link to="/">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Profast" className="w-6 h-6" />
            <span className="text-xl font-bold text-gray-900 tracking-tight">Profast</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          {navLinks.map(({ label, to }, i) => (
            <li key={i}>
              <NavLink
                to={to}
                className="hover:text-black transition duration-200 text-[15px] tracking-tight"
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right Buttons */}
        <div className="hidden md:flex items-center gap-3">
          {!user && (
            <Link to="/login">
              <button className="text-sm px-4 py-2 border border-gray-300 rounded-lg text-gray-800 hover:bg-gray-100 transition">
                Sign In
              </button>
            </Link>
          )}
          <div className="flex items-center gap-1">
            <Link to="/rider">
              <button className="bg-[#C7F464] text-black font-medium px-4 py-2 rounded-lg hover:bg-[#b8e351] transition text-sm">
                Be a Rider
              </button>
            </Link>
            {user && (
              <span onClick={handleLogout} className="bg-black text-lime-300 p-2 rounded-full cursor-pointer">
                <FiArrowUpRight size={18} />
              </span>
            )}
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`transition-all duration-300 md:hidden ${
          open ? "max-h-[500px] opacity-100 mt-2" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="bg-white shadow-md rounded-xl p-4">
          <ul className="space-y-3 text-gray-700 font-medium text-[15px]">
            {navLinks.map(({ label, to }, i) => (
              <li key={i}>
                <NavLink
                  to={to}
                  onClick={() => setOpen(false)}
                  className="block hover:text-black transition"
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="mt-4 space-y-3">
            {!user && (
              <Link to="/login">
                <button className="w-full text-sm border border-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-100 transition">
                  Sign In
                </button>
              </Link>
            )}
            <div className="flex items-center gap-2">
              <Link to="/rider" className="w-full">
                <button className="w-full bg-[#C7F464] text-black font-medium px-4 py-2 rounded-lg hover:bg-[#b8e351] transition text-sm">
                  Be a Rider
                </button>
              </Link>
              {user && (
                <span onClick={handleLogout} className="bg-black text-lime-300 p-2 rounded-full cursor-pointer">
                  <FiArrowUpRight size={18} />
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
