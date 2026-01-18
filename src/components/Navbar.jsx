import React, { useState } from "react";
import { Link } from "react-router";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-[#0A082F] py-3 shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-white"><Link to="/">MyPortfolio</Link></h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg text-[15px] uppercase text-white">
          <li>
            <Link to="/" className="hover:text-blue-600">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-600">About</Link>
          </li>
         
          <li>
            <Link to="/projects" className="hover:text-blue-600">Projects</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-600">Contact</Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-3xl"
        >
          {open ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden bg-[#0A082F] shadow-lg transition-all duration-300 ${
          open ? "max-h-96" : "max-h-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col space-y-4 p-6 text-white text-[14px] uppercase">
          <li>
            <Link onClick={() => setOpen(false)} to="/" className="hover:text-blue-600">Home</Link>
          </li>
          <li>
            <Link onClick={() => setOpen(false)} to="/about" className="hover:text-blue-600">About</Link>
          </li>
          
          <li>
            <Link onClick={() => setOpen(false)} to="/projects" className="hover:text-blue-600">Projects</Link>
          </li>
          <li>
            <Link onClick={() => setOpen(false)} to="/contact" className="hover:text-blue-600">Contact</Link>
          </li>
        </ul>
        </div>
    </nav>
  );
};

export default Navbar;
