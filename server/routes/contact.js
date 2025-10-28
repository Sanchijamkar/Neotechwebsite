const express = require("express");
const { body, validationResult } = require("express-validator");
const Contact = require("../models/Contact");
const router = express.Router();

/**
 * POST /api/contact
 * Body: { name, email, subject, message }
 */
router.post(
  "/",
  [
    body("name").trim().notEmpty().withMessage("Name is required").isLength({ max: 100 }),
    body("email").trim().isEmail().withMessage("Valid email required").isLength({ max: 100 }),
    body("subject").optional().isLength({ max: 200 }),
    body("message").trim().notEmpty().withMessage("Message is required").isLength({ max: 2000 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    try {
      const { name, email, subject, message } = req.body;

      const newContact = new Contact({ name, email, subject, message });
      await newContact.save();

      // Optionally: send notification email here (SendGrid/SES) or admin webhook

      res.status(201).json({ message: "Message received. Thank you!" });
    } catch (err) {
      console.error("Contact save error:", err);
      res.status(500).json({ message: "Server error" });
    }
  }
);

module.exports = router;
