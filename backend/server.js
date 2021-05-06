import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

import connectDB from "./config/db.js";

import teamRoutes from "./routes/teamRoutes.js";
import teamMemberRoutes from "./routes/teamMemberRoutes.js";

dotenv.config();

connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use(express.json());

app.use("/api/teamMembers", teamMemberRoutes);
app.use("/api/teams", teamRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
const MODE = process.env.NODE_ENV;

app.listen(
  PORT,
  console.log(
    `Server running in ${MODE} mode on port ${PORT}`.underline.yellow.bold
  )
);
