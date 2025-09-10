// controllers/emailController.js








// // controllers/emailController.js
// const OpenAI = require("openai");
// const mongoose = require("mongoose");

// // Schema
// const emailSchema = new mongoose.Schema({
//   sender: String,
//   subject: String,
//   body: String,
//   aiReply: String,
// });
// const Email = mongoose.model("Email", emailSchema);

// // OpenAI config
// const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// // Save new email + generate AI reply
// exports.addEmail = async (req, res) => {
//   try {
//     const { sender, subject, body } = req.body;

//     // Ask AI for a smart reply
//     const aiResponse = await openai.chat.completions.create({
//       model: "gpt-3.5-turbo",
//       messages: [
//         { role: "system", content: "You are a helpful email assistant." },
//         { role: "user", content: `Reply to this email:\n${body}` },
//       ],
//     });

//     const reply = aiResponse.choices[0].message.content;

//     const newEmail = new Email({ sender, subject, body, aiReply: reply });
//     await newEmail.save();

//     res.status(201).json(newEmail);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Server error" });
//   }
// };

// // Fetch all emails
// exports.getEmails = async (req, res) => {
//   try {
//     const emails = await Email.find().sort({ _id: -1 });
//     res.json(emails);
//   } catch (error) {
//     res.status(500).json({ error: "Server error" });
//   }
// };





// controllers/emailController.js
// const OpenAI = require("openai");
// const mongoose = require("mongoose");

// // Schema
// const emailSchema = new mongoose.Schema({
//   sender: String,
//   subject: String,
//   body: String,
//   aiReply: String,
// });
// const Email = mongoose.model("Email", emailSchema);

// // OpenAI config
// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// // Save new email + generate AI reply
// exports.addEmail = async (req, res) => {
//   try {
//     const { sender, subject, body } = req.body;

//     if (!sender || !subject || !body) {
//       return res.status(400).json({ error: "All fields are required" });
//     }

//     // Ask AI for a smart reply
//     const aiResponse = await openai.chat.completions.create({
//       model: "gpt-3.5-turbo",
//       messages: [
//         { role: "system", content: "You are a helpful email assistant." },
//         { role: "user", content: `Reply to this email:\n${body}` },
//       ],
//       max_tokens: 150,
//     });

//     const reply = aiResponse.choices?.[0]?.message?.content?.trim();

//     if (!reply) {
//       throw new Error("No AI reply generated");
//     }

//     const newEmail = new Email({ sender, subject, body, aiReply: reply });
//     await newEmail.save();

//     res.status(201).json(newEmail);
//   } catch (error) {
//     console.error("❌ Error in addEmail:", error.response?.data || error.message);
//     res.status(500).json({ error: error.message || "Server error" });
//   }
// };

// // Fetch all emails
// exports.getEmails = async (req, res) => {
//   try {
//     const emails = await Email.find().sort({ _id: -1 });
//     res.json(emails);
//   } catch (error) {
//     console.error("❌ Error in getEmails:", error.message);
//     res.status(500).json({ error: "Server error" });
//   }
// };






// // controllers/emailController.js
// const mongoose = require("mongoose");
// const { GoogleGenerativeAI } = require("@google/generative-ai");

// // Schema
// const emailSchema = new mongoose.Schema({
//   sender: String,
//   subject: String,
//   body: String,
//   aiReply: String,
  
// },
//   { timestamps: true } 
// );
// const Email = mongoose.model("Email", emailSchema);

// // Gemini Config
// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
// const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// // Save new email + generate AI reply
// exports.addEmail = async (req, res) => {
//   try {
//     const { sender, subject, body } = req.body;

//     // Ask Gemini for a smart reply
//     const prompt = `You are a helpful email assistant. Write a professional reply to this email:\n\nSubject: ${subject}\nBody: ${body}`;

//     const result = await model.generateContent(prompt);
//     const reply = result.response.text();

//     // Save to DB
//     const newEmail = new Email({ sender, subject, body, aiReply: reply });
//     await newEmail.save();

//     res.status(201).json(newEmail);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Server error" });
//   }
// };

// // Fetch all emails
// exports.getEmails = async (req, res) => {
//   try {
//     const emails = await Email.find().sort({ _id: -1 });
//     res.json(emails);
//   } catch (error) {
//     res.status(500).json({ error: "Server error" });
//   }
// };







