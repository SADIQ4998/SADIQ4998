import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db.js";

//configration

dotenv.config();
const PORT = process.env.PORT;
//initialize a server
const app = express();

//connecting DB
connectDB();

app.listen(PORT, () => console.log('server running in ${PORT}'))