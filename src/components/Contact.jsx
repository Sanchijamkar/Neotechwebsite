import React, { useState } from "react";
import axios from "axios";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
  await axios.post("http://localhost:5000/api/contact", formData);
  setStatus("Message sent successfully ✅");
  setFormData({ name: "", email: "", subject: "", message: "" });
} catch (err) {
  console.error(err);
  setStatus("Something went wrong ❌");
}
  };

  // ✅ keep your same styles here
  const styles = {
    page: {
      minHeight: "100vh",
      background: "linear-gradient(120deg, #0a192f, #172a45)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "60px 20px",
      fontFamily: "'Poppins', sans-serif",
    },
    container: {
      display: "flex",
      flexWrap: "wrap",
      gap: "40px",
      maxWidth: "1100px",
      width: "100%",
      background: "rgba(255, 255, 255, 0.05)",
      borderRadius: "20px",
      boxShadow: "0 0 30px rgba(0, 200, 255, 0.15)",
      padding: "50px",
      color: "#fff",
      backdropFilter: "blur(12px)",
    },
    info: {
      flex: "1 1 40%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    title: {
      fontSize: "2.2rem",
      fontWeight: "700",
      color: "#00c6ff",
      marginBottom: "15px",
    },
    text: {
      color: "#d1d5db",
      marginBottom: "30px",
      lineHeight: "1.6",
    },
    infoItem: {
      margin: "10px 0",
      fontSize: "15px",
      display: "flex",
      alignItems: "center",
      gap: "10px",
      color: "#d1d5db",
    },
    icon: {
      color: "#00c6ff",
    },
    formBox: {
      flex: "1 1 55%",
      background: "rgba(255, 255, 255, 0.1)",
      padding: "40px",
      borderRadius: "15px",
      boxShadow: "inset 0 0 15px rgba(0, 200, 255, 0.2)",
    },
    formTitle: {
      fontSize: "1.8rem",
      marginBottom: "20px",
      color: "#00c6ff",
      textAlign: "center",
      fontWeight: "600",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "18px",
    },
    input: {
      padding: "14px 18px",
      borderRadius: "10px",
      border: "2px solid transparent",
      background: "rgba(255, 255, 255, 0.08)",
      color: "#fff",
      fontSize: "15px",
      outline: "none",
      transition: "0.3s ease",
    },
    textarea: {
      resize: "none",
      height: "130px",
      padding: "14px 18px",
      borderRadius: "10px",
      border: "2px solid transparent",
      background: "rgba(255, 255, 255, 0.08)",
      color: "#fff",
      fontSize: "15px",
      outline: "none",
      transition: "0.3s ease",
    },
    button: {
      background: "linear-gradient(90deg, #0072ff, #00c6ff)",
      border: "none",
      padding: "14px 0",
      borderRadius: "50px",
      color: "#fff",
      fontSize: "16px",
      fontWeight: "600",
      cursor: "pointer",
      transition: "0.3s ease",
      boxShadow: "0 4px 10px rgba(0, 200, 255, 0.3)",
    },
    status: {
      textAlign: "center",
      color: "#00c6ff",
      marginTop: "15px",
      fontSize: "15px",
    },
  };

  return (
    <section id="contact" style={styles.page}>
      <div style={styles.container}>
        <div style={styles.info}>
          <h1 style={styles.title}>Let’s Build Something Great!</h1>
          <p style={styles.text}>
            Have an idea or need a custom software solution?
            <br />
            Reach out to our team — we’ll respond within 24 hours.
          </p>

          <div>
            <p style={styles.infoItem}>
              <i className="fas fa-envelope" style={styles.icon}></i>
              contact@neotech.com
            </p>
            <p style={styles.infoItem}>
              <i className="fas fa-phone-alt" style={styles.icon}></i>
              +91 98765 43210
            </p>
            <p style={styles.infoItem}>
              <i className="fas fa-map-marker-alt" style={styles.icon}></i>
              Pune, Maharashtra, India
            </p>
          </div>
        </div>

        <div style={styles.formBox}>
          <h2 style={styles.formTitle}>Get in Touch</h2>
          <form style={styles.form} onSubmit={handleSubmit}>
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              style={styles.input}
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
              required
            />
            <input
              name="subject"
              type="text"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              style={styles.input}
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              style={styles.textarea}
              required
            ></textarea>
            <button type="submit" style={styles.button}>
              Send Message
            </button>
            <p style={styles.status}>{status}</p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
