import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mangooseUrl = process.env.DB_URL;

mongoose
  .connect(mangooseUrl)
  .then((res) => console.log("db connected "))
  .catch((err) => console.log(err));
