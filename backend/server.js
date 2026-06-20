const express = require("express");
const cors = require("cors");
const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve frontend
app.use(express.static(path.join(__dirname, "../frontend")));

// Database
const db = new sqlite3.Database(
  path.join(__dirname, "database.db"),
  (err) => {
    if (err) console.error("Database Error:", err);
    else console.log("Database connected successfully.");
  }
);

// Create table
db.run(`
  CREATE TABLE IF NOT EXISTS reports (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    type TEXT NOT NULL,
    description TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

// API Routes
app.get("/api/health", (req, res) => {
  res.json({ status: "Server is running." });
});

app.post("/api/report", (req, res) => {
  const { name, email, type, description } = req.body;

  if (!name || !email || !type || !description) {
    return res.status(400).json({ message: "All fields are required." });
  }

  db.run(
    "INSERT INTO reports (name, email, type, description) VALUES (?, ?, ?, ?)",
    [name, email, type, description],
    function (err) {
      if (err) {
        console.error("DB Insert Error:", err);
        return res.status(500).json({ message: "Internal server error." });
      }
      res.json({ message: "Report submitted successfully." });
    }
  );
});

app.get("/api/reports", (req, res) => {
  db.all("SELECT * FROM reports ORDER BY created_at DESC", (err, rows) => {
    if (err) {
      console.error("DB Fetch Error:", err);
      return res.status(500).json({ message: "Failed to fetch reports." });
    }
    res.json(rows);
  });
});

// Fallback - serve index.html for all routes
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});