// controllers/emailController.js
// const mongoose = require("mongoose");
// const { GoogleGenerativeAI } = require("@google/generative-ai");

// // Schema with timestamps
// const emailSchema = new mongoose.Schema(
//   {
//     sender: String,
//     subject: String,
//     body: String,
//     aiReply: String,
//   },
//   { timestamps: true } // adds createdAt, updatedAt
// );
// const Email = mongoose.model("Email", emailSchema);

// // Gemini Config
// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
// const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// /**
//  * POST /api/emails
//  * Save new email + generate AI reply
//  */
// exports.addEmail = async (req, res) => {
//   try {
//     const { sender, subject, body } = req.body;

//     if (!sender || !subject || !body) {
//       return res.status(400).json({ error: "All fields are required" });
//     }

//     // Ask Gemini for a smart reply
//     const prompt = `You are a helpful email assistant. Write a professional reply to this email:\n\nSubject: ${subject}\nBody: ${body}`;

//     const result = await model.generateContent(prompt);
//     const reply = result.response.text();

//     // Save to DB
//     const newEmail = new Email({ sender, subject, body, aiReply: reply });
//     await newEmail.save();

//     res.status(201).json({
//       id: newEmail._id,
//       sender: newEmail.sender,
//       subject: newEmail.subject,
//       body: newEmail.body,
//       aiReply: newEmail.aiReply,
//       createdAt: newEmail.createdAt,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Server error" });
//   }
// };

// /**
//  * GET /api/emails
//  * Fetch all emails
//  */
// exports.getEmails = async (req, res) => {
//   try {
//     const emails = await Email.find().sort({ createdAt: -1 });

//     const formatted = emails.map((email) => ({
//       id: email._id,
//       sender: email.sender,
//       subject: email.subject,
//       body: email.body,
//       aiReply: email.aiReply,
//       createdAt: email.createdAt,
//     }));

//     res.json(formatted);
//   } catch (error) {
//     res.status(500).json({ error: "Server error" });
//   }
// };

// /**
//  * GET /api/emails/:id
//  * Fetch a single email by ID
//  */
// exports.getEmailById = async (req, res) => {
//   try {
//     const email = await Email.findById(req.params.id);
//     if (!email) return res.status(404).json({ error: "Email not found" });

//     res.json({
//       id: email._id,
//       sender: email.sender,
//       subject: email.subject,
//       body: email.body,
//       aiReply: email.aiReply,
//       createdAt: email.createdAt,
//     });
//   } catch (error) {
//     res.status(500).json({ error: "Server error" });
//   }
// };

// /**
//  * DELETE /api/emails/:id
//  * Delete email by ID
//  */
// exports.deleteEmail = async (req, res) => {
//   try {
//     const deleted = await Email.findByIdAndDelete(req.params.id);
//     if (!deleted) return res.status(404).json({ error: "Email not found" });

//     res.json({ message: "Email deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ error: "Server error" });
//   }
// };

// /**
//  * PUT /api/emails/:id
//  * Update email (e.g. edit subject/body and regenerate AI reply)
//  */
// exports.updateEmail = async (req, res) => {
//   try {
//     const { subject, body } = req.body;
//     const email = await Email.findById(req.params.id);

//     if (!email) return res.status(404).json({ error: "Email not found" });

//     // Update fields if provided
//     if (subject) email.subject = subject;
//     if (body) email.body = body;

//     // Regenerate AI reply if body/subject changed
//     if (subject || body) {
//       const prompt = `You are a helpful email assistant. Write a professional reply to this email:\n\nSubject: ${email.subject}\nBody: ${email.body}`;
//       const result = await model.generateContent(prompt);
//       email.aiReply = result.response.text();
//     }

//     await email.save();

//     res.json({
//       id: email._id,
//       sender: email.sender,
//       subject: email.subject,
//       body: email.body,
//       aiReply: email.aiReply,
//       createdAt: email.createdAt,
//       updatedAt: email.updatedAt,
//     });
//   } catch (error) {
//     res.status(500).json({ error: "Server error" });
//   }
// };






// // controllers/emailController.js
// const mongoose = require("mongoose");
// const { GoogleGenerativeAI } = require("@google/generative-ai");

