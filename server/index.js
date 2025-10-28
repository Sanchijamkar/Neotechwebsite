require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");

const contactRouter = require("./routes/contact");

const app = express();

// ===== MIDDLEWARES =====
app.use(helmet());
app.use(express.json());
app.use(morgan("dev"));

// ✅ Allow your frontend origin (use "*" during development)
app.use(cors({
  origin: process.env.FRONTEND_URL || "*",
}));

// ✅ Rate limiting to prevent spam
const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 10,             // limit each IP to 10 requests per minute
  message: "Too many requests from this IP, please try again later."
});
app.use("/api/contact", limiter);

// ===== ROUTES =====
app.use("/api/contact", contactRouter);

// ===== DATABASE & SERVER START =====
const PORT = process.env.PORT || 5000;

// ✅ Modern Mongoose connection (no deprecated options)
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  });
