import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongooseUrl = process.env.DB_URL;

mongoose
  .connect(mongooseUrl)
  .then((res) => console.log("mongodb connected"))
  .catch((err) => console.log(err));
