import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import orderRoutes from "./routes/orderRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Connection Error:", err));

app.use("/api/orders", orderRoutes);

const PORT = process.env.PORT || 5000;

app.get("/test-db", async (req, res) => {
  try {
    await mongoose.connection.db.admin().ping();
    res.json({ message: "MongoDB Connected Successfully!" });
  } catch (error) {
    res.status(500).json({ error: "MongoDB Connection Failed" });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));




