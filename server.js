// server.js
// const express = require("express");
// const dotenv = require("dotenv");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const connectDB = require("./db");

// dotenv.config();
// connectDB();

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// // Routes
// const emailRoutes = require("./routes/emailRoutes");
// app.use("/api/emails", emailRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));







// // server.js
// const express = require("express");
// const dotenv = require("dotenv");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const path = require("path");
// const connectDB = require("./db");

// dotenv.config();
// connectDB();

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// // ✅ Serve static frontend
// app.use(express.static(path.join(__dirname, "public")));

// // Routes
// const emailRoutes = require("./routes/emailRoutes");
// app.use("/api/emails", emailRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));







// // server.js
// const express = require("express");
// const dotenv = require("dotenv");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const path = require("path");
// const { requireAuth } = require("@clerk/clerk-sdk-node");
// const connectDB = require("./db");

// dotenv.config();
// connectDB();

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// // ✅ Serve static frontend
// app.use(express.static(path.join(__dirname, "public")));

// // ✅ Protect API routes with Clerk
// const emailRoutes = require("./routes/emailRoutes");
// app.use("/api/emails", requireAuth(), emailRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));






// server.js
// const express = require("express");
// const dotenv = require("dotenv");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const path = require("path");
// const { requireAuth } = require("@clerk/clerk-sdk-node");
// const connectDB = require("./db");

// dotenv.config();
// connectDB();

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// // ✅ Serve static frontend
// app.use(express.static(path.join(__dirname, "public")));

// // ✅ Protect API routes with Clerk (only logged-in users can access)
// const emailRoutes = require("./routes/emailRoutes");
// app.use("/api/emails", requireAuth(), emailRoutes);

// // ✅ Catch-all → serve index.html (for Clerk routing)
// app.get(/.*/, (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));







// // server.js
// const express = require("express");
// const dotenv = require("dotenv");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const path = require("path");
// const { ClerkExpressRequireAuth } = require("@clerk/clerk-sdk-node");
// const connectDB = require("./db");

// dotenv.config();
// connectDB();

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// // ✅ Serve static frontend
// app.use(express.static(path.join(__dirname, "public")));

// // ✅ Email routes (protected by Clerk)
// const emailRoutes = require("./routes/emailRoutes");
// app.use("/api/emails", ClerkExpressRequireAuth(), emailRoutes);

// // ✅ Simple test route
// app.get("/api/hello", ClerkExpressRequireAuth(), (req, res) => {
//   res.json({ msg: "You are logged in!", userId: req.auth.userId });
// });

// // ✅ Catch-all → serve frontend
// app.get(/.*/, (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));






// // server.js
// const express = require("express");
// const dotenv = require("dotenv");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const path = require("path");
// const connectDB = require("./db");

// dotenv.config();
// connectDB();

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// // ✅ Serve static frontend
// app.use(express.static(path.join(__dirname, "public")));

// // Routes
// const emailRoutes = require("./routes/emailRoutes");
// app.use("/api/emails", emailRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));







// // server.js
// const express = require("express");
// const dotenv = require("dotenv");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const path = require("path");
// const session = require("express-session");
// const { connectDB } = require("./db");

// dotenv.config();
// connectDB();

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // Session middleware
// app.use(
//   session({
//     secret: "mysecretkey",
//     resave: false,
//     saveUninitialized: true,
//   })
// );

// // ✅ Serve static frontend
// app.use(express.static(path.join(__dirname, "public")));

// // Routes
// const emailRoutes = require("./routes/emailRoutes");
// const authRoutes = require("./routes/authRoutes");
// app.use("/api/emails", emailRoutes);
// app.use("/auth", authRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));





// // server.js
// const express = require("express");
// const dotenv = require("dotenv");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const path = require("path");
// const session = require("express-session");
// const connectDB = require("./db"); // <- you had { connectDB } but in db.js it's exported directly

// dotenv.config();
// connectDB();

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // Session middleware
// app.use(
//   session({
//     secret: "mysecretkey",
//     resave: false,
//     saveUninitialized: false,
//   })
// );

// // ✅ Protect index.html
// app.get("/", (req, res) => {
//   if (!req.session.user) {
//     return res.redirect("/login.html");
//   }
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// // ✅ Serve static frontend
// app.use(express.static(path.join(__dirname, "public")));

// // Routes
// const emailRoutes = require("./routes/emailRoutes");
// const authRoutes = require("./routes/authRoutes");
// app.use("/api/emails", emailRoutes);
// app.use("/auth", authRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));




// // server.js
// const express = require("express");
// const dotenv = require("dotenv");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const path = require("path");
// const session = require("express-session");
// const connectDB = require("./db"); // make sure db.js exports a function

// // Load environment variables
// dotenv.config();

// // Connect to MongoDB
// connectDB();

// const app = express();

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // Session middleware
// app.use(
//   session({
//     secret: "mysecretkey",
//     resave: false,
//     saveUninitialized: false,
//   })
// );

// // ✅ Protect index.html
// app.get("/", (req, res) => {
//   if (!req.session.user) {
//     return res.redirect("/login.html");
//   }
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// // ✅ Serve static frontend
// app.use(express.static(path.join(__dirname, "public")));

// // Routes
// const emailRoutes = require("./routes/emailRoutes");
// const authRoutes = require("./routes/authRoutes");
// app.use("/api/emails", emailRoutes);
// app.use("/auth", authRoutes);

// // Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));







// server.js
const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const session = require("express-session");
const { connectDB } = require("./db"); // ✅ Destructure

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Session middleware
app.use(
  session({
    secret: "mysecretkey",
    resave: false,
    saveUninitialized: false,
  })
);

// Protect index.html
app.get("/", (req, res) => {
  if (!req.session.user) {
    return res.redirect("/login.html");
  }
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Serve static frontend
app.use(express.static(path.join(__dirname, "public")));

// Routes
const emailRoutes = require("./routes/emailRoutes");
const authRoutes = require("./routes/authRoutes");
app.use("/api/emails", emailRoutes);
app.use("/auth", authRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
