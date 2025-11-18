import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_m8q2hmf",     // replace with your EmailJS service ID
        "template_67hi079",    // replace with your template ID
        form.current,
        "RutUAQ_hBQQ-eFrMS"      // replace with your public key
      )
      .then(
        (result) => {
          alert("Message Sent Successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message. Please try again later.");
          console.error(error);
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
        
        {/* ==== LEFT SIDE FORM ==== */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="bg-gray-800/50 p-10 rounded-2xl shadow-[0_0_30px_rgba(0,200,255,0.3)] backdrop-blur-lg"
        >
          <h2 className="text-4xl font-bold mb-6 text-center">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>

          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5">
            <motion.input
              type="text"
              name="from_name"
              placeholder="Your Name"
              className="p-3 rounded-lg bg-gray-900/60 border border-cyan-400/40 text-white focus:outline-none focus:border-cyan-400 transition-all"
              whileFocus={{ scale: 1.02 }}
              required
            />
            <motion.input
              type="email"
              name="from_email"
              placeholder="Your Email"
              className="p-3 rounded-lg bg-gray-900/60 border border-cyan-400/40 text-white focus:outline-none focus:border-cyan-400 transition-all"
              whileFocus={{ scale: 1.02 }}
              required
            />
            <motion.input
              type="text"
              name="from_phone"
              placeholder="Phone Number"
              className="p-3 rounded-lg bg-gray-900/60 border border-cyan-400/40 text-white focus:outline-none focus:border-cyan-400 transition-all"
              whileFocus={{ scale: 1.02 }}
            />
            <motion.textarea
              rows="5"
              name="message"
              placeholder="Your Message"
              className="p-3 rounded-lg bg-gray-900/60 border border-cyan-400/40 text-white focus:outline-none focus:border-cyan-400 transition-all resize-none"
              whileFocus={{ scale: 1.02 }}
              required
            ></motion.textarea>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              className="mt-3 bg-gradient-to-r from-cyan-500 to-blue-600 py-3 rounded-full font-semibold shadow-lg hover:shadow-cyan-500/40 transition-all duration-300"
            >
              Send Message 📞
            </motion.button>
          </form>
        </motion.div>

        {/* ==== RIGHT SIDE MAP ==== */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="rounded-3xl overflow-hidden shadow-2xl border border-cyan-400/30 hover:scale-105 transition-transform duration-500"
        >
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7558.312776275053!2d73.85674334387942!3d18.520430291283323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c065bbaba5b9%3A0xf2e43c6d7b420f5!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1690210210850!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            className="rounded-3xl"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
