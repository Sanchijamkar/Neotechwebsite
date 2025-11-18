import React from "react";
import { motion } from "framer-motion";
import { Facebook, Linkedin, Twitter, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* === Animated Glow Background === */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,150,255,0.15),transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10 grid md:grid-cols-4 sm:grid-cols-2 gap-10">
        
        {/* === 1️⃣ Company Info === */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            NeoTech Solutions
          </h2>
          <p className="text-gray-300 leading-relaxed text-sm">
            We deliver next-generation IT, AI, and cloud-based solutions that
            empower businesses to scale and innovate with confidence.
          </p>
        </motion.div>

        {/* === 2️⃣ Quick Links === */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-lg font-semibold mb-4 text-cyan-400">Quick Links</h3>
          <ul className="space-y-3 text-gray-300">
            <li><a href="#home" className="hover:text-cyan-400 transition-all">Home</a></li>
            <li><a href="#about" className="hover:text-cyan-400 transition-all">About Us</a></li>
            <li><a href="#services" className="hover:text-cyan-400 transition-all">Services</a></li>
            <li><a href="#contact" className="hover:text-cyan-400 transition-all">Contact</a></li>
          </ul>
        </motion.div>

        {/* === 3️⃣ Services === */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-lg font-semibold mb-4 text-cyan-400">Our Services</h3>
          <ul className="space-y-3 text-gray-300">
            <li>Web & App Development</li>
            <li>Cloud Solutions</li>
            <li>AI & Machine Learning</li>
            <li>Cybersecurity</li>
          </ul>
        </motion.div>

        {/* === 4️⃣ Contact Info === */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <h3 className="text-lg font-semibold mb-4 text-cyan-400">Contact Us</h3>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li className="flex items-center gap-2"><MapPin size={16} /> Pune, Maharashtra, India</li>
            <li className="flex items-center gap-2"><Phone size={16} /> +91 98234 56789</li>
            <li className="flex items-center gap-2"><Mail size={16} /> info@neotech.com</li>
          </ul>

          {/* === Social Icons === */}
          <div className="flex gap-4 mt-5">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-all"><Facebook size={20} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-all"><Linkedin size={20} /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-all"><Twitter size={20} /></a>
          </div>
        </motion.div>
      </div>

      {/* === Copyright === */}
      <div className="border-t border-gray-700 mt-10 py-6 text-center text-gray-400 text-sm relative z-10">
        © {new Date().getFullYear()} NeoTech Solutions — Empowering Innovation with Technology 🚀
      </div>
    </footer>
  );
}



