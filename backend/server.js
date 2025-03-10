// server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectToMongoDB } from "./config/mongoDB.js";
import balanceRoutes from "./routes/balanceRoutes.js";
import transactionsRoutes from "./routes/transactionsRoutes.js";
import potsRoutes from "./routes/potsRoutes.js";
import budgetsRoutes from "./routes/budgetsRoutes.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json()); // Middleware to parse JSON requests

connectToMongoDB();

app.use("/api/balance", balanceRoutes);
app.use("/api/transactions", transactionsRoutes);
app.use("/api/pots", potsRoutes);
app.use("/api/budgets", budgetsRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});



