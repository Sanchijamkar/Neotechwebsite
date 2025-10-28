import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { FaGithub, FaTwitter, FaLinkedin, FaArrowUp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 via-gray-800 to-black text-gray-300 py-14 relative overflow-hidden">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-10">
        {/* ===== Brand Section ===== */}
        <div>
          <h1 className="text-2xl font-extrabold text-white mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Neotech
            </span>
          </h1>
          <p className="text-sm leading-relaxed text-gray-400 max-w-sm">
            Innovating the future through next-gen software solutions. We
            specialize in AI-driven apps, cloud computing, and full-stack
            digital transformations.
          </p>
        </div>

        {/* ===== Quick Links ===== */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-white">
            Quick Links
          </h2>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <Link
                to="home"
                smooth={true}
                duration={800}
                className="cursor-pointer hover:text-cyan-400 transition-all duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="services"
                smooth={true}
                duration={800}
                className="cursor-pointer hover:text-cyan-400 transition-all duration-300"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={800}
                className="cursor-pointer hover:text-cyan-400 transition-all duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={800}
                className="cursor-pointer hover:text-cyan-400 transition-all duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* ===== Contact + Social Media ===== */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-white">Contact</h2>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>📧 support@neotech.com</li>
            <li>📍 Pune, Maharashtra, India</li>
            <li>📞 +91 98234 56789</li>
          </ul>

          <div className="flex gap-5 mt-5 text-lg">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition-all duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition-all duration-300"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition-all duration-300"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* ===== Bottom Section ===== */}
      <div className="mt-12 text-center border-t border-gray-700 pt-6 text-sm text-gray-500">
        © {new Date().getFullYear()} Neotech — All Rights Reserved.
      </div>

      {/* ===== Go to Top Button ===== */}
      <button
        onClick={() => scroll.scrollToTop({ duration: 800 })}
        className="absolute bottom-10 right-10 p-3 bg-cyan-500 rounded-full text-white shadow-lg hover:bg-cyan-400 transition-all duration-300 animate-bounce"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
}

export default Footer;
