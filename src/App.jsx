import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      
      <main>
        <Hero />
        <Services />
        <About />
        <Contact/>
        <Footer/>
      </main>
      
    </div>
  );
}
