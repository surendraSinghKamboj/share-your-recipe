import express from "express";
import dotenv from "dotenv";

dotenv.config({path:"./config.env"})

export const app = express();


app.use(express.json());


