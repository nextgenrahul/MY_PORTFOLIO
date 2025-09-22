import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import fetch from "node-fetch"; // ✅ works in ESM

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz0ORBeXpONkIk3yRfgiDDiMYtVeWoSWhtnJesiVFqJyRBsgLreYu17bCt_ccZqiTgdng/exec";

app.post("/submit-contact", async (req, res) => {
  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body),
    });
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Google Sheets Error:", error);
    res.status(500).json({ status: "error", message: "Failed to send message" });
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
