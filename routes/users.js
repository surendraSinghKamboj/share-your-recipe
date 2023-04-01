import { createUser } from '../controllers/users.js';
import express from "express";

const router = express.Router();


router.post("/create", createUser);




export const userRouter = router;