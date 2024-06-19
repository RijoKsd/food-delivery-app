import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { connectDB } from "./config/db.js";
import FoodRouter from "./routes/foodRoute.js";

// app config

dotenv.config();
const app = express();

const port = process.env.PORT || 4000;

// middleware

app.use(express.json());
app.use(cors());

// db connection
connectDB();

// api endpoints
app.use("/api/food", FoodRouter);
app.use("/images", express.static("uploads"));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
