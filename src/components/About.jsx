import React from "react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-3xl font-extrabold mb-4">About Neotech</h3>
          <p className="text-gray-700 mb-4">
            Neotech is a modern software development company focused on cloud
            technologies, scalable systems, and delightful user experiences.
          </p>
          <ul className="text-gray-600 space-y-2">
            <li>✔ Cloud-native architecture</li>
            <li>✔ Agile product development</li>
            <li>✔ Dedicated project support</li>
          </ul>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786"
            alt="Office"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
