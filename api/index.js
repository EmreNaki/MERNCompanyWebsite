// index.js
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import messagesRoute from "./routes/messages.js";
import projectsRoute from "./routes/projects.js";
import User from "./models/User.js";
import bcrypt from "bcrypt";
import authRoute from "./routes/auth.js";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

// 🧠 CORS — development ve production için ayır
const allowedOrigins = [
  "http://localhost:3000",
  "https://yourdomain.com" // kendi domainini buraya ekle
];

app.use(cors({
  origin: allowedOrigins,
  methods: ["GET", "POST", "OPTIONS", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());
app.use("/uploads", express.static("uploads"));

// Logger middleware
app.use((req, res, next) => {
  console.log("➡️ Incoming request:", req.method, req.url, req.body);
  next();
});

// Routes
app.use("/api/auth", authRoute);
app.use("/api/messages", messagesRoute);
app.use("/api/projects", projectsRoute);



// MongoDB bağlantısı
async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB connected");

    // Admin kullanıcı kontrolü
    const admin = await User.findOne({ username: "admin" });
    if (!admin) {
      const hashedPassword = await bcrypt.hash("admin123", 10);
      await User.create({
        username: "admin",
        password: hashedPassword,
        role: "admin",
      });
      console.log("👑 Admin user created");
    }
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
  }
}
connectDB();

// -------- React build dosyalarını sunmak için ekleme --------
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// React build klasörünü serve et
app.use(express.static(path.join(__dirname, "../client/build")));

// React fallback route (Express 5 uyumlu)
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});



app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
