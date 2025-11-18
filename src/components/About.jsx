import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
        
        {/* ==== LEFT SIDE TEXT ==== */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold mb-6">
            About <span className="text-cyan-400">NeoTech Solutions</span>
          </h2>
          <p className="text-gray-300 leading-relaxed mb-5 text-justify">
            At <span className="text-cyan-400 font-semibold">NeoTech</span>, we
            believe technology should empower innovation. Our dedicated team of
            developers, designers, and strategists work together to build
            intelligent, user-focused, and scalable software solutions for
            businesses around the globe.
          </p>
          <p className="text-gray-400 leading-relaxed text-justify">
            From web and mobile app development to AI integration and cloud
            architecture, we bring your vision to life with modern technologies
            and robust engineering practices.
          </p>
        </motion.div>

        {/* ==== RIGHT SIDE IMAGE ==== */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <img
            src="https://img.freepik.com/free-photo/programmer-working-his-desk-office_1098-18707.jpg"
            alt="Developer working on computer"
            className="rounded-2xl shadow-[0_0_30px_rgba(0,200,255,0.3)] w-full max-w-md object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}

