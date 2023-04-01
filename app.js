import express from "express";
import dotenv from "dotenv";
import { userRouter } from "./routes/users.js";

dotenv.config({ path: "./config.env" })

export const app = express();

// middlewares 
app.use(express.json());


// Routes
app.use("/api/v1/user", userRouter)