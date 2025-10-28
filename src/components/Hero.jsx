import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // nice modern icons

export default function Hero() {
  const images = [
    "https://img.freepik.com/free-photo/software-developer-using-laptop-computer-with-code_236854-29607.jpg",
    "https://img.freepik.com/free-photo/digital-transformation-technology-background-with-hexagons_53876-97406.jpg",
    "https://img.freepik.com/free-photo/developer-typing-laptop-computer-with-code-screen-software-programming-web-development-coding_236854-31628.jpg",
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section
      id="home"
      className="relative flex flex-col md:flex-row items-center justify-between min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden"
    >
      {/* ==== LEFT SIDE CONTENT ==== */}
      <div className="w-full md:w-1/2 px-8 md:px-16 py-20">
        <p className="text-cyan-400 font-semibold uppercase tracking-widest text-sm md:text-base">
          Welcome to <span className="text-blue-400">Neotech</span>
        </p>
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mt-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600">
            Empowering Businesses
          </span>
          <br />
          with Modern Software Solutions 🚀
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed mt-6 max-w-md">
          We design and develop scalable, AI-powered, and cloud-ready software
          solutions tailored to accelerate your digital transformation.
        </p>

        <div className="flex flex-wrap gap-4 mt-8">
          <a
            href="#contact"
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold shadow-lg shadow-cyan-500/40 hover:shadow-blue-600/40 hover:scale-105 transition-transform duration-300"
          >
            Get Started
          </a>
          <a
            href="#services"
            className="px-8 py-3 border border-cyan-400/60 rounded-full text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-400 hover:scale-105 transition-all duration-300"
          >
            Explore Services
          </a>
        </div>
      </div>

      {/* ==== RIGHT SIDE SLIDESHOW ==== */}
      <div className="relative w-full md:w-1/2 flex justify-center items-center py-10">
        {/* Images */}
        <div className="relative w-[90%] h-[400px] md:h-[480px] overflow-hidden rounded-3xl shadow-[0_0_40px_rgba(0,200,255,0.3)]">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slide ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1000ms] ease-in-out ${
                index === current ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>

        {/* Prev / Next Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-6 md:left-10 bg-black/40 hover:bg-cyan-500/50 text-white p-3 rounded-full transition-all duration-300"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-6 md:right-10 bg-black/40 hover:bg-cyan-500/50 text-white p-3 rounded-full transition-all duration-300"
        >
          <ChevronRight size={24} />
        </button>

        {/* Dot Indicators */}
        <div className="absolute bottom-6 flex gap-3">
          {images.map((_, i) => (
            <div
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3.5 h-3.5 rounded-full cursor-pointer transition-all duration-300 ${
                i === current
                  ? "bg-cyan-400 scale-125"
                  : "bg-white/30 hover:bg-cyan-300/50"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}