// // Schema with timestamps
// const emailSchema = new mongoose.Schema(
//   {
//     sender: String,
//     subject: String,
//     body: String,
//     aiReply: String,
//   },
//   { timestamps: true } // adds createdAt, updatedAt
// );
// const Email = mongoose.model("Email", emailSchema);

// // Gemini Config
// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
// const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// /**
//  * POST /api/emails
//  * Save new email + generate AI reply
//  */
// exports.addEmail = async (req, res) => {
//   try {
//     const { sender, subject, body } = req.body;

//     if (!sender || !subject || !body) {
//       return res.status(400).json({ error: "All fields are required" });
//     }

//     // Ask Gemini for a smart reply
//     const prompt = `You are a helpful email assistant. Write a professional reply to this email:\n\nSubject: ${subject}\nBody: ${body}`;
//     const result = await model.generateContent(prompt);
//     const reply = result.response.text();

//     // Save to DB
//     const newEmail = new Email({ sender, subject, body, aiReply: reply });
//     await newEmail.save();

//     res.status(201).json({
//       id: newEmail._id,
//       sender: newEmail.sender,
//       subject: newEmail.subject,
//       body: newEmail.body,
//       aiReply: newEmail.aiReply,
//       createdAt: newEmail.createdAt,
//     });
//   } catch (error) {
//     console.error("❌ addEmail error:", error);
//     res.status(500).json({ error: "Server error" });
//   }
// };

// /**
//  * GET /api/emails
//  * Fetch all emails
//  */
// exports.getEmails = async (req, res) => {
//   try {
//     const emails = await Email.find().sort({ createdAt: -1 });

//     const formatted = emails.map((email) => ({
//       id: email._id, // return as id (not _id) for frontend consistency
//       sender: email.sender,
//       subject: email.subject,
//       body: email.body,
//       aiReply: email.aiReply,
//       createdAt: email.createdAt,
//     }));

//     res.json(formatted);
//   } catch (error) {
//     console.error("❌ getEmails error:", error);
//     res.status(500).json({ error: "Server error" });
//   }
// };

// /**
//  * GET /api/emails/:id
//  * Fetch a single email by ID
//  */
// exports.getEmailById = async (req, res) => {
//   try {
//     const email = await Email.findById(req.params.id);
//     if (!email) return res.status(404).json({ error: "Email not found" });

//     res.json({
//       id: email._id,
//       sender: email.sender,
//       subject: email.subject,
//       body: email.body,
//       aiReply: email.aiReply,
//       createdAt: email.createdAt,
//     });
//   } catch (error) {
//     console.error("❌ getEmailById error:", error);
//     res.status(500).json({ error: "Server error" });
//   }
// };

// /**
//  * DELETE /api/emails/:id
//  * Delete email by ID
//  */
// exports.deleteEmail = async (req, res) => {
//   try {
//     const deleted = await Email.findByIdAndDelete(req.params.id);
//     if (!deleted) return res.status(404).json({ error: "Email not found" });

//     res.json({ message: "✅ Email deleted successfully" });
//   } catch (error) {
//     console.error("❌ deleteEmail error:", error);
//     res.status(500).json({ error: "Server error" });
//   }
// };

// /**
//  * PUT /api/emails/:id
//  * Update email (e.g. edit subject/body and regenerate AI reply)
//  */
// exports.updateEmail = async (req, res) => {
//   try {
//     const { subject, body } = req.body;
//     const email = await Email.findById(req.params.id);

//     if (!email) return res.status(404).json({ error: "Email not found" });

//     // Update fields if provided
//     if (subject) email.subject = subject;
//     if (body) email.body = body;

//     // Regenerate AI reply if body/subject changed
//     if (subject || body) {
//       const prompt = `You are a helpful email assistant. Write a professional reply to this email:\n\nSubject: ${email.subject}\nBody: ${email.body}`;
//       const result = await model.generateContent(prompt);
//       email.aiReply = result.response.text();
//     }

//     await email.save();

//     res.json({
//       id: email._id,
//       sender: email.sender,
//       subject: email.subject,
//       body: email.body,
//       aiReply: email.aiReply,
//       createdAt: email.createdAt,
//       updatedAt: email.updatedAt,
//     });
//   } catch (error) {
//     console.error("❌ updateEmail error:", error);
//     res.status(500).json({ error: "Server error" });
//   }
// };







