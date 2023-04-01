import express from 'express'
import { app } from './app.js';
import connectDb from './database/connectDB.js';



connectDb(process.env.MONGO_URI);



app.listen(process.env.PORT, () => console.log(`Server started on http://localhost:${process.env.PORT}`))