import express from "express";
import productRouter from "./routers/product";
import authRouter from "./routers/auth";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api", productRouter);
app.use("/api", authRouter);
mongoose.connect("mongodb://127.0.0.1:27017/we17309");
export const viteNodeApp = app;

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDI2NDg1MmI1ZGRmNWJiNjA4MWU2ODkiLCJpYXQiOjE2ODAyMzA1MDksImV4cCI6MTY4MDIzNDEwOX0.aJUXev6NYocbwRba27g2d7m6oJ2J9ODst5qhmNE53pk
