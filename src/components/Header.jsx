import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-md shadow-lg"
          : "bg-transparent backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* ==== LOGO ==== */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="flex items-center gap-3 cursor-pointer"
        >
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 
          flex items-center justify-center text-white font-extrabold text-lg shadow-md">
            N
          </div>
          <div>
            <h1 className="text-xl font-extrabold tracking-wide text-white">
              Neotech
            </h1>
            <p className="text-xs text-gray-300">Software & Cloud</p>
          </div>
        </motion.div>

        {/* ==== NAV LINKS (Desktop) ==== */}
        <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-200">
          {["Home", "Services", "About", "Projects", "Contact"].map(
            (item, idx) => (
              <motion.a
                key={idx}
                href={`#${item.toLowerCase()}`}
                whileHover={{ scale: 1.1 }}
                className="relative group hover:text-cyan-400 transition-all duration-300"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            )
          )}
        </nav>

        {/* ==== MOBILE MENU BUTTON ==== */}
        <button
          className="md:hidden flex flex-col gap-1.5 text-white focus:outline-none"
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

      {/* ==== MOBILE MENU ==== */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black/90 backdrop-blur-md text-center text-white border-t border-gray-700"
        >
          {["Home", "Services", "About", "Projects", "Contact"].map(
            (item, idx) => (
              <a
                key={idx}
                href={`#${item.toLowerCase()}`}
                className="block py-3 border-b border-gray-800 hover:bg-gray-800 transition"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            )
          )}
        </motion.div>
      )}
    </motion.header>
  );
}