// controllers/emailController.js
const mongoose = require("mongoose");
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Schema with timestamps
const emailSchema = new mongoose.Schema(
  {
    sender: String,
    subject: String,
    body: String,
    aiReply: String,
  },
  { timestamps: true }
);
const Email = mongoose.model("Email", emailSchema);

// Gemini Config
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// 🔹 Helper to safely extract text
function extractReply(result) {
  try {
    if (result.response?.candidates?.[0]?.content?.parts?.[0]?.text) {
      return result.response.candidates[0].content.parts[0].text;
    }
    if (result.response?.text) {
      return result.response.text();
    }
    return "⚠️ No reply generated.";
  } catch (e) {
    console.error("❌ Failed to extract Gemini reply:", e);
    return "⚠️ AI reply unavailable.";
  }
}

/**
 * POST /api/emails
 * Save new email + generate AI reply
 */
exports.addEmail = async (req, res) => {
  try {
    const { sender, subject, body } = req.body;

    if (!sender || !subject || !body) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Ask Gemini for a smart reply
    const prompt = `You are a helpful email assistant. Write a professional reply to this email:\n\nSubject: ${subject}\nBody: ${body}`;
    const result = await model.generateContent(prompt);
    const reply = extractReply(result);

    // Save to DB
    const newEmail = new Email({ sender, subject, body, aiReply: reply });
    await newEmail.save();

    res.status(201).json({
      id: newEmail._id,
      sender: newEmail.sender,
      subject: newEmail.subject,
      body: newEmail.body,
      aiReply: newEmail.aiReply,
      createdAt: newEmail.createdAt,
    });
  } catch (error) {
    console.error("❌ addEmail error:", error);
    res.status(500).json({ error: "Server error" });
  }
};

/**
 * GET /api/emails
 */
exports.getEmails = async (req, res) => {
  try {
    const emails = await Email.find().sort({ createdAt: -1 });

    const formatted = emails.map((email) => ({
      id: email._id,
      sender: email.sender,
      subject: email.subject,
      body: email.body,
      aiReply: email.aiReply,
      createdAt: email.createdAt,
    }));

    res.json(formatted);
  } catch (error) {
    console.error("❌ getEmails error:", error);
    res.status(500).json({ error: "Server error" });
  }
};

/**
 * GET /api/emails/:id
 */
exports.getEmailById = async (req, res) => {
  try {
    const email = await Email.findById(req.params.id);
    if (!email) return res.status(404).json({ error: "Email not found" });

    res.json({
      id: email._id,
      sender: email.sender,
      subject: email.subject,
      body: email.body,
      aiReply: email.aiReply,
      createdAt: email.createdAt,
    });
  } catch (error) {
    console.error("❌ getEmailById error:", error);
    res.status(500).json({ error: "Server error" });
  }
};

/**
 * DELETE /api/emails/:id
 */
exports.deleteEmail = async (req, res) => {
  try {
    const deleted = await Email.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Email not found" });

    res.json({ message: "✅ Email deleted successfully" });
  } catch (error) {
    console.error("❌ deleteEmail error:", error);
    res.status(500).json({ error: "Server error" });
  }
};

/**
 * PUT /api/emails/:id
 */
exports.updateEmail = async (req, res) => {
  try {
    const { subject, body } = req.body;
    const email = await Email.findById(req.params.id);

    if (!email) return res.status(404).json({ error: "Email not found" });

    if (subject) email.subject = subject;
    if (body) email.body = body;

    // Regenerate AI reply
    if (subject || body) {
      const prompt = `You are a helpful email assistant. Write a professional reply to this email:\n\nSubject: ${email.subject}\nBody: ${email.body}`;
      const result = await model.generateContent(prompt);
      email.aiReply = extractReply(result);
    }

    await email.save();

    res.json({
      id: email._id,
      sender: email.sender,
      subject: email.subject,
      body: email.body,
      aiReply: email.aiReply,
      createdAt: email.createdAt,
      updatedAt: email.updatedAt,
    });
  } catch (error) {
    console.error("❌ updateEmail error:", error);
    res.status(500).json({ error: "Server error" });
  }
};
