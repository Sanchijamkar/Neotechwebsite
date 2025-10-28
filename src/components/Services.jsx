import React from "react";

const services = [
  {
    title: "Web Development",
    desc: "Custom-built web applications using React, Node.js, and modern frameworks.",
  },
  {
    title: "Cloud Integration",
    desc: "We deploy scalable systems using AWS, Azure, and Google Cloud.",
  },
  {
    title: "UI/UX Design",
    desc: "Design systems, prototypes, and interfaces that engage users.",
  },
  {
    title: "Mobile Solutions",
    desc: "React Native-based apps for Android and iOS with seamless performance.",
  },
  {
    title: "API Development",
    desc: "RESTful and GraphQL APIs designed for security and speed.",
  },
  {
    title: "AI & Automation",
    desc: "Integrating intelligent automation for smarter business operations.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-extrabold mb-4">
          Innovative Software Solutions
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          We deliver custom digital solutions that fit your business needs.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all bg-gradient-to-br from-white to-gray-50"
            >
              <div className="text-orange-500 text-3xl mb-3 font-bold">
                {s.title.charAt(0)}
              </div>
              <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
