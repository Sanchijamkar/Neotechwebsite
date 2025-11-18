import React from "react";
import { motion } from "framer-motion";
import { Code, Smartphone, Brain, Cloud, Shield, LineChart } from "lucide-react";

const services = [
  {
    icon: <Code size={40} className="text-cyan-400" />,
    title: "Web Development",
    desc: "We craft responsive and high-performance websites using the latest technologies.",
  },
  {
    icon: <Smartphone size={40} className="text-blue-400" />,
    title: "Mobile App Development",
    desc: "Delivering seamless mobile experiences across iOS and Android platforms.",
  },
  {
    icon: <Brain size={40} className="text-purple-400" />,
    title: "AI & Machine Learning",
    desc: "Empower your business with intelligent automation and predictive analytics.",
  },
  {
    icon: <Cloud size={40} className="text-indigo-400" />,
    title: "Cloud Solutions",
    desc: "Scalable, secure, and optimized cloud infrastructure for modern enterprises.",
  },
  {
    icon: <Shield size={40} className="text-teal-400" />,
    title: "Cybersecurity",
    desc: "Protecting your digital assets with cutting-edge security strategies and tools.",
  },
  {
    icon: <LineChart size={40} className="text-cyan-500" />,
    title: "Data Analytics",
    desc: "Transforming data into actionable insights that drive smarter decisions.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-24 bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white overflow-hidden"
    >
      {/* ==== BACKGROUND OVERLAY ==== */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.15),_transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-14"
        >
          Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">Services</span>
        </motion.h2>

        {/* ==== SERVICE CARDS ==== */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-cyan-400/20 shadow-lg hover:shadow-cyan-400/40 transition-all text-left"
            >
              <div className="mb-4">{s.icon}</div>
              <h3 className="text-2xl font-semibold mb-2 text-cyan-300">{s.title}</h3>
              <p className="text-gray-300">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
