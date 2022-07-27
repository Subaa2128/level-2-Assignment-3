// mongoose Database


import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()


const mongooseurl = process.env.DR_URL 

mongoose.connect(mongooseurl).then(res =>console.log("mongoose connected")).catch(err =>console.log(err))