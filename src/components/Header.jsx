import React, { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-gray-900/70 backdrop-blur-md shadow-lg border-b border-gray-800">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between text-white">
        {/* ===== LOGO ===== */}
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-400 via-indigo-500 to-purple-600 
          flex items-center justify-center text-white font-extrabold text-lg shadow-md 
          transform transition-transform duration-500 group-hover:rotate-180 group-hover:scale-110">
            N
          </div>
          <div>
            <div className="text-xl font-extrabold tracking-wide">Neotech</div>
            <div className="text-xs text-gray-400">Software & Cloud</div>
          </div>
        </div>

        {/* ===== NAVIGATION (Desktop) ===== */}
        <nav className="hidden md:flex items-center gap-10 text-sm font-medium">
          <a
            href="#home"
            className="relative group"
          >
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a
            href="#services"
            className="relative group"
          >
            Services
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a
            href="#about"
            className="relative group"
          >
            About
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
          </a>
          
        </nav>

        {/* ===== CONTACT BUTTON ===== */}
        <a
          href="#contact"
          className="hidden md:inline-block px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 
          text-white text-sm font-semibold shadow-md hover:shadow-cyan-500/30 hover:scale-105 transition-all duration-300"
        >
          Contact Us
        </a>

        {/* ===== MOBILE MENU TOGGLE ===== */}
        <button
          className="md:hidden flex flex-col gap-1.5 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* ===== MOBILE MENU ===== */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-md text-center text-white border-t border-gray-700">
          <a
            href="#home"
            className="block py-3 border-b border-gray-800 hover:bg-gray-800 transition"
          >
            Home
          </a>
          <a
            href="#services"
            className="block py-3 border-b border-gray-800 hover:bg-gray-800 transition"
          >
            Services
          </a>
          <a
            href="#about"
            className="block py-3 border-b border-gray-800 hover:bg-gray-800 transition"
          >
            About
          </a>
          <a
            href="#contact"
            className="block py-3 text-cyan-400 font-semibold hover:bg-gray-800 transition"
          >
            Contact Us
          </a>
        </div>
      )}
    </header>
  );
}
