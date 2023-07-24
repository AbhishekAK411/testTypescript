import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import router from "./routes/userRoutes";

const app=express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use('/type',router);

dotenv.config();

mongoose.connect(process.env.MONGO)
.then(()=>console.log("DB connected"))
.catch((err)=>console.log("DB error=>",err));

app.listen(process.env.PORT,()=> console.log(`Working on port ${process.env.PORT}`))