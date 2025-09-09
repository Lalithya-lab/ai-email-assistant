// // routes/emailRoutes.js
// const express = require("express");
// const router = express.Router();
// const { addEmail, getEmails } = require("../controllers/emailController");

// router.post("/", addEmail);   // Add new email
// router.get("/", getEmails);   // Get all emails

// module.exports = router;






// routes/emailRoutes.js
const express = require("express");
const router = express.Router();

const {
  addEmail,
  getEmails,
  getEmailById,
  deleteEmail,
  updateEmail,
} = require("../controllers/emailController");

// CREATE
router.post("/", addEmail);          // Add new email
// READ
router.get("/", getEmails);          // Get all emails
router.get("/:id", getEmailById);    // Get single email by ID
// UPDATE
router.put("/:id", updateEmail);     // Update email + regenerate AI reply
// DELETE
router.delete("/:id", deleteEmail);  // Delete email

module.exports = router;
