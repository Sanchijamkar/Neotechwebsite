import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Hero() {
  const images = [
    "https://img.freepik.com/free-photo/programming-background-collage_23-2149901777.jpg",
    "https://img.freepik.com/free-photo/digital-transformation-concept_23-2149370963.jpg",
    "https://img.freepik.com/free-photo/software-developer-typing-laptop-computer_236854-31578.jpg",
    "https://img.freepik.com/free-photo/futuristic-digital-technology-background_53876-104058.jpg",
  ];

  const [current, setCurrent] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* ==== SLIDES ==== */}
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={images[current]}
            alt="Software Slide"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
      </div>

      {/* ==== HERO TEXT ==== */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-6 md:px-12 text-white max-w-3xl"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 text-transparent bg-clip-text">
            Building Scalable Software
          </span>
          <br />
          For the Future of Innovation 🚀
        </h1>

        <p className="text-gray-200 text-lg md:text-xl mb-8">
          We deliver modern, AI-driven, and cloud-ready solutions that help your business grow faster and smarter.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.a
            href="#services"
            whileHover={{ scale: 1.05 }}
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold shadow-lg hover:shadow-cyan-500/50 transition-all"
          >
            Explore Our Services
          </motion.a>
          <motion.a
            href="#about"
            whileHover={{ scale: 1.05 }}
            className="px-8 py-3 border border-cyan-400 text-cyan-300 rounded-full hover:bg-cyan-500/20 transition-all flex items-center justify-center gap-2"
          >
            Learn More
          </motion.a>
        </div>
      </motion.div>

      {/* ==== SLIDE BUTTONS ==== */}
      <button
        onClick={prevSlide}
        className="absolute left-5 md:left-10 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-cyan-500/50 text-white p-3 rounded-full transition-all duration-300"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-5 md:right-10 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-cyan-500/50 text-white p-3 rounded-full transition-all duration-300"
      >
        <ChevronRight size={24} />
      </button>

      {/* ==== DOT INDICATORS ==== */}
      <div className="absolute bottom-8 flex gap-3">
        {images.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3.5 h-3.5 rounded-full cursor-pointer transition-all duration-300 ${
              i === current ? "bg-cyan-400 scale-125" : "bg-white/40 hover:bg-cyan-300/50"
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
}

