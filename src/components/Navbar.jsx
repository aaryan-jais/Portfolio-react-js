import React, { useState } from "react";
import { Link, useLocation } from "react-router";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-white/95 backdrop-blur-xl border-b border-[#E3E3F2]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="group flex items-center gap-3" > <span className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-[#5B5BD6] text-white overflow-hidden transition-all duration-300 group-hover:bg-[#4B4BB8] group-hover:shadow-[0_8px_24px_rgba(91,91,214,0.25)]"> <span className="text-sm font-bold tracking-[-0.05em]"> AR </span> <span className="absolute -bottom-2 -right-2 w-5 h-5 rounded-full bg-white/20" /> </span> <span className="flex flex-col leading-none"> <span className="text-[17px] md:text-[19px] font-semibold tracking-[-0.01em] text-[#171717] group-hover:text-[#5B5BD6] transition-colors duration-300"> Aaryan Raj </span> <span className="mt-1 text-[9px] uppercase tracking-[0.22em] text-[#858594]"> Frontend Developer </span> </span> </Link>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`group relative uppercase py-2 text-sm font-medium tracking-[0.01em] transition-colors duration-300 ${
                isActive(item.path)
                  ? "text-[#171717]"
                  : "text-[#62627A] hover:text-[#171717]"
              }`}
            >
              {item.name}

              <span
                className={`absolute left-0 bottom-0 h-[2px] bg-[#5B5BD6] rounded-full transition-all duration-300 ${
                  isActive(item.path)
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}

          <Link
            to="/contact"
            className="group ml-3 inline-flex items-center gap-3 px-6 py-3 bg-[#171717] text-white text-xs font-semibold uppercase tracking-[0.08em] rounded-[2px] transition-all duration-300 hover:bg-[#5B5BD6]"
          >
            Let's Talk

            <span className="text-base leading-none transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-[2px] border border-[#E3E3F2] text-[#171717] text-xl hover:border-[#5B5BD6] hover:text-[#5B5BD6] transition-colors duration-300"
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? "×" : "☰"}
        </button>
      </div>

      <div
        className={`md:hidden bg-white border-t border-[#E3E3F2] overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-5">
          {navItems.map((item) => (
            <Link
              key={item.path}
              onClick={() => setOpen(false)}
              to={item.path}
              className={`text-sm font-medium tracking-[0.01em] transition-colors duration-300 ${
                isActive(item.path)
                  ? "text-[#5B5BD6]"
                  : "text-[#62627A] hover:text-[#5B5BD6]"
              }`}
            >
              {item.name}
            </Link>
          ))}

          <Link
            onClick={() => setOpen(false)}
            to="/contact"
            className="mt-1 inline-flex items-center justify-center gap-3 px-5 py-3 bg-[#171717] text-white text-xs font-semibold uppercase tracking-[0.08em] rounded-[2px] hover:bg-[#5B5BD6] transition-colors duration-300"
          >
            Let's Talk

            <span className="text-base">→</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